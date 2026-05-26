import type { Metadata, Viewport } from "next";
import "./globals.css";
import { freightDisplay, jetbrainsMono } from "@/lib/fonts";

const BASE_URL = "https://mojeeb.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mojeeb Titilayo | AI Native Indie Developer, Strategist & Vibe Coder",
    template: "%s | Mojeeb Titilayo",
  },
  description:
    "Mojeeb is an AI Native Indie Developer, Web3 Strategist, and Vibe Coder. Founder of BlindspotLab. 20+ shipped products including Arcapush, Whate, PullChain, AngelVow, Dearly, RoastURL, FirstTx, and more. Solo. Fast. Real use cases.",
  keywords: [
    "Mojeeb", "Mojeeb Titilayo", "Mojeebeth", "MojeebHQ",
    "AI Native Developer", "Vibe Coder", "Web3 Strategist",
    "BlindspotLab", "Arcapush", "Whate", "AngelVow", "PullChain",
    "FirstTx", "RoastURL", "ArcaPrompt", "PromptRank", "XUnfollow",
    "Dearly", "Nigeria Tech", "Prompt Engineering", "LLM Integration",
    "Solo Founder", "Base Chain", "Next.js",
  ],
  authors: [{ name: "Mojeeb Titilayo", url: BASE_URL }],
  creator: "Mojeeb Titilayo",
  publisher: "BlindspotLab",

  alternates: { canonical: BASE_URL },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" }],
  },


  openGraph: {
    type: "profile",
    url: BASE_URL,
    siteName: "Mojeeb",
    locale: "en_US",
    title: "Mojeeb | AI Native Indie Developer, Strategist & Vibe Coder",
    description:
      "20+ shipped AI and Web3 products. Solo. Fast. Real use cases. Founder of BlindspotLab — arcapush.com, whate.online, angelvow.xyz, firsttx.xyz, roasturl.xyz and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mojeeb Titilayo" }],
    firstName: "Mojeeb",
    lastName: "Titilayo",
    username: "mojeebeth",
  },


  twitter: {
    card: "summary_large_image",
    site: "@mojeebeth",
    creator: "@mojeebeth",
    title: "Mojeeb | AI Native Indie Developer, Strategist & Vibe Coder",
    description:
      "20 + shipped AI and Web3 products. Solo. Fast. Founder of BlindspotLab — arcapush.com, whate.online, roasturl.xyz and more.",
    images: ["/og-image.png"],
  },


  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#E8B84B",
  width: "device-width",
  initialScale: 1,
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mojeeb Titilayo",
  alternateName: ["Mojeebeth", "MojeebHQ", "0xmojeeb"],
  url: BASE_URL,
  image: `${BASE_URL}/mojeeb-toon.png`,
  jobTitle: "AI Native Developer, Vibe Coder & Web3 Strategist",
  description:
    "Building at the edge of thought — AI tools, Web3 systems and growth engines. Founder of BlindspotLab. 18+ shipped products.",
  nationality: { "@type": "Country", name: "Nigeria" },
  worksFor: {
    "@type": "Organization",
    name: "BlindspotLab",
    url: "https://blindspotlab.xyz",
    description:
      "AI-native productized build-as-a-service studio. You have the idea. We ship the product.",
  },
  founder: [
    { "@type": "Organization",       name: "BlindspotLab",  url: "https://blindspotlab.xyz"            },
    { "@type": "SoftwareApplication", name: "Arcapush",      url: "https://arcapush.com",               description: "The registry for builds who ship. 61+ products indexed." },
    { "@type": "SoftwareApplication", name: "Whate",         url: "https://whate.online",               description: "Zero decision meal intelligence. 10,000+ meals." },
    { "@type": "SoftwareApplication", name: "PullChain",     url: "https://pullchain.fun",              description: "Pull a Block, Master Crypto. Gamified Web3 education on Base." },
    { "@type": "SoftwareApplication", name: "AngelVow",      url: "https://angelvow.xyz",               description: "On-chain charity vault platform on Base. Wish, Give, Fulfil." },
    { "@type": "SoftwareApplication", name: "Dearly",        url: "https://dearly.icu",                 description: "Beautiful personalized greetings. AI persona filtering." },
    { "@type": "SoftwareApplication", name: "RoastURL",      url: "https://roasturl.xyz",               description: "Precision AI startup audit. No fluff." },
    { "@type": "SoftwareApplication", name: "CertStack",     url: "https://certstack.vercel.app",       description: "A vault for your verified credentials." },
    { "@type": "SoftwareApplication", name: "ArcaPrompt",    url: "https://arcaprompt.arcapush.com",   description: "Build better, Prompt Smarter." },
    { "@type": "SoftwareApplication", name: "PromptRank",    url: "https://promptrank.arcapush.com",   description: "Submit your prompt. Get graded. No mercy." },
    { "@type": "SoftwareApplication", name: "XUnfollow",     url: "https://xunfollow.xyz",              description: "Unfollow Script Generator." },
    { "@type": "SoftwareApplication", name: "FirstTx",       url: "https://firsttx.xyz",               description: "Relive your first on-chain moment." },
    { "@type": "SoftwareApplication", name: "PeerFix",       url: "https://peerfix.dev",               description: "Builders helping builders. USDC escrow on Base." },
    { "@type": "SoftwareApplication", name: "NullPay",       url: "https://nullpay.blindspotlab.xyz",  description: "Send money. Leave no trace. Starknet." },
  ],
  knowsAbout: [
    "Vibe Coding", "AI Tools", "Prompt Engineering", "LLM Integration",
    "Web3 Strategy", "Community Growth", "Ecosystem Development",
    "Ethereum", "Base Chain", "Starknet", "Solidity",
    "Next.js", "TypeScript", "Supabase", "Gemini AI", "Claude API",
    "Systems Design", "Growth Architecture",
  ],
  sameAs: [
    "https://twitter.com/mojeebeth",
    "https://www.linkedin.com/in/mojeebeth",
    "https://github.com/mojeebdev",
    "https://mojeebhq.medium.com",
    "https://youtube.com/@MojeebHQ",
    "https://blindspotlab.xyz",
    "https://arcapush.com",
    "https://whate.online",
    "https://angelvow.xyz",
    "https://dearly.icu",
    "https://firsttx.xyz",
    "https://peerfix.dev",
    "https://roasturl.xyz",
    "https://xunfollow.xyz",
    "https://arcaprompt.arcapush.com",
    "https://promptrank.arcapush.com",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${freightDisplay.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}