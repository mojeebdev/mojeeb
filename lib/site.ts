import type { Metadata } from "next";

export const BASE_URL = "https://mojeeb.xyz";
export const SITE_EMAIL = "hello@mojeeb.xyz";

export type Tab = "builds" | "about" | "experience" | "blog" | "ai" | "contact";

export const NAV_ITEMS: { id: Tab; href: string; icon: string; label: string }[] = [
  { id: "builds", href: "/builds", icon: "⬡", label: "Builds" },
  { id: "about", href: "/about", icon: "◎", label: "About" },
  { id: "experience", href: "/experience", icon: "◈", label: "Experience & Capabilities" },
  { id: "blog", href: "/blog", icon: "◻", label: "Blog" },
  { id: "ai", href: "/ai", icon: "⟁", label: "AI" },
  { id: "contact", href: "/contact", icon: "✉", label: "Contact" },
];

const defaultDescription =
  "Mojeeb is an AI Product Engineer, Expert Vibe Coder, and Strategist. I build at the edge of thought. Founder of BlindspotLab. 30+ shipped products. Solo. Fast. Real use cases.";

function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}${path}` },
    openGraph: {
      title: `${title} | Mojeeb Titilayo`,
      description,
      url: `${BASE_URL}${path}`,
    },
    twitter: {
      title: `${title} | Mojeeb Titilayo`,
      description,
    },
  };
}

export const pageMetadata = {
  builds: pageMeta(
    "Builds",
    "30+ shipped AI and Web3 products — featured builds, Vibeathon projects, and hackathon work including ScopeAI (Content Creative Award winner).",
    "/builds"
  ),
  about: pageMeta(
    "About",
    "Self-taught AI product engineer from Lagos, Nigeria. I build at the edge of thought — DAETO philosophy, education, and full-stack AI-native development.",
    "/about"
  ),
  experience: pageMeta(
    "Experience",
    "Track record: BlindspotLab founder, Taiku NFT growth (3→9,000+ followers), SkylosChain engagement lift, and 12+ years Web2/Web3 strategy.",
    "/experience"
  ),
  blog: pageMeta(
    "Blog",
    "Essays on creator systems, product blueprints, community building, and growth — by Mojeeb Titilayo.",
    "/blog"
  ),
  ai: pageMeta(
    "AI",
    "AI-native builds with deliberate prompt architecture — RoastURL, ArcaPrompt, PromptRank, Dearly, and more.",
    "/ai"
  ),
  contact: pageMeta(
    "Contact",
    "Work with Mojeeb Titilayo — AI-native product builds, Web3 strategy, vibe coding, and growth architecture. hello@mojeeb.xyz",
    "/contact"
  ),
  home: {
    title: "Mojeeb Titilayo | AI Product Engineer, Expert Vibe Coder, and Strategist",
    description: defaultDescription,
  } satisfies Metadata,
};