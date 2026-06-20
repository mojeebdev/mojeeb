# Mojeeb Titilayo — AI Product Engineer, Expert Vibe Coder, and Strategist

> "I got rejected countless of times. I locked in to change things for better."

*I build at the edge of thought.*

Personal portfolio for [mojeeb.xyz](https://mojeeb.xyz) — a sticky-sidebar, tab-navigated showcase of 30+ shipped AI and Web3 products. Built with Next.js 16 App Router, Freight Display Pro, and a yellow-accented light design system.

---

## Tech Stack

| Layer        | Choice                                              |
|-------------|-----------------------------------------------------|
| Framework    | Next.js 16 (App Router)                            |
| Language     | TypeScript                                          |
| Styling      | Tailwind CSS + CSS custom properties                |
| Fonts        | Freight Display Pro (local) · Satoshi · JetBrains Mono |
| Icons        | Lucide React                                        |
| Deployment   | Vercel                                              |

---

## Project Structure

```
mojeebfolio/
├── app/
│   ├── layout.tsx        # Metadata, JSON-LD, font vars, OG tags
│   ├── page.tsx          # Permanent redirect → /builds
│   ├── globals.css       # CSS variables, Satoshi import, animations
│   ├── builds/page.tsx   # Portfolio — featured, vibeathon, hackathons
│   ├── about/page.tsx    # Bio, hackathon win, education, DAETO
│   ├── experience/page.tsx
│   ├── blog/page.tsx
│   ├── ai/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── PortfolioShell.tsx # Shared sidebar + main layout
│   ├── Sidebar.tsx        # Sticky left panel — avatar, nav, socials
│   ├── BuildCard.tsx      # Featured / highlighted build card
│   ├── CompactCard.tsx    # Grid card (logo, tagline, tags)
│   ├── BuildsTab.tsx
│   ├── AboutTab.tsx
│   ├── ExperienceTab.tsx
│   ├── BlogTab.tsx
│   ├── AITab.tsx
│   └── ContactTab.tsx
├── lib/
│   ├── builds.ts         # builds, vibeathonBuilds, hackathonBuilds
│   ├── site.ts           # Routes, per-page metadata, email constant
│   ├── jsonLd.ts         # Person + WebSite structured data
│   └── fonts.ts
└── public/
    ├── llms.txt          # Machine-readable profile for AI crawlers
    ├── robots.txt
    ├── sitemap.xml
    ├── fonts/freight-display-pro/
    ├── mojeeb-toon.png
    ├── og-image.png
    └── site.webmanifest
```

---

## Local Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

---

## Activating Freight Display Pro

Freight Display Pro is a licensed font ([myfonts.com](https://www.myfonts.com/fonts/garagefonts/freight-disp-pro/)). The 10 required `woff2` files go in:

```
public/fonts/freight-display-pro/
├── FreightDispProBook-Regular.woff2
├── FreightDispProBook-Italic.woff2
├── FreightDispProMedium-Regular.woff2
├── FreightDispProMedium-Italic.woff2
├── FreightDispProSemibold-Regular.woff2
├── FreightDispProSemibold-Italic.woff2
├── FreightDispProBold-Regular.woff2
├── FreightDispProBold-Italic.woff2
├── FreightDispProBlack-Regular.woff2
└── FreightDispProBlack-Italic.woff2
```

`lib/fonts.ts` is already wired up to load them via `next/font/local`. No additional configuration needed.

---

## Adding a New Build

Open `lib/builds.ts` and add an entry to the appropriate array:

| Array              | Use for                                      |
|--------------------|----------------------------------------------|
| `builds`           | General portfolio products                   |
| `vibeathonBuilds`  | Vibeathon challenge builds                   |
| `hackathonBuilds`  | Hackathon submissions                        |

Vibeathon hub link: `vibeathonHubUrl` → `http://vibeathon30days.vercel.app`

```ts
{
  id: "your-build-id",
  name: "Build Name",
  url: "https://yourbuild.com",
  tagline: "One line tagline",
  problem: "The problem it solves.",       // optional — featured cards only
  idea: "The idea behind it.",             // optional
  stats: [                                 // optional
    { label: "Users", value: "1,200" },
  ],
  tech: ["Prompt Engineered by Mojeeb Titilayo", "Next.js", "Supabase"],
  status: "live",                          // live | building | paused | hold | hackathon
  xHandle: "@YourHandle",                  // optional
  featured: true,                          // optional — highlighted card
  logo: "https://yourbuild.com/logo.png",  // optional
  tags: ["Award or context label"],        // optional — e.g. hackathon name, "Built on Medo"
}
```

- Set `featured: true` in `builds` for the 6-slot featured section (everything else → compact grid).
- Set `featured: true` in `hackathonBuilds` to render as a highlighted `BuildCard` (e.g. ScopeAI award winner).
- All three sections render in `BuildsTab.tsx` automatically via exported filters.
- `tags` render as yellow badges on `BuildCard` and `CompactCard` in the live UI.

---

## SEO & Discoverability

- Crawlable routes: `/builds`, `/about`, `/experience`, `/blog`, `/ai`, `/contact`
- `public/llms.txt` — AI-readable profile (identity, products, awards, contact)
- `public/sitemap.xml` + `public/robots.txt` (Google, Bing, GPTBot, PerplexityBot allowed)
- JSON-LD `Person` + `WebSite` schemas in `app/layout.tsx` via `lib/jsonLd.ts`
- Submit sitemap in [Google Search Console](https://search.google.com/search-console) after deploy

---

## Design System

| Token             | Value                        |
|------------------|------------------------------|
| Background        | `#FAFAF7`                   |
| Card              | `#FFFFFF`                   |
| Yellow accent     | `#E8B84B`                   |
| Yellow dark       | `#C99A2E`                   |
| Ink (primary)     | `#0A0A08`                   |
| Ink (secondary)   | `#4A4844`                   |
| Ink (muted)       | `#8A8880`                   |
| Border            | `#E8E6DF`                   |
| Font display      | Freight Display Pro          |
| Font body         | Satoshi                      |
| Font mono         | JetBrains Mono               |

---

## Track Record

- **ScopeAI** — Content Creative Award winner, Build with Medo hackathon (Devpost).
- **BlindspotLab** — AI-native build studio. 30+ products shipped solo.
- **Taiku NFT** — Grew community from 3 → 9,000+ followers in 3.5 days.
- **SkylosChain** — Lifted engagement from 5% → 95% in 14 days.
- **Arcapush** — Startup discovery registry, 62+ indexed, 1.5k/mo traffic.

---

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers auto-deploy.

```bash
# One-click deploy
vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL=https://mojeeb.xyz` in Vercel environment variables if needed.

---

## Connect

| Platform  | Handle / Link                                |
|----------|----------------------------------------------|
| X        | [@tmojeeb](https://x.com/tmojeeb)        |
| GitHub   | [mojeebdev](https://github.com/mojeebdev)    |
| YouTube  | [@Tmojeeb](https://youtube.com/@tmojeeb)  |
| LinkedIn | [tmojeeb](https://linkedin.com/in/tmojeeb) |
| Email    | hello@mojeeb.xyz                         |
| Studio   | [blindspotlab.xyz](https://blindspotlab.xyz) |

---

*BlindspotLab — You have the idea. We ship the product.*