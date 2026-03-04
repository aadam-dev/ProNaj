import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, sanitizeInput } from "@/lib/validation";

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = getClientIP(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const data = {
    firstName: sanitizeInput(String(body.firstName || "")),
    lastName: sanitizeInput(String(body.lastName || "")),
    email: sanitizeInput(String(body.email || "")),
    interest: sanitizeInput(String(body.interest || "")),
    message: sanitizeInput(String(body.message || "")),
  };

  const validation = validateContactForm(data);
  if (!validation.valid) {
    return NextResponse.json(
      { error: "Validation failed", details: validation.errors },
      { status: 400 }
    );
  }

  // TODO: Integrate with email service (SendGrid, Resend, etc.)
  // For now, log the submission (remove in production)
  console.log("Contact form submission:", {
    ...data,
    timestamp: new Date().toISOString(),
    ip,
  });

  return NextResponse.json({ success: true });
}
