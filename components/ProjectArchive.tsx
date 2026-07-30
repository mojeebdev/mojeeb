"use client";

import { useMemo, useState } from "react";
import {
  projectGroups,
  projects,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
} from "@/lib/projects";
import ProjectLogo from "@/components/ProjectLogo";
import {
  ExternalArrow,
  prettyCategory,
  StatusBadge,
} from "@/components/ProjectPrimitives";

const categoryFilters: ["all" | ProjectCategory, string][] = [
  ["all", "All"],
  ["flagship", "Flagship"],
  ["ai", "AI"],
  ["developer-tools", "Developer tools"],
  ["saas", "SaaS"],
  ["web3", "Web3"],
  ["hackathon", "Hackathons"],
  ["experiment", "Experiments"],
  ["cultural", "Cultural"],
  ["archival", "Archival"],
];

const statusFilters: ["all" | ProjectStatus, string][] = [
  ["all", "All statuses"],
  ["live", "Live"],
  ["active", "Active"],
  ["paused", "Paused"],
  ["on-hold", "On hold"],
  ["live-inactive", "Inactive"],
  ["unverified", "Unverified"],
];

function ArchiveRow({ project }: { project: Project }) {
  const content = (
    <>
      <ProjectLogo project={project} size="sm" />
      <span className="project-copy">
        <span className="project-name">
          {project.name}
          {project.selected && <span className="selected-label">Selected</span>}
        </span>
        {project.description && <span className="project-description">{project.description}</span>}
      </span>
      {project.url && <ExternalArrow />}
    </>
  );

  return (
    <article className={`project-row${project.url ? "" : " project-row--unavailable"}`}>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}, opens in a new tab`}>
          {content}
        </a>
      ) : (
        <div className="project-main">{content}</div>
      )}
      <p className="project-categories">{project.category.map(prettyCategory).join(" · ")}</p>
      <StatusBadge project={project} />
    </article>
  );
}

export default function ProjectArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");
  const [status, setStatus] = useState<"all" | ProjectStatus>("all");

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const searchable = `${project.name} ${project.description ?? ""} ${project.category.join(" ")} ${project.statusLabel ?? project.status}`.toLowerCase();
      return (
        (!normalized || searchable.includes(normalized)) &&
        (category === "all" || project.category.includes(category)) &&
        (status === "all" || project.status === status)
      );
    });
  }, [category, query, status]);

  const groupedResults = projectGroups
    .map((group) => ({
      ...group,
      projects: group.slugs
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is Project => Boolean(project))
        .filter((project) => filteredProjects.includes(project)),
    }))
    .filter((group) => group.projects.length > 0);

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setStatus("all");
  };

  const activeFilterAnnouncement = [
    query.trim() && `search ${query.trim()}`,
    category !== "all" && `category ${categoryFilters.find(([id]) => id === category)?.[1]}`,
    status !== "all" && `status ${statusFilters.find(([id]) => id === status)?.[1]}`,
  ].filter(Boolean).join(", ");

  return (
    <>
      <div className="filters" aria-label="Project filters">
        <label className="search-field">
          <span>Search the archive</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Project name, description, or category" />
        </label>
        <div className="filter-group" role="group" aria-label="Filter by category">
          <span className="filter-label">Category</span>
          <div className="filter-scroll">
            {categoryFilters.map(([id, name]) => (
              <button type="button" className={category === id ? "active" : ""} aria-pressed={category === id} onClick={() => setCategory(id)} key={id}>{name}</button>
            ))}
          </div>
        </div>
        <div className="filter-group" role="group" aria-label="Filter by status">
          <span className="filter-label">Status</span>
          <div className="filter-scroll">
            {statusFilters.map(([id, name]) => (
              <button type="button" className={status === id ? "active" : ""} aria-pressed={status === id} onClick={() => setStatus(id)} key={id}>{name}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="results-meta">
        <p aria-live="polite" aria-atomic="true">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} shown</p>
        {(query || category !== "all" || status !== "all") && <button type="button" onClick={clearFilters}>Clear filters</button>}
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {activeFilterAnnouncement ? `Active filters: ${activeFilterAnnouncement}.` : "All project filters cleared."}
      </p>

      {groupedResults.map((group) => (
        <section className="archive-group" key={group.id} aria-labelledby={`group-${group.id}`}>
          <div className="archive-group-heading">
            <h3 id={`group-${group.id}`}>{group.title}</h3>
            <p>{group.description}</p>
            <span aria-label={`${group.projects.length} projects`}>{group.projects.length}</span>
          </div>
          <div className="project-list">
            {group.projects.map((project) => <ArchiveRow project={project} key={project.slug} />)}
          </div>
        </section>
      ))}

      {!filteredProjects.length && (
        <div className="empty-state" role="status">
          <h3>No projects found.</h3>
          <p>Try another search or clear the active filters.</p>
          <button className="text-link" type="button" onClick={clearFilters}>Clear filters</button>
        </div>
      )}
    </>
  );
}
