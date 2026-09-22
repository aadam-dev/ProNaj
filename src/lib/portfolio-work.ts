/**
 * Selected client work delivered by the Pronaj Digital web team.
 * Curated for the Web Development capability page — a cross-sector proof of range.
 */
export interface WorkProject {
  name: string;
  /** Short sector label shown as a tag. */
  sector: string;
  /** One-line positioning. */
  tagline: string;
  /** Two-sentence outcome-oriented summary in Pronaj's corporate voice. */
  summary: string;
  image: string;
  stack: string[];
  /** Public deployment, when the client site is live. */
  href?: string;
}

export const workProjects: WorkProject[] = [
  {
    name: "PrimeTijara",
    sector: "B2B Commerce",
    tagline: "Building-materials procurement OS",
    summary:
      "A verified procurement desk unifying competitive stock, formal proformas, approvals and deliveries for Ghanaian builders. We delivered the storefront, an Odoo-style back office and an in-house POS on a single source of stock and cash truth.",
    image: "/work/primetijara-landing.webp",
    stack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL"],
    href: "https://primehubgh.vercel.app",
  },
  {
    name: "Al Boyut",
    sector: "Building-Materials Retail",
    tagline: "Brand, storefront & counter operations",
    summary:
      "A builder's merchant on Lakeside Estate, Accra, taken from no logo and no web presence to a full identity, a live storefront and the platform that runs the counter. We delivered the brand system, a 450+ item catalogue with WhatsApp ordering, a POS register, orders, stock-controlled inventory and a verified Google Business Profile, with ongoing operational support.",
    image: "/work/al-boyut-landing.webp",
    stack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL"],
    href: "https://alboyut.com",
  },
  {
    name: "Jireh Natural Foods",
    sector: "Hospitality",
    tagline: "Restaurant site, POS & back office",
    summary:
      "An end-to-end platform for a natural-foods restaurant: a conversion-focused storefront, a counter POS, and a back office for orders, menu and inventory. One system runs the front of house and the books.",
    image: "/work/jireh-live.webp",
    stack: ["Next.js", "TypeScript", "Prisma", "NextAuth"],
    href: "https://jirehnaturalfoods.vercel.app",
  },
  {
    name: "Muna Muse",
    sector: "Fashion",
    tagline: "African print, finished on WhatsApp",
    summary:
      "A dual-market fashion storefront for African print: adire, batik and ankara, shipping from New York to the US and Ghana. Shoppers build a bag on the site; send turns the order into a WhatsApp message. Dollar and cedi prices are set per market, not converted live.",
    image: "/work/munamuse-landing.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Blob"],
    href: "https://temporarymunamusedomain.vercel.app",
  },
  {
    name: "Zaina's Couture",
    sector: "Fashion",
    tagline: "Curated fashion, delivered in Accra",
    summary:
      "A boutique storefront for a curated fashion label in Adenta. Shoppers browse drops, build a bag and finish on WhatsApp with Mobile Money. Weekend delivery across Greater Accra, free pickup at the Adenta base, and an owner catalogue that updates the shop the moment stock changes.",
    image: "/work/zainas-landing.webp",
    stack: ["Next.js", "TypeScript", "Drizzle", "Neon"],
    href: "https://temporaryzainascouturedomain.vercel.app",
  },
  {
    name: "Chale Socks",
    sector: "Retail & E-Commerce",
    tagline: "Afro-luxury commerce, globally",
    summary:
      "We positioned an African gift brand as an international luxury staple through immersive storytelling and high-fidelity commerce UX. A headless storefront built for conversion and brand.",
    image: "/work/chalesocks-live.webp",
    stack: ["Next.js", "Sanity CMS", "Shopify", "Framer Motion"],
    href: "https://chalesocks.vercel.app",
  },
  {
    name: "Kōyi",
    sector: "Education",
    tagline: "Exam pathways, schools and Madrasah",
    summary:
      "A public knowledge hub for Ghana and West Africa: exam and career pathway guides (BECE, WASSCE, CSSPS, JAMB, BAC, university), a school explorer, grade tools, and a Madrasah subject catalogue. English, French and Arabic, built around the decisions learners actually face.",
    image: "/work/koyi.webp",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "https://koyi-web.vercel.app/en/hub",
  },
  {
    name: "Ethika Finance",
    sector: "FinTech",
    tagline: "Non-interest finance intelligence",
    summary:
      "An institutional guide to non-interest finance in Ghana: a Bank of Ghana regulatory hub, a Knowledge Vault, assumption-led decision tools, and a bank directory. Bilingual English and French. Education around official sources, not a product brochure.",
    image: "/work/ethika.webp",
    stack: ["Next.js", "TypeScript", "Supabase", "next-intl"],
    href: "https://ethika.vercel.app",
  },
  {
    name: "The Makossa Shop",
    sector: "Retail",
    tagline: "Mini mart on Makossa Street",
    summary:
      "A neighbourhood mini mart in Adenta Housing Down. Shoppers browse the aisles online, send the basket on WhatsApp, and collect in store. Cash and Mobile Money at the counter. The public site carries the shelves, the map pin and opening hours.",
    image: "/work/makossa-landing.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    href: "https://makossashop.vercel.app",
  },
  {
    name: "Rockmotion Auto Group",
    sector: "Logistics & Trade",
    tagline: "US automotive export platform",
    summary:
      "A logistics-grade platform for exporting vehicles from the US worldwide: live inventory, a shipping calculator, and transparent transit and insurance. Trust engineered into every step.",
    image: "/work/rockmotion-live.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://rockmotion.vercel.app",
  },
];
