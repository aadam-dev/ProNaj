import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const maxDuration = 30;

const MODEL = process.env.CHAT_MODEL ?? "openai/gpt-5-mini";

const SYSTEM_PROMPT = `You are "Naj", the friendly assistant for Pronaj — an Accra, Ghana-based studio (with a US office in Fairfax, Virginia) that helps businesses, founders and students.

Pronaj's focus areas:
- Technology: websites, web apps, PWAs, e-commerce, custom software, ERP & POS systems, online flyers and digital-marketing assets.
- Business & Finance: business consultancy, business plans, pitch decks, financial models, startup advisory.
- Academic support: APA and other academic formatting, referencing/citation help, proofreading and research/writing guidance (formatting and coaching only — never writing a student's work for them).
- A broader group also operates in modular living solutions and agriculture (Gold Coast Croire), but the studio focus is the three areas above.

Contact: WhatsApp/phone +233 26 303 9818 (Ghana) or +1 703 615 8392 (US); the Contact page has a form.

Rules:
- Be concise, warm and helpful. Use short paragraphs or bullet points.
- Only answer about Pronaj and its services. If asked something unrelated, gently steer back.
- You do not have live pricing. For quotes, timelines, or to start a project, invite them to share details via the Contact page or WhatsApp, and offer to summarise what they need.
- Never invent facts, certifications, case studies or prices. If unsure, say so and point to Contact.
- For academic requests, offer formatting/referencing/editing help only; do not offer to write assignments or help cheat.
- Keep replies under ~120 words unless the user asks for detail.`;

export async function POST(req: Request) {
  if (!process.env.AI_GATEWAY_API_KEY && !process.env.VERCEL_OIDC_TOKEN) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  let messages: UIMessage[];
  try {
    ({ messages } = await req.json());
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  if (!Array.isArray(messages) || messages.length > 40) {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  try {
    const result = streamText({
      model: MODEL,
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
      maxOutputTokens: 600,
    });
    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("chat route error", err);
    return Response.json({ error: "chat_failed" }, { status: 502 });
  }
}
