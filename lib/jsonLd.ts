import { projects } from "@/lib/projects";
import { BASE_URL, SITE_EMAIL } from "@/lib/site";

const publicProjects = projects.filter((project) => project.url);
const siteSections = [
  ["About", "/about", "Mojeeb Titilayo's identity, role and public positioning."],
  ["Builds", "/builds", "Selected work and complete build record."],
  ["Experience", "/experience", "Product strategy, AI engineering, system architecture and Web3 experience."],
  ["AI Product Engineering", "/ai", "AI products, agents, prompt systems and developer workflows."],
  ["Approach", "/approach", "Product philosophy and build discipline."],
  ["Contact", "/contact", "Contact details for Mojeeb Titilayo."],
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mojeeb Titilayo",
  alternateName: ["MojeebMotion", "tmojeeb", "mojeebdev"],
  url: BASE_URL,
  email: SITE_EMAIL,
  image: `${BASE_URL}/mojeeb_headshot.png`,
  jobTitle: "AI Product Engineer, System Architect, and Strategist",
  description: "AI Product Engineer, System Architect and Strategist building intentional products across AI, SaaS, developer tools and Web3.",
  nationality: { "@type": "Country", name: "Nigeria" },
  worksFor: { "@type": "Organization", name: "BlindspotLab", url: "https://blindspotlab.xyz" },
  knowsAbout: [
    "AI product engineering",
    "System architecture",
    "Product strategy",
    "Prompt engineering",
    "Developer tools",
    "SaaS",
    "Web3 products",
    "RAG",
    "MCP integrations",
  ],
  sameAs: [
    "https://x.com/MojeebMotion",
    "https://www.linkedin.com/in/tmojeeb",
    "https://github.com/mojeebdev",
    "https://devpost.com/mojeebdev",
    "https://youtube.com/@tmojeeb",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mojeeb Titilayo",
  url: BASE_URL,
  description: "AI Product Engineer, System Architect and Strategist building intentional products across AI, SaaS, developer tools and Web3.",
  author: { "@type": "Person", name: "Mojeeb Titilayo", url: BASE_URL },
  inLanguage: "en",
  hasPart: siteSections.map(([name, path, description]) => ({
    "@type": "WebPage",
    name,
    url: `${BASE_URL}${path}`,
    description,
  })),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publicProjects.map((project, index) => ({
      "@type": "ListItem", position: index + 1, item: { "@type": "CreativeWork", name: project.name, url: project.url, description: project.description },
    })),
  },
};
