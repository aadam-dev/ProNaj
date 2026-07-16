# Pronaj International

Corporate website for Pronaj International, a conglomerate operating across three sectors: digital services, modular living solutions, and agricultural trade.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── digital/           # IT services sector
│   ├── living/            # Furniture & container housing
│   ├── global/            # Agriculture & trade
│   └── ...                # Static pages (about, contact, legal)
├── components/
│   ├── layout/            # Header, footer, navigation
│   ├── home/              # Homepage sections
│   ├── digital/           # Digital sector components
│   ├── living/            # Living sector components
│   ├── global/            # Global sector components
│   ├── shared/            # Reusable components
│   └── ui/                # Base UI components (shadcn)
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── animations.ts      # Framer Motion presets
│   └── validation.ts      # Form validation schemas
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript definitions
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui

## Design System

**Colors**
- Primary: `#050505` (Obsidian)
- Secondary: `#F1F5F9` (Concrete)
- Accent: `#F97316` (Safety Orange)

**Typography**
- Headlines: Space Grotesk
- Body: Satoshi
- Technical: JetBrains Mono

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Environment Variables

Create `.env.local` for local development:

```
# Required for contact form
CONTACT_EMAIL=contact@pronaj.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=
```

## Deployment

Build and deploy to any Node.js hosting platform:

```bash
npm run build
npm run start
```

For static export (if no server features needed):

```bash
npm run build
# Output in .next/
```

## License

Proprietary. All rights reserved.
