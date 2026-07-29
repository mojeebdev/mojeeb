import type { Project, ProjectStatus } from "@/lib/projects";

const statusNames: Record<ProjectStatus, string> = {
  live: "Live",
  active: "Active",
  paused: "Paused",
  "on-hold": "On hold",
  "live-inactive": "Live but inactive",
  unverified: "Condition unverified",
};

export const prettyCategory = (value: string) => value.replaceAll("-", " ");

export const displayProjectStatus = (project: Project) =>
  project.statusLabel ?? statusNames[project.status];

export function ProjectMark({ project }: { project: Project }) {
  const letters = project.name.replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();
  return <span className="project-mark" aria-hidden="true">{letters}</span>;
}

export function StatusBadge({ project }: { project: Project }) {
  return <span className={`status status--${project.status}`}>{displayProjectStatus(project)}</span>;
}

export function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗</span>;
}
