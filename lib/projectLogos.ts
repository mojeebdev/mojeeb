import type { Project } from "@/lib/projects";

export type ProjectLogoCandidate = {
  src: string;
  source: "local" | "website";
};

const splitNameParts = (name: string) => {
  const spaced = name
    .replace(/([a-z\d])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");

  return Array.from(spaced.matchAll(/[\p{L}\p{N}]+/gu), (match) => match[0]);
};

export const getProjectInitials = (project: Pick<Project, "name">) => {
  const parts = splitNameParts(project.name);

  if (!parts.length) return "??";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const getWebsiteIconCandidates = (url?: string): ProjectLogoCandidate[] => {
  if (!url) return [];

  try {
    const origin = new URL(url).origin;
    return [
      { src: `${origin}/favicon.ico`, source: "website" },
      { src: `${origin}/apple-touch-icon.png`, source: "website" },
      { src: `${origin}/icon.svg`, source: "website" },
      { src: `${origin}/icon.png`, source: "website" },
    ];
  } catch {
    return [];
  }
};

export const getProjectLogoCandidates = (project: Pick<Project, "logo" | "url">): ProjectLogoCandidate[] => [
  ...(project.logo ? [{ src: project.logo.src, source: "local" as const }] : []),
  ...getWebsiteIconCandidates(project.url),
];
