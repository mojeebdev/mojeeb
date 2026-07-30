import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./portfolio-fixes.css";
import "./animation-fixes.css";
import "./hero-final.css";
import "./motion-system.css";
import "./intro-final.css";
import "./dual-identity.css";
import JsonLd from "@/components/JsonLd";
import MotionDirector from "@/components/MotionDirector";
import { freightDisplay } from "@/lib/fonts";
import { siteGraphJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mojeeb Titilayo — Product Strategist & AI Product Engineer",
    template: "%s | Mojeeb Titilayo",
  },
  description:
    "Product Strategist, AI Product Engineer and System Architect building intentional products across AI, SaaS, developer tools and Web3.",
  keywords: [
    "Mojeeb", "Mojeeb Titilayo", "Product Strategist",
    "AI Product Engineer", "System Architect", "AI Strategist",
    "Web3 Strategist", "BlindspotLab", "Arcapush", "StackBrief",
    "Developer Tools", "Prompt Engineering", "Product Strategy",
    "MCP", "RAG", "Next.js", "TypeScript",
  ],
  authors: [{ name: "Mojeeb Titilayo", url: `${BASE_URL}/about` }],
  creator: "Mojeeb Titilayo",
  publisher: "Mojeeb Titilayo",
  alternates: { canonical: BASE_URL },
  category: "technology",
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
    siteName: "Mojeeb Titilayo",
    locale: "en_US",
    title: "Mojeeb Titilayo — Product Strategist & AI Product Engineer",
    description:
      "Product Strategist, AI Product Engineer and System Architect building intentional products across AI, SaaS, developer tools and Web3.",
    images: [{ url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: "Mojeeb Titilayo — Product Strategist and AI Product Engineer" }],
    firstName: "Mojeeb",
    lastName: "Titilayo",
    username: "MojeebMotion",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MojeebMotion",
    creator: "@MojeebMotion",
    title: "Mojeeb Titilayo — Product Strategist & AI Product Engineer",
    description:
      "Product Strategist, AI Product Engineer and System Architect building intentional products across AI, SaaS, developer tools and Web3.",
    images: ["/mojeeb-editorial-og.jpg"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#f0ede5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="author" href={`${BASE_URL}/llms.txt`} type="text/plain" title="LLM context" />
        <JsonLd data={siteGraphJsonLd} />
      </head>
      <body className={freightDisplay.variable}>
        <MotionDirector />
        {children}
      </body>
    </html>
  );
}
