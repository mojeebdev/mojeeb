import { builds, vibeathonBuilds, hackathonBuilds } from "@/lib/builds";
import type { Build } from "@/lib/builds";
import { BASE_URL, SITE_EMAIL } from "@/lib/site";

function toSoftwareApplication(build: Build) {
  const parts = [build.tagline, ...(build.tags ?? [])].filter(Boolean);
  const entry: Record<string, unknown> = {
    "@type": "SoftwareApplication",
    name: build.name,
    description: parts.join(" — "),
    applicationCategory: "WebApplication",
    author: { "@type": "Person", name: "Mojeeb Titilayo", url: BASE_URL },
  };
  if (build.url) entry.url = build.url;
  return entry;
}

const portfolioBuilds = [...builds, ...vibeathonBuilds, ...hackathonBuilds].filter(
  (b) => b.url
);

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mojeeb Titilayo",
  alternateName: ["tmojeeb", "mojeebeth", "0xmojeeb"],
  url: BASE_URL,
  email: SITE_EMAIL,
  image: `${BASE_URL}/mojeeb-toon.png`,
  jobTitle: "AI Product Engineer, Expert Vibe Coder, and Strategist",
  description:
    "I build at the edge of thought — AI tools, Web3 systems and growth engines. Founder of BlindspotLab. 30+ shipped products.",
  nationality: { "@type": "Country", name: "Nigeria" },
  worksFor: {
    "@type": "Organization",
    name: "BlindspotLab",
    url: "https://blindspotlab.xyz",
    description:
      "AI-native productized build-as-a-service studio. You have the idea. We ship the product.",
  },
  founder: portfolioBuilds.map(toSoftwareApplication),
  award: [
    "Build with Medo (Devpost) — Content Creative Award winner for ScopeAI",
  ],
  knowsAbout: [
    "AI Product Engineering",
    "Vibe Coding",
    "Prompt Engineering",
    "LLM Integration",
    "AI Tools",
    "Web3 Strategy",
    "Community Growth",
    "Ecosystem Development",
    "Ethereum",
    "Base Chain",
    "Starknet",
    "Solidity",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Gemini AI",
    "Claude API",
    "Systems Design",
    "Growth Architecture",
  ],
  sameAs: [
    "https://twitter.com/tmojeeb",
    "https://www.linkedin.com/in/tmojeeb",
    "https://github.com/mojeebdev",
    "https://tmojeeb.medium.com",
    "https://youtube.com/@tmojeeb",
    "https://blindspotlab.xyz",
    "https://arcapush.com",
    "https://whate.app",
    "https://angelvow.xyz",
    "https://dearly.icu",
    "https://firsttx.xyz",
    "https://peerfix.dev",
    "https://roasturl.xyz",
    "https://pitchslap.mojeeb.xyz",
    "https://ghostforms.mojeeb.xyz",
    "https://matchmind.xyz",
    "https://usemoou.xyz",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mojeeb Titilayo",
  url: BASE_URL,
  description:
    "Portfolio of Mojeeb Titilayo — AI Product Engineer, Expert Vibe Coder, and Strategist. I build at the edge of thought.",
  author: { "@type": "Person", name: "Mojeeb Titilayo", url: BASE_URL },
  inLanguage: "en",
};