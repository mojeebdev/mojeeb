import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import MobileNavigation from "@/components/MobileNavigation";
import ProjectArchive from "@/components/ProjectArchive";
import ProjectLogo from "@/components/ProjectLogo";
import { displayProjectStatus, ExternalArrow, prettyCategory } from "@/components/ProjectPrimitives";
import { projects, selectedProjects, type Project, type ProjectCategory } from "@/lib/projects";

const aiProjects = projects.filter((project) => project.category.includes("ai")).slice(0, 10);

const capabilities = [
  ["Product Strategy", "Positioning, scoping, product direction, and build discipline."],
  ["AI Product Engineering", "AI-native SaaS, agents, MCP integrations, RAG, and prompt-led systems."],
  ["System Architecture", "Technical planning, developer tooling, static analysis, and durable product systems."],
  ["Web3 Products", "Smart contracts, Base, onchain identity, credentials, NFTs, and builder platforms."],
] as const;

const daetoStages = [
  ["D", "Discovery", "Understand the problem, user, context, constraints, and opportunity."],
  ["A", "Approach", "Choose the positioning, architecture, and execution path."],
  ["E", "Execution", "Build the smallest strong version with disciplined scope."],
  ["T", "Tracking", "Measure what works, what fails, and what people actually use."],
  ["O", "Optimisation", "Improve from evidence instead of random feature additions."],
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
      <nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/work">Selected Work</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/approach">Approach</Link><Link href="/contact">Contact</Link></nav>
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
      <ProjectLogo project={project} size="md" className="route-card__logo" />
      <p className="section-kicker">{category} / {displayProjectStatus(project)}</p>
      <h2>{project.name}</h2>
      {project.description && <p>{project.description}</p>}
      {project.snapshot && <p className="project-fact">{project.snapshot}</p>}
      <div className="route-card__links">
        {project.selected && <Link className="secondary-link" href={`/projects/${project.slug}`}>Project profile &#8594;</Link>}
        {project.url && <a className="work-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit project <ExternalArrow /></a>}
      </div>
    </article>
  );
}

export function AboutRoute() {
  return (
    <RouteShell
      kicker="About"
      title="Who is Mojeeb Titilayo?"
      intro="Mojeeb is an AI Product Engineer, System Architect and Product Strategist based in Nigeria, building across AI, SaaS, developer tools and Web3."
      image
    >
      <section className="route-band route-band--split">
        <h2>40+ shipped builds across 70 repositories.</h2>
        <p>Mojeeb turns rough ideas, useful information and overlooked problems into clear, buildable products. The portfolio separates flagship products from experiments, inactive archives and paused work so the record stays honest.</p>
      </section>
      <section className="route-grid route-grid--wide" aria-label="Core capabilities">
        {capabilities.map(([title, copy]) => <article className="route-card" key={title}><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
    </RouteShell>
  );
}

export function WorkRoute() {
  return (
    <RouteShell
      kicker="Selected Work"
      title="What does Mojeeb build?"
      intro="Selected AI, SaaS, developer-tool and Web3 products that show product strategy, architecture, engineering and disciplined execution."
    >
      <section className="route-grid" aria-label="Selected projects">
        {selectedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>
    </RouteShell>
  );
}

export function ProjectsRoute() {
  return (
    <RouteShell
      kicker="Projects"
      title="Projects, experiments and shipped ideas."
      intro="Mojeeb has built and shipped 40+ products, tools, experiments and platforms across AI, developer tools, SaaS and Web3."
    >
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
      title="How I approach building products."
      intro="Understand the problem, preserve what works, then make the smallest strong move."
    >
      <section className="route-band route-band--split">
        <h2>What is the DAETO framework?</h2>
        <p>DAETO is Mojeeb Titilayo&apos;s five-stage product framework covering Discovery, Approach, Execution, Tracking and Optimisation.</p>
      </section>
      <section className="route-grid" aria-label="DAETO stages">
        {daetoStages.map(([letter, title, copy]) => <article className="route-card" key={letter}><p className="section-kicker">{letter}</p><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
      <section className="route-grid route-grid--wide" aria-label="Product principles">
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

export function ProjectDetailRoute({ project }: { project: Project }) {
  const category = prettyCategory(project.category[0]);
  const confirmedDetails = [project.snapshot, project.origin, project.achievement, project.outcome, project.portfolioValue].filter(Boolean) as string[];

  return (
    <RouteShell
      kicker={`${category} / ${displayProjectStatus(project)}`}
      title={project.name}
      intro={project.description ?? "A documented build in Mojeeb Titilayo's product portfolio. Details are intentionally limited to confirmed information."}
    >
      <section className="route-band">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/work">Work</Link><span aria-hidden="true">/</span><span aria-current="page">{project.name}</span>
        </nav>
        <div className="project-detail-grid">
          <div className="project-detail-heading">
            <ProjectLogo project={project} size="lg" />
            <h2>Confirmed project profile.</h2>
          </div>
          <div className="project-detail-copy">
            {project.description && <p>{project.description}</p>}
            {confirmedDetails.map((detail) => <p key={detail}>{detail}</p>)}
            <div className="project-detail-meta">
              <span>{category}</span>
              <span>{displayProjectStatus(project)}</span>
              {project.role && <span>{project.role}</span>}
            </div>
            <div className="route-card__links">
              {project.url && <a className="work-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit live project <ExternalArrow /></a>}
              {project.sourceUrl && <a className="secondary-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>}
              {project.packageUrl && <a className="secondary-link" href={project.packageUrl} target="_blank" rel="noopener noreferrer">npm &#8599;</a>}
            </div>
          </div>
        </div>
      </section>
    </RouteShell>
  );
}
