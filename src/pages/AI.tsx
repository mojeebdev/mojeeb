import { useEffect } from 'react'

const aiStyles = `
  .ai-page *, .ai-page *::before, .ai-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ai-page {
    --black: #080610;
    --white: #f0eeff;
    --cream: #e8e4ff;
    --acid: #7c3aed;
    --acid-bright: #a855f7;
    --acid-glow: #c084fc;
    --dim: #8b82a8;
    --border: rgba(124,58,237,0.15);
    --border-soft: rgba(240,238,255,0.08);

    background: var(--black);
    color: var(--white);
    font-family: 'DM Mono', monospace;
    font-size: 14px;
    line-height: 1.7;
    overflow-x: hidden;
    min-height: 100vh;
  }

  .ai-page .noise-overlay {
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.6;
  }

  .ai-page .grid-overlay {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  .ai-page .bg-glow {
    position: fixed;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .ai-page .bg-glow-2 {
    position: fixed;
    bottom: 10%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .ai-page .ai-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    background: rgba(8,6,16,0.88);
    backdrop-filter: blur(16px);
  }

  .ai-page .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--white);
    text-decoration: none;
  }

  .ai-page .nav-logo span { color: var(--acid-bright); }

  .ai-page .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .ai-page .nav-links a {
    color: var(--dim);
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .ai-page .nav-links a:hover { color: var(--acid-glow); }

  .ai-page .hero {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 120px 40px 80px;
    border-bottom: 1px solid var(--border);
  }

  .ai-page .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--acid-bright);
    margin-bottom: 32px;
    opacity: 0;
    animation: aiFadeUp 0.6s ease forwards 0.2s;
  }

  .ai-page .hero-tag::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--acid-bright);
  }

  .ai-page .hero-headline {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(52px, 8vw, 112px);
    line-height: 0.95;
    letter-spacing: -0.03em;
    max-width: 900px;
    opacity: 0;
    animation: aiFadeUp 0.8s ease forwards 0.4s;
  }

  .ai-page .hero-headline .accent {
    color: transparent;
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ai-page .hero-sub {
    margin-top: 40px;
    max-width: 520px;
    color: var(--dim);
    font-size: 14px;
    line-height: 1.8;
    opacity: 0;
    animation: aiFadeUp 0.8s ease forwards 0.6s;
  }

  .ai-page .hero-sub strong { color: var(--white); font-weight: 400; }

  .ai-page .hero-cta {
    margin-top: 48px;
    display: flex;
    gap: 16px;
    align-items: center;
    opacity: 0;
    animation: aiFadeUp 0.8s ease forwards 0.8s;
  }

  .ai-page .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    color: var(--white);
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
    overflow: hidden;
  }

  .ai-page .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a855f7, #c084fc);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .ai-page .btn-primary:hover::before { opacity: 1; }
  .ai-page .btn-primary span { position: relative; z-index: 1; }

  .ai-page .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(124,58,237,0.45);
  }

  .ai-page .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: transparent;
    color: var(--dim);
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--border);
    transition: color 0.2s, border-color 0.2s;
  }

  .ai-page .btn-ghost:hover { color: var(--acid-glow); border-color: rgba(168,85,247,0.4); }

  .ai-page section {
    position: relative;
    z-index: 1;
    padding: 100px 40px;
    border-bottom: 1px solid var(--border-soft);
  }

  .ai-page .section-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--acid-bright);
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ai-page .section-label::after {
    content: '';
    flex: 1;
    max-width: 60px;
    height: 1px;
    background: var(--acid-bright);
    opacity: 0.4;
  }

  .ai-page .section-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .ai-page .identity {
    position: relative;
    z-index: 1;
    padding: 48px 0;
    background: rgba(124,58,237,0.05);
    border-bottom: 1px solid var(--border);
    border-top: 1px solid var(--border);
    overflow: hidden;
  }

  .ai-page .identity-scroll {
    display: flex;
    gap: 48px;
    animation: aiScroll 22s linear infinite;
    width: max-content;
  }

  .ai-page .identity-item {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dim);
    display: flex;
    align-items: center;
    gap: 16px;
    white-space: nowrap;
  }

  .ai-page .identity-item .dot {
    width: 4px;
    height: 4px;
    background: var(--acid-bright);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--acid-bright);
  }

  .ai-page .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    max-width: 1100px;
  }

  .ai-page .about-body {
    color: var(--dim);
    line-height: 1.9;
  }

  .ai-page .about-body p + p { margin-top: 20px; }
  .ai-page .about-body strong { color: var(--white); font-weight: 400; }

  .ai-page .about-stats {
    display: flex;
    flex-direction: column;
    gap: 1px;
    border: 1px solid var(--border);
  }

  .ai-page .stat-item {
    padding: 28px 32px;
    border-bottom: 1px solid var(--border);
    transition: background 0.3s;
  }

  .ai-page .stat-item:hover { background: rgba(124,58,237,0.06); }
  .ai-page .stat-item:last-child { border-bottom: none; }

  .ai-page .stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, #7c3aed, #c084fc);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    display: block;
    margin-bottom: 4px;
  }

  .ai-page .stat-label {
    font-size: 12px;
    color: var(--dim);
    letter-spacing: 0.06em;
  }

  .ai-page .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  .ai-page .project-card {
    background: var(--black);
    padding: 40px;
    transition: background 0.3s;
    position: relative;
    overflow: hidden;
  }

  .ai-page .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #7c3aed, #c084fc);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .ai-page .project-card:hover::before { transform: scaleX(1); }
  .ai-page .project-card:hover { background: rgba(124,58,237,0.05); }

  .ai-page .project-num {
    font-size: 11px;
    color: var(--acid-bright);
    letter-spacing: 0.1em;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  .ai-page .project-name {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .ai-page .project-url {
    font-size: 11px;
    color: var(--acid-bright);
    letter-spacing: 0.06em;
    margin-bottom: 16px;
    text-decoration: none;
    opacity: 0.65;
    transition: opacity 0.2s;
    display: block;
  }

  .ai-page .project-url:hover { opacity: 1; }

  .ai-page .project-desc {
    color: var(--dim);
    font-size: 13px;
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .ai-page .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .ai-page .tag {
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 1px solid var(--border-soft);
    color: var(--dim);
  }

  .ai-page .tag.powered {
    border-color: rgba(124,58,237,0.4);
    color: var(--acid-glow);
    opacity: 0.8;
  }

  .ai-page .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  .ai-page .service-card {
    background: var(--black);
    padding: 40px 36px;
    transition: background 0.3s;
    position: relative;
    overflow: hidden;
  }

  .ai-page .service-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .ai-page .service-card:hover::after { opacity: 1; }
  .ai-page .service-card:hover { background: rgba(124,58,237,0.05); }

  .ai-page .service-icon { font-size: 24px; margin-bottom: 20px; }

  .ai-page .service-name {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  .ai-page .service-desc { color: var(--dim); font-size: 13px; line-height: 1.7; }

  .ai-page .stack-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 32px;
  }

  .ai-page .stack-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border: 1px solid var(--border);
    font-size: 12px;
    letter-spacing: 0.04em;
    color: var(--dim);
    transition: border-color 0.2s, color 0.2s, background 0.2s;
  }

  .ai-page .stack-pill:hover {
    border-color: rgba(168,85,247,0.5);
    color: var(--white);
    background: rgba(124,58,237,0.08);
  }

  .ai-page .stack-pill .pill-dot {
    width: 6px;
    height: 6px;
    background: var(--acid-bright);
    border-radius: 50%;
    opacity: 0.7;
    flex-shrink: 0;
    box-shadow: 0 0 6px rgba(168,85,247,0.6);
  }

  .ai-page .cta-section {
    padding: 120px 40px;
    text-align: center;
    background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%);
    border-bottom: none;
    position: relative;
    z-index: 1;
  }

  .ai-page .cta-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--acid-bright);
    margin-bottom: 24px;
    display: block;
  }

  .ai-page .cta-headline {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(40px, 6vw, 80px);
    line-height: 1;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
  }

  .ai-page .cta-sub {
    color: var(--dim);
    max-width: 420px;
    margin: 0 auto 48px;
    line-height: 1.8;
  }

  .ai-page .cta-buttons { display: flex; gap: 16px; justify-content: center; }

  .ai-page .ai-footer {
    position: relative;
    z-index: 1;
    padding: 32px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);
  }

  .ai-page .footer-left { font-size: 12px; color: var(--dim); }

  .ai-page .footer-links { display: flex; gap: 24px; }

  .ai-page .footer-links a {
    font-size: 12px;
    color: var(--dim);
    text-decoration: none;
    letter-spacing: 0.06em;
    transition: color 0.2s;
  }

  .ai-page .footer-links a:hover { color: var(--acid-glow); }

  @keyframes aiFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes aiScroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .ai-page .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .ai-page .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .ai-page .ai-nav { padding: 16px 20px; }
    .ai-page .nav-links { display: none; }
    .ai-page .hero { padding: 100px 20px 60px; }
    .ai-page section { padding: 72px 20px; }
    .ai-page .about-grid { grid-template-columns: 1fr; gap: 48px; }
    .ai-page .projects-grid { grid-template-columns: 1fr; }
    .ai-page .services-grid { grid-template-columns: 1fr; }
    .ai-page .cta-section { padding: 80px 20px; }
    .ai-page .cta-buttons { flex-direction: column; align-items: center; }
    .ai-page .ai-footer { flex-direction: column; gap: 16px; text-align: center; }
  }
`

