"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { getProjectInitials, getProjectLogoCandidates } from "@/lib/projectLogos";

type ProjectLogoProps = {
  project: Pick<Project, "name" | "logo" | "url">;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function ProjectLogo({ project, className = "", size = "md" }: ProjectLogoProps) {
  const candidates = useMemo(() => getProjectLogoCandidates(project), [project]);
  const initials = useMemo(() => getProjectInitials(project), [project]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const activeCandidate = candidates[candidateIndex];
  const classNames = ["project-logo", `project-logo--${size}`, className].filter(Boolean).join(" ");

  if (!activeCandidate) {
    return (
      <span className={`${classNames} project-logo--initials`} aria-hidden="true">
        {initials}
      </span>
    );
  }

  return (
    <span className={classNames} aria-hidden="true">
      {/* External project favicons are intentionally loaded without next/image domain config. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={activeCandidate.src}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setCandidateIndex((index) => index + 1)}
      />
      <span className="project-logo__fallback">{initials}</span>
    </span>
  );
}
