import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import MobileNavigation from "@/components/MobileNavigation";
import ProjectArchive from "@/components/ProjectArchive";
import { displayProjectStatus, ExternalArrow, prettyCategory } from "@/components/ProjectPrimitives";
import { projects, type Project, type ProjectCategory } from "@/lib/projects";

const selectedProjects = projects.filter((project) => project.selected);
const aiProjects = projects.filter((project) => project.category.includes("ai")).slice(0, 10);

const capabilities = [
  ["Product Strategy", "Positioning, scoping, product direction, and build discipline."],
  ["AI Product Engineering", "AI-native SaaS, agents, MCP integrations, RAG, and prompt-led systems."],
  ["System Architecture", "Technical planning, developer tooling, static analysis, and durable product systems."],
  ["Web3 Products", "Smart contracts, Base, onchain identity, credentials, NFTs, and builder platforms."],
] as const;

const approachNotes = [
  ["Your Input Is the AI Output", "Judgement, context, and disciplined prompting determine what AI can actually help make."],
  ["Improve Before Rebuilding", "The smallest strong move usually beats an unnecessary rewrite."],
  ["Preserve Useful Ideas", "Useful information should compound into products instead of disappearing into the timeline."],
] as const;

function RouteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-title"><span>Mojeeb</span><strong>AI Product Engineer<br />System Architect</strong></div>
      <nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/builds">Builds</Link><Link href="/experience">Experience</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
      <div className="footer-socials"><a href="https://x.com/MojeebMotion" target="_blank" rel="noopener noreferrer">X</a><a href="https://www.linkedin.com/in/tmojeeb" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/mojeebdev" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://devpost.com/mojeebdev" target="_blank" rel="noopener noreferrer">Devpost</a></div>
      <p>&copy; {new Date().getFullYear()} Mojeeb Titilayo</p>
    </footer>
  );
}

export function RouteShell({ kicker, title, intro, children, image = false }: { kicker: string; title: string; intro: string; children: ReactNode; image?: boolean }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <MobileNavigation />
      <main id="main" className="route-page">
        <header className="route-hero">
          <div>
            <p className="section-kicker">{kicker}</p>
            <h1>{title}</h1>
          </div>
          <p>{intro}</p>
          {image && (
            <div className="route-portrait">
              <Image src="/mojeeb_headshot.png" alt="Portrait of Mojeeb Titilayo" fill sizes="(max-width: 760px) 42vw, 18vw" priority />
            </div>
          )}
        </header>
        {children}
      </main>
      <RouteFooter />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const category = prettyCategory(project.category[0] as ProjectCategory);
  return (
    <article className="route-card">
      <p className="section-kicker">{category} / {displayProjectStatus(project)}</p>
      <h2>{project.name}</h2>
      {project.description && <p>{project.description}</p>}
      {project.snapshot && <p className="project-fact">{project.snapshot}</p>}
      {project.url && <a className="work-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit project <ExternalArrow /></a>}
    </article>
  );
}

export function AboutRoute() {
  return (
    <RouteShell
      kicker="About"
      title="Mojeeb Titilayo"
      intro="AI Product Engineer, System Architect and Product Strategist based in Nigeria, building across AI, SaaS, developer tools and Web3."
      image
    >
      <section className="route-band route-band--split">
        <h2>40+ shipped builds across 70 repositories.</h2>
        <p>Mojeeb turns rough ideas, useful information and overlooked problems into clear, buildable products. The portfolio separates flagship products from experiments, inactive archives and paused work so the record stays honest.</p>
      </section>
    </RouteShell>
  );
}

export function BuildsRoute() {
  return (
    <RouteShell
      kicker="Builds"
      title="Selected work and complete build record."
      intro="Flagship products, developer tools, SaaS systems, Web3 builds, experiments, cultural projects and paused work, kept from the build index source of truth."
    >
      <section className="route-grid" aria-label="Selected projects">
        {selectedProjects.slice(0, 8).map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
      <section className="archive-section route-archive" aria-labelledby="route-archive-title">
        <div className="section-heading archive-heading">
          <p className="section-kicker">Complete index</p>
          <h2 id="route-archive-title">The full<br /><em>build record.</em></h2>
          <p>Confirmed statuses, destinations and missing details are preserved without guessing.</p>
        </div>
        <ProjectArchive />
      </section>
    </RouteShell>
  );
}

export function ExperienceRoute() {
  return (
    <RouteShell
      kicker="Experience"
      title="Strategy, engineering, systems, and Web3."
      intro="A practical range shaped by shipped products, platform work, developer tooling, agent systems, and productized services."
    >
      <section className="route-grid route-grid--wide">
        {capabilities.map(([title, copy]) => <article className="route-card" key={title}><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
    </RouteShell>
  );
}

export function AIRoute() {
  return (
    <RouteShell
      kicker="AI"
      title="AI products with product judgement."
      intro="AI-native tools, agents, audits, prompt systems and developer workflows built around usefulness, not decoration."
    >
      <section className="route-grid">
        {aiProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </RouteShell>
  );
}

export function ApproachRoute() {
  return (
    <RouteShell
      kicker="Approach"
      title="Build discipline before rebuild energy."
      intro="The portfolio reflects a simple bias: understand the problem, preserve what works, then make the smallest strong move."
    >
      <section className="route-grid route-grid--wide">
        {approachNotes.map(([title, copy]) => <article className="route-card" key={title}><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
    </RouteShell>
  );
}

export function ContactRoute() {
  return (
    <RouteShell
      kicker="Contact"
      title="Let's build something useful."
      intro="For useful ideas that need sharper thinking, stronger systems and disciplined execution."
    >
      <section className="route-band route-band--contact">
        <a href="mailto:hello@mojeeb.xyz">hello@mojeeb.xyz <ExternalArrow /></a>
        <p>Also find Mojeeb as @MojeebMotion on X and @mojeebdev on GitHub and Devpost.</p>
      </section>
    </RouteShell>
  );
}