export default function AI() {
  useEffect(() => {
    const fontId = 'ai-page-fonts'
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link')
      link.id = fontId
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap'
      document.head.appendChild(link)
    }

   
    const reveals = document.querySelectorAll('.ai-page .reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{aiStyles}</style>

      <div className="ai-page">
        {/* Background effects */}
        <div className="noise-overlay" />
        <div className="grid-overlay" />
        <div className="bg-glow" />
        <div className="bg-glow-2" />

        {/* NAV */}
        <nav className="ai-nav">
          <a href="https://mojeeb.xyz" className="nav-logo">
            mojeeb<span>.xyz/ai</span>
          </a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-tag">AI Work & Consulting</div>
          <h1 className="hero-headline">
            Building with<br /><span className="accent">AI.</span><br />Natively.
          </h1>
          <p className="hero-sub">
            <strong>AI-native Web3 founder</strong> using modern AI systems to ship products, design
            prompt workflows, and accelerate startup growth — without waiting on engineers.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn-primary"><span>See the Work →</span></a>
            <a href="#contact" className="btn-ghost">Work Together</a>
          </div>
        </section>

        {/* IDENTITY TICKER */}
        <div className="identity">
          <div className="identity-scroll">
            {[
              'AI-Native Founder', 'Vibe Coder', 'Prompt Systems', 'Web3 × AI',
              'Product Intelligence', 'AI Workflow Design', 'Early-Stage Strategy', 'AI-Powered MVPs',
              'AI-Native Founder', 'Vibe Coder', 'Prompt Systems', 'Web3 × AI',
              'Product Intelligence', 'AI Workflow Design', 'Early-Stage Strategy', 'AI-Powered MVPs',
            ].map((label, i) => (
              <span key={i} className="identity-item">
                <span className="dot" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about">
          <div className="section-label">Who I Am</div>
          <div className="about-grid">
            <div>
              <h2 className="section-title reveal">Not just using AI.<br />Building with it.</h2>
              <div className="about-body reveal">
                <p>
                  I'm Mojeeb — a Web3 strategist and AI-native founder building a portfolio of
                  AI-powered products as a solo founder. My work sits at the intersection of{' '}
                  <strong>AI systems, product experimentation, and startup strategy</strong>.
                </p>
                <p>
                  I don't wait for a dev team. I ship with AI — using Claude, ChatGPT, and Gemini
                  to design prompt frameworks, build MVPs, and create research tools that surface
                  insights at a speed most teams can't match.
                </p>
                <p>
                  My focus is practical:{' '}
                  <strong>using AI where it removes friction and creates leverage</strong> — in
                  products, research, operations, and growth.
                </p>
              </div>
            </div>
            <div className="about-stats reveal">
              <div className="stat-item">
                <span className="stat-num">10+</span>
                <span className="stat-label">AI-powered products shipped</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">5</span>
                <span className="stat-label">AI models in active use (Claude · ChatGPT · Gemini · DeepSeek · Grok)</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">Solo</span>
                <span className="stat-label">Founder. No dev team. Ships anyway.</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">Web3×AI</span>
                <span className="stat-label">The crossover most strategists haven't caught up to yet.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work">
          <div className="section-label">AI Projects</div>
          <h2 className="section-title reveal">Things I've Built</h2>
          <br />
          <div className="projects-grid reveal">
            <div className="project-card">
              <div className="project-num">01</div>
              <div className="project-name">Arcapush (formerly Vibestream)</div>
              <a href="https://arcapush.com" className="project-url" target="_blank" rel="noreferrer">arcapush.com ↗</a>
              <p className="project-desc">AI-assisted product discovery and visibility platform. </p>
              <div className="project-tags">
                <span className="tag">Product Discovery</span>
                <span className="tag">Founder Profiles</span>
                <span className="tag">VC Discovery</span>
                <span className="tag powered">AI-Assisted Build</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-num">02</div>
              <div className="project-name">BlindspotLab</div>
              <a href="https://blindspotlab.xyz" className="project-url" target="_blank" rel="noreferrer">blindspotlab.xyz ↗</a>
              <p className="project-desc">Experimental environment for testing AI systems, prompt evaluation frameworks, and product intelligence tools. Home of the AI Auditor — built on Gemini.</p>
              <div className="project-tags">
                <span className="tag">AI Auditing</span>
                <span className="tag">Prompt Eval</span>
                <span className="tag">Product Intelligence</span>
                <span className="tag powered">Powered by Gemini</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-num">03</div>
              <div className="project-name">Prompt Strength Analyzer</div>
              <a href="https://promptrank.arcapush.com" className="project-url" target="_blank" rel="noreferrer">promptrank.arcapush.com ↗</a>
              <p className="project-desc">Evaluates prompts and assigns capability rankings — Senior, Mid, or Junior — to help users understand and improve their prompt effectiveness in real time.</p>
              <div className="project-tags">
                <span className="tag">Prompt Engineering</span>
                <span className="tag">Capability Ranking</span>
                <span className="tag powered">AI-Powered</span>
              </div>
            </div>
              
              <div className="project-card">
              <div className="project-num">04</div>
              <div className="project-name">Master Prompt Generator</div>
              <a href="https://arcaprompt.arcapush.com" className="project-url" target="_blank" rel="noreferrer">https://arcaprompt.arcapush.com ↗</a>
              <p className="project-desc">Evaluates prompts and assigns capability rankings — Senior, Mid, or Junior — to help users understand and improve their prompt effectiveness in real time.</p>
              <div className="project-tags">
                <span className="tag">Prompt Engineering</span>
                <span className="tag">Capability Ranking</span>
                <span className="tag powered">AI-Powered</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-num">05</div>
              <div className="project-name">Dearly</div>
              <a href="https://dearly.icu" className="project-url" target="_blank" rel="noreferrer">dearly.icu ↗</a>
              <p className="project-desc">Gemini-powered system that generates deeply personalized messages using AI. Built around emotional intelligence and contextual message crafting.</p>
              <div className="project-tags">
                <span className="tag">Personalization</span>
                <span className="tag">Message Generation</span>
                <span className="tag powered">Powered by Gemini</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-num">06</div>
              <div className="project-name">SaaS Intelligence Lab</div>
              <a href="https://saas.mojeeb.xyz" className="project-url" target="_blank" rel="noreferrer">saas.mojeeb.xyz ↗</a>
              <p className="project-desc">Research environment that analyzes user complaints and founder feedback to surface product blindspots and generate support intelligence.</p>
              <div className="project-tags">
                <span className="tag">Product Research</span>
                <span className="tag">Support Intelligence</span>
                <span className="tag">Blindspot Detection</span>
                <span className="tag powered">Powered by Gemini</span>
              </div>
            </div>

            <div className="project-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'rgba(124,58,237,0.03)', border: 'none' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: 700, color: 'var(--dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>More in Progress</div>
              <div style={{ fontSize: '12px', color: 'var(--dim)', marginTop: '8px', opacity: 0.6 }}>Building in public on X</div>
              <a href="https://x.com/mojeebeth" target="_blank" rel="noreferrer" style={{ marginTop: '20px', color: 'var(--acid-bright)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.06em', opacity: 0.8 }}>@mojeebeth ↗</a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <div className="section-label">What I Offer</div>
          <h2 className="section-title reveal">Where I Can Help</h2>
          <br />
          <div className="services-grid reveal">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <div className="service-name">AI Adoption Strategy</div>
              <p className="service-desc">Help early-stage startups identify where AI creates the most leverage — in product, ops, or growth — and build a practical adoption roadmap.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧪</div>
              <div className="service-name">AI-Powered MVPs</div>
              <p className="service-desc">Rapidly prototype AI-powered features and products using modern LLM APIs. From concept to working demo — without a traditional dev team.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧠</div>
              <div className="service-name">Prompt System Design</div>
              <p className="service-desc">Design, evaluate, and optimize prompt frameworks for AI products. Build systems that are consistent, reliable, and calibrated to your goals.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <div className="service-name">AI Research & Intelligence</div>
              <p className="service-desc">Build AI-assisted research workflows to surface product insights, competitive intelligence, and user feedback analysis — faster than traditional methods.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <div className="service-name">Web3 × AI Strategy</div>
              <p className="service-desc">Help Web3 projects and DAOs integrate AI into their products and operations — bridging two ecosystems most strategists operate in separately.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📣</div>
              <div className="service-name">AI Content & Knowledge Workflows</div>
              <p className="service-desc">Design content systems and knowledge workflows powered by AI — for newsletters, community, documentation, and research pipelines.</p>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack">
          <div className="section-label">Tools & Stack</div>
          <h2 className="section-title reveal">What I Build With</h2>
          <div className="stack-row reveal">
            {[
              'Claude (Anthropic)', 'ChatGPT (OpenAI)', 'Gemini (Google)', 'DeepSeek (High Flyer)',
              'Next.js', 'Vercel', 'Prisma',
              'Prompt Engineering', 'LLM API Integration', 'AI Workflow Design', 'Web3 Ecosystems'
            ].map((tool) => (
              <div key={tool} className="stack-pill">
                <span className="pill-dot" />
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="cta-section">
          <span className="cta-label">Let's Build</span>
          <h2 className="cta-headline reveal">Got an AI<br />problem to solve?</h2>
          <p className="cta-sub reveal">Open to consulting, advisory, and select full-time roles where AI is at the core of what's being built.</p>
          <div className="cta-buttons reveal">
            <a href="mailto:hello@mojeeb.xyz" className="btn-primary"><span>Get in Touch →</span></a>
            <a href="https://x.com/mojeebeth" target="_blank" rel="noreferrer" className="btn-ghost">Follow on X</a>
            <a href="https://mojeeb.xyz" target="_blank" rel="noreferrer" className="btn-ghost">Explore More</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ai-footer">
          <span className="footer-left">© 2026 Mojeeb — mojeeb.xyz/ai</span>
          <div className="footer-links">
            <a href="https://x.com/mojeebeth" target="_blank" rel="noreferrer">X</a>
            <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://arcapush.com" target="_blank" rel="noreferrer">Arcapush</a>
            <a href="https://blindspotlab.xyz" target="_blank" rel="noreferrer">BlindspotLab</a>
          </div>
        </footer>
      </div>
    </>
  )
}