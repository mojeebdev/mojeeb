import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./portfolio-fixes.css";
import "./animation-fixes.css";
import "./hero-final.css";
import { freightDisplay } from "@/lib/fonts";
import { personJsonLd, websiteJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mojeeb Titilayo — AI Product Engineer & System Architect",
    template: "%s | Mojeeb Titilayo",
  },
  description:
    "AI Product Engineer, System Architect and Strategist building intentional products across AI, SaaS, developer tools and Web3.",
  keywords: [
    "Mojeeb", "Mojeeb Titilayo", "AI Product Engineer",
    "System Architect", "AI Strategist", "Web3 Strategist",
    "BlindspotLab", "Arcapush", "StackBrief", "Revel",
    "Developer Tools", "Prompt Engineering", "Product Strategy",
    "MCP", "RAG", "Next.js", "TypeScript",
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
    icon: [{ url: "/mojeeb_headshot.png", sizes: "1086x1448", type: "image/png" }],
    shortcut: [{ url: "/mojeeb_headshot.png", type: "image/png" }],
    apple: [{ url: "/mojeeb_headshot.png", sizes: "1086x1448", type: "image/png" }],
  },
  openGraph: {
    type: "profile",
    url: BASE_URL,
    siteName: "Mojeeb",
    locale: "en_US",
    title: "Mojeeb Titilayo — AI Product Engineer & System Architect",
    description:
      "AI Product Engineer, System Architect and Strategist building intentional products across AI, SaaS, developer tools and Web3.",
    images: [{ url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: "Mojeeb Titilayo — AI Product Engineer, System Architect, AI and Web3 Strategist" }],
    firstName: "Mojeeb",
    lastName: "Titilayo",
    username: "MojeebMotion",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MojeebMotion",
    creator: "@MojeebMotion",
    title: "Mojeeb Titilayo — AI Product Engineer & System Architect",
    description:
      "AI Product Engineer, System Architect and Strategist building intentional products across AI, SaaS, developer tools and Web3.",
    images: ["/mojeeb-editorial-og.jpg"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#eeece5",
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
      <body className={freightDisplay.variable}>{children}</body>
    </html>
  );
}
