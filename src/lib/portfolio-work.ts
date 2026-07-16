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
    tagline: "Multilingual learning platform",
    summary:
      "A learning platform mapping the West African curriculum — WASSCE, BECE, bridging and career tracks — in English, French and Arabic. Video streaming, certificates and role-based access for students, tutors and admins.",
    image: "/work/koyi.webp",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS S3"],
  },
  {
    name: "SIIF",
    sector: "Financial Services",
    tagline: "Institutional finance portal",
    summary:
      "A high-fidelity identity, academy and intelligence portal for an emerging-markets finance institute. Institutional rigour paired with a distinct, custom visual language.",
    image: "/work/siif.webp",
    stack: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
  },
  {
    name: "Ethika Finance",
    sector: "FinTech",
    tagline: "Non-interest banking hub",
    summary:
      "A bilingual knowledge and product hub for Shariah-compliant, non-interest banking, aligned to Bank of Ghana's regulatory framework. Built to make ethical finance legible to everyday customers.",
    image: "/work/ethika.webp",
    stack: ["Next.js", "TypeScript", "Supabase", "next-intl"],
    href: "https://ethika.vercel.app",
  },
  {
    name: "Rockmotion Auto Group",
    sector: "Logistics & Trade",
    tagline: "US automotive export platform",
    summary:
      "A logistics-grade platform for exporting vehicles from the US worldwide — live inventory, a shipping calculator, and transparent transit and insurance. Trust engineered into every step.",
    image: "/work/rockmotion-live.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://rockmotion.vercel.app",
  },
  {
    name: "Magilo Art College",
    sector: "Institutional",
    tagline: "Art school, design & printing hub",
    summary:
      "A polished institutional site for an art college and its design-and-printing arm — programmes, services and enrolment in one editorial system. Structured to grow with the institution.",
    image: "/work/magilo-live.webp",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://magiloartcollege.com",
  },
];
