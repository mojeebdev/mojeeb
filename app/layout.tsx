import type { Metadata, Viewport } from "next";
import "./globals.css";
import { freightDisplay, jetbrainsMono } from "@/lib/fonts";
import { personJsonLd, websiteJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mojeeb Titilayo | AI Product Engineer, Expert Vibe Coder, and Strategist",
    template: "%s | Mojeeb Titilayo",
  },
  description:
    "Mojeeb is an AI Product Engineer, Expert Vibe Coder, and Strategist. I build at the edge of thought. Founder of BlindspotLab. 30+ shipped products including Arcapush, Whate, PullChain, AngelVow, Dearly, RoastURL, FirstTx, and more. Solo. Fast. Real use cases.",
  keywords: [
    "Mojeeb", "Mojeeb Titilayo", "tmojeeb", "tmojeeb",
    "AI Product Engineer", "Expert Vibe Coder", "Strategist",
    "BlindspotLab", "Arcapush", "Whate", "AngelVow", "PullChain",
    "FirstTx", "RoastURL", "ArcaPrompt", "PromptRank", "XUnfollow",
    "Dearly", "Nigeria Tech", "Prompt Engineering", "LLM Integration",
    "Solo Founder", "Base Chain", "Next.js",
  ],
  authors: [{ name: "Mojeeb Titilayo", url: BASE_URL }],
  creator: "Mojeeb Titilayo",
  publisher: "BlindspotLab",

  alternates: { canonical: `${BASE_URL}/builds` },

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
    url: `${BASE_URL}/builds`,
    siteName: "Mojeeb",
    locale: "en_US",
    title: "Mojeeb | AI Product Engineer, Expert Vibe Coder, and Strategist",
    description:
      "I build at the edge of thought. 30+ shipped AI and Web3 products. Solo. Fast. Real use cases. Founder of BlindspotLab — arcapush.com, whate.app, angelvow.xyz, firsttx.xyz, roasturl.xyz and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mojeeb Titilayo" }],
    firstName: "Mojeeb",
    lastName: "Titilayo",
    username: "tmojeeb",
  },


  twitter: {
    card: "summary_large_image",
    site: "@tmojeeb",
    creator: "@tmojeeb",
    title: "Mojeeb | AI Product Engineer, Expert Vibe Coder, and Strategist",
    description:
      "I build at the edge of thought. 30+ shipped AI and Web3 products. Solo. Fast. Founder of BlindspotLab — arcapush.com, whate.app, roasturl.xyz and more.",
    images: ["/og-image.png"],
  },


  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#E8B84B",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="author" href={`${BASE_URL}/llms.txt`} type="text/plain" title="LLM context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${freightDisplay.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}