# Mojeeb Titilayo — AI Native Developer & Vibe Coder

> "I got rejected countless of times. I locked in to change things for better."

Personal portfolio for [mojeeb.xyz](https://mojeeb.xyz) — a sticky-sidebar, tab-navigated showcase of 20+ shipped AI and Web3 products. Built with Next.js 16 App Router, Freight Display Pro, and a yellow-accented light design system.

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
│   ├── page.tsx          # Tab state manager
│   └── globals.css       # CSS variables, Satoshi import, animations
├── components/
│   ├── Sidebar.tsx       # Sticky left panel — avatar, nav, socials
│   ├── BuildCard.tsx     # Featured build card (logo + full detail)
│   ├── CompactCard.tsx   # Secondary grid card (logo + tagline)
│   ├── BuildsTab.tsx     # /builds — featured + compact grid
│   ├── AboutTab.tsx      # /about — bio, education, DAETO, stack
│   ├── ExperienceTab.tsx # /experience — track record + capabilities
│   ├── BlogTab.tsx       # /blog — bento grid of articles
│   ├── AITab.tsx         # /ai — AI-powered builds + certifications
│   └── ContactTab.tsx    # /contact — CTA banner + socials + services
├── lib/
│   ├── builds.ts         # All 24 builds — data, logos, status, tech
│   └── fonts.ts          # Freight Display Pro local font setup
└── public/
    ├── fonts/
    │   └── freight-display-pro/   # 10 × woff2 files
    ├── mojeeb-toon.png            # Avatar
    ├── og-image.png               # OG banner (1200×630)
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
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

Open `lib/builds.ts` and add an entry to the `builds` array:

```ts
{
  id: "your-build-id",
  name: "Build Name",
  url: "https://yourbuild.com",
  tagline: "One line tagline",
  problem: "The problem it solves.",       
  idea: "The idea behind it.",            
  stats: [                                 
    { label: "Users", value: "1,200" },
  ],
  tech: ["Next.js", "Supabase"],
  status: "live",                          
  xHandle: "@YourHandle",                  
  featured: true,                          
  logo: "https://yourbuild.com/logo.png",  
}
```

Set `featured: true` for the 7-slot featured section. Everything else falls into the compact 2-col grid automatically.

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

- **BlindspotLab** — AI-native build studio. 18+ products shipped solo.
- **Taiku NFT** — Grew community from 3 → 9,000+ followers in 3.5 days.
- **SkylosChain** — Lifted engagement from 5% → 95% in 14 days.
- **Arcapush** — Startup discovery registry, 61+ indexed, 1.5k/mo traffic.

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
| X        | [@mojeebeth](https://x.com/mojeebeth)        |
| GitHub   | [mojeebdev](https://github.com/mojeebdev)    |
| YouTube  | [@MojeebHQ](https://youtube.com/@MojeebHQ)  |
| LinkedIn | [mojeebeth](https://linkedin.com/in/mojeebeth) |
| Email    | mojeeb.eth@gmail.com                         |
| Studio   | [blindspotlab.xyz](https://blindspotlab.xyz) |

---

*BlindspotLab — You have the idea. We ship the product.*