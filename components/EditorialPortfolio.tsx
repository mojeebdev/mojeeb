import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import MobileNavigation from "@/components/MobileNavigation";
import ProjectArchive from "@/components/ProjectArchive";
import { displayProjectStatus, ExternalArrow, prettyCategory } from "@/components/ProjectPrimitives";

const capabilityGroups = [
  ["01", "Product Strategy", ["Product direction", "Positioning", "MVP scoping"]],
  ["02", "AI Product Engineering", ["AI-native SaaS", "Agents and MCP", "RAG systems"]],
  ["03", "System Architecture", ["Product systems", "Developer tools", "Technical planning"]],
  ["04", "Web3 Products", ["Smart contracts", "Onchain identity", "Credential systems"]],
] as const;

const milestones = [
  ["40+", "Products, tools, experiments and platforms shipped"],
  ["146", "Products indexed on Arcapush as of July 28, 2026"],
  ["500+", "StackBrief downloads as of July 2026"],
  ["10,516", "Meals indexed by Whate"],
] as const;

const thoughts = [
  ["Your Input Is the AI Output", "Judgement, context, and disciplined prompting determine what AI can actually help make."],
  ["Improve Before Rebuilding", "The smallest strong move usually beats an unnecessary rewrite. Understand the problem before changing the system."],
  ["Do Not Let Useful Ideas Disappear", "Study Free and ColdOpen began with a simple instinct: preserve useful information before the timeline takes it away."],
] as const;

const projectBySlug = (slug: string) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project: ${slug}`);
  return project;
};

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  if (project.visual) {
    return (
      <div className="work-visual work-visual--image">
        <Image src={project.visual} alt={project.visualAlt ?? ""} fill sizes="(max-width: 760px) 100vw, 58vw" />
      </div>
    );
  }

  return (
    <div className={`work-visual work-visual--type work-visual--${index}`} aria-hidden="true">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <strong>{project.name}</strong>
      <small>{prettyCategory(project.category[0])}</small>
    </div>
  );
}

function WorkLink({ project, label = "View project" }: { project: Project; label?: string }) {
  if (!project.url) return null;
  return <a className="work-link" href={project.url} target="_blank" rel="noopener noreferrer">{label} <ExternalArrow /></a>;
}

function CompactWork({ project, index }: { project: Project; index: number }) {
  return (
    <article className="compact-work">
      <ProjectVisual project={project} index={index} />
      <div>
        <p className="section-kicker">{prettyCategory(project.category[0])} / {displayProjectStatus(project)}</p>
        <h3>{project.name}</h3>
        {project.description && <p>{project.description}</p>}
        {project.snapshot && <p className="project-fact">{project.snapshot}</p>}
        <WorkLink project={project} />
      </div>
    </article>
  );
}

export default function EditorialPortfolio() {
  const blindspotLab = projectBySlug("blindspotlab");
  const arcapush = projectBySlug("arcapush");
  const stackBrief = projectBySlug("stackbrief");
  const compactWork = ["revel", "sitehook", "capself"].map(projectBySlug);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <MobileNavigation />

      <main id="main">
        <section id="top" className="poster-hero" aria-labelledby="hero-title">
          <div className="hero-frame">
            <div className="hero-labels" aria-label="Hero details">
              <p className="hero-name">Mojeeb Titilayo</p>
              <p className="hero-role">System Architect</p>
            </div>
            <h1 id="hero-title" className="heroTitle">
              <span className="heroTitleLine">AI PRODUCT</span>
              <span className="heroTitleLine">ENGINEER</span>
            </h1>
            <div className="hero-portrait">
              <Image src="/mojeeb_headshot.png" alt="Portrait of Mojeeb Titilayo" fill priority sizes="(max-width: 700px) 58vw, 34vw" />
            </div>
            <div className="hero-object hero-object--orbit" aria-hidden="true"><span /></div>
            <div className="hero-object hero-object--axis" aria-hidden="true"><i /><i /><i /></div>
            <p className="hero-location">Ota, Nigeria</p>
            <div className="hero-meta">
              <span>&copy;2026</span>
              <span>/BUILDING SINCE 2014</span>
            </div>
          </div>
        </section>

        <section id="about" className="intro-section panel" aria-labelledby="intro-title">
          <div className="section-number">01</div>
          <div className="intro-copy">
            <h2 id="intro-title">Hey!</h2>
            <p>I&apos;m Mojeeb, an AI Product Engineer, System Architect and Product Strategist based in Nigeria.</p>
            <p>I turn rough ideas, useful information and overlooked problems into clear, buildable products across AI, SaaS, developer tools and Web3.</p>
            <Link className="solid-link" href="/builds">Selected work <span aria-hidden="true">&#8595;</span></Link>
          </div>
          <p className="intro-side">Founder, BlindspotLab<br />Product strategist<br />70 repositories</p>
        </section>

        <section id="capabilities" className="capabilities-section panel" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <p className="section-kicker">02 / Capabilities</p>
            <h2 id="capabilities-title">From idea<br />to <em>useful.</em></h2>
          </div>
          <div className="section-illustration section-illustration--system" aria-hidden="true"><span /><span /><span /></div>
          <div className="capability-list">
            {capabilityGroups.map(([number, title, items]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="selected" className="selected-section panel" aria-labelledby="selected-title">
          <div className="section-heading selected-heading">
            <p className="section-kicker">03 / Selected work</p>
            <h2 id="selected-title">Built with<br /><em>real intent.</em></h2>
            <p>Six products that show the range: a build studio, a discovery platform, developer tooling, agent experience, productized operations and subscription systems.</p>
          </div>

          <article className="lead-work">
            <div className="lead-work-mark" aria-hidden="true"><span>BL</span><small>DAETO / BUILD STUDIO</small></div>
            <div className="lead-work-copy">
              <p className="section-kicker">Lead project / Founder</p>
              <h3>{blindspotLab.name}</h3>
              <p>{blindspotLab.description}</p>
              {blindspotLab.snapshot && <p className="project-fact">{blindspotLab.snapshot}</p>}
              {blindspotLab.portfolioValue && <p className="lead-value">{blindspotLab.portfolioValue}</p>}
              <WorkLink project={blindspotLab} label="Visit BlindspotLab" />
            </div>
          </article>

          <div className="featured-work">
            {[arcapush, stackBrief].map((project, index) => (
              <article className={`feature-work${index === 1 ? " feature-work--offset" : ""}`} key={project.slug}>
                <ProjectVisual project={project} index={index} />
                <div>
                  <p className="section-kicker">{prettyCategory(project.category[0])} / {displayProjectStatus(project)}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.snapshot && <p className="project-fact">{project.snapshot}</p>}
                  <WorkLink project={project} />
                  {project.sourceUrl && <a className="secondary-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>}
                  {project.packageUrl && <a className="secondary-link" href={project.packageUrl} target="_blank" rel="noopener noreferrer">npm &#8599;</a>}
                </div>
              </article>
            ))}
          </div>

          <div className="compact-work-grid">
            {compactWork.map((project, index) => <CompactWork key={project.slug} project={project} index={index + 2} />)}
          </div>
        </section>

        <section className="proof-section panel" aria-labelledby="proof-title">
          <div className="proof-intro">
            <p className="section-kicker">04 / Proof</p>
            <h2 id="proof-title">The work<br /><em>compounds.</em></h2>
          </div>
          <div className="milestone-list">
            {milestones.map(([number, label]) => <article key={number}><strong>{number}</strong><p>{label}</p></article>)}
          </div>
        </section>

        <section id="projects" className="archive-section panel" aria-labelledby="archive-title">
          <div className="section-heading archive-heading">
            <p className="section-kicker">05 / Complete project index</p>
            <h2 id="archive-title">The complete<br /><em>build record.</em></h2>
            <p>Major products, experiments, paused systems and cultural builds - each with its confirmed status and public destination where one exists.</p>
          </div>
          <ProjectArchive />
        </section>

        <section id="approach" className="thoughts-section panel" aria-labelledby="thoughts-title">
          <div className="section-heading">
            <p className="section-kicker">06 / Thoughts</p>
            <h2 id="thoughts-title">Product<br /><em>philosophy.</em></h2>
          </div>
          <div className="section-illustration section-illustration--prompt" aria-hidden="true"><span /><span /></div>
          <div className="thought-list">
            {thoughts.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <p className="section-kicker">07 / Contact</p>
          <h2 id="contact-title">Let&apos;s build<br />something<br /><em>useful.</em></h2>
          <div className="contact-bottom">
            <p>Have a useful idea that needs sharper thinking, stronger systems and disciplined execution?</p>
            <a href="mailto:hello@mojeeb.xyz">hello@mojeeb.xyz <ExternalArrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-title"><span>Mojeeb</span><strong>AI Product Engineer<br />System Architect</strong></div>
        <nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/builds">Selected Work</Link><Link href="/builds">Projects</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
        <div className="footer-socials"><a href="https://x.com/MojeebMotion" target="_blank" rel="noopener noreferrer">X</a><a href="https://www.linkedin.com/in/tmojeeb" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/mojeebdev" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://devpost.com/mojeebdev" target="_blank" rel="noopener noreferrer">Devpost</a></div>
        <p>&copy; {new Date().getFullYear()} Mojeeb Titilayo</p>
      </footer>
    </>
  );
}
