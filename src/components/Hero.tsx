import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Linkedin, BookOpen, X, Zap, Terminal, ExternalLink } from "lucide-react";

const TICKER_ITEMS = [
  "Currently Building → xunfollow.xyz",
  "Currently Building → vibestream.cc",
  "Currently Building → blindspotlab.xyz",
  "Open for Collabs → Web3 Strategy",
  "Open for Collabs → Community & Growth",
  "Vibe Coder. Founder. Strategist.",
];

const Hero = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTickerIndex((i) => (i + 1) % TICKER_ITEMS.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* ── TOP STATUS BAR ── */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4e24cf] animate-pulse" />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4e24cf] transition-opacity duration-400"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {TICKER_ITEMS[tickerIndex]}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-white/20 font-mono uppercase tracking-widest">
            <MapPin size={10} className="text-white/20" />
            Nigeria / Global
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* ── LEFT — IDENTITY BLOCK ── */}
          <div className="lg:col-span-8 bg-[#080808] border border-white/[0.06] rounded-[2rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[520px]">

            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(78,36,207,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(78,36,207,0.8) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Corner bracket decoration */}
            <div className="absolute top-6 right-6 opacity-10">
              <div className="w-8 h-8 border-t border-r border-[#4e24cf]" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-10">
              <div className="w-8 h-8 border-b border-l border-[#4e24cf]" />
            </div>

            <div className="relative z-10">
              {/* Tags row */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 bg-[#4e24cf]/15 border border-[#4e24cf]/30 text-[#4e24cf] text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1.5 rounded-full">
                  <Zap size={9} /> Vibe Coder
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1.5 rounded-full">
                  <Terminal size={9} /> Founder
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-[0.35em] px-3 py-1.5 rounded-full">
                  Web3 Strategist
                </span>
              </div>

              {/* Name */}
              <h1 className="text-[clamp(48px,7vw,88px)] font-black leading-[0.9] tracking-[-0.04em] text-white uppercase mb-6">
                Mojeeb<br />
                <span className="text-white/20">Titilayo</span>
                <span className="text-[#4e24cf]">.</span>
              </h1>

              {/* One-liner */}
              <p className="text-white/50 text-base md:text-lg max-w-lg leading-relaxed font-medium mb-10">
                I build at the edge of thought — shipping{" "}
                <span className="text-white">AI tools, Web3 systems</span> and{" "}
                <span className="text-white">growth engines</span> for the next cycle. Founder of{" "}
                <a href="https://blindspotlab.xyz" target="_blank" rel="noopener noreferrer" className="text-[#4e24cf] hover:underline underline-offset-4">
                  Blindspot Lab
                </a>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group bg-[#4e24cf] text-white px-7 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#6d3cf7] transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(78,36,207,0.4)] hover:shadow-[0_0_50px_rgba(78,36,207,0.6)] hover:scale-105 active:scale-95"
                >
                  Hire Me <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="/ai"
                  className="group bg-white/5 border border-white/10 hover:border-[#4e24cf]/50 text-white/60 hover:text-white px-7 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                >
                  <Zap size={11} className="text-[#4e24cf]" /> Vibe Portfolio
                </a>

                {/* Social icons */}
                <div className="flex items-center gap-4 ml-2">
                  {[
                    { href: "https://x.com/mojeebeth", icon: <X size={16} /> },
                    { href: "https://linkedin.com/in/mojeebeth", icon: <Linkedin size={16} /> },
                    { href: "https://mojeebhq.medium.com", icon: <BookOpen size={16} /> },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-white/20 hover:text-white transition-colors hover:scale-110 transform">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom project quick links */}
            <div className="relative z-10 flex flex-wrap gap-6 pt-8 mt-8 border-t border-white/[0.06]">
              {[
                { label: "xunfollow.xyz", href: "https://xunfollow.xyz", hot: true },
                { label: "vibestream.cc", href: "https://vibestream.cc" },
                { label: "blindspotlab.xyz", href: "https://blindspotlab.xyz" },
                { label: "whate.online", href: "https://whate.online" },
              ].map((p) => (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 group">
                  {p.hot && <div className="w-1.5 h-1.5 rounded-full bg-[#4e24cf] animate-pulse" />}
                  <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest group-hover:text-white transition-colors">
                    {p.label}
                  </span>
                  <ExternalLink size={8} className="text-white/10 group-hover:text-white/40 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-4 flex flex-col gap-4">

            {/* Photo card */}
            <div className="flex-1 bg-[#080808] border border-white/[0.06] rounded-[2rem] overflow-hidden relative group min-h-[300px]">
              <img
                src="/mojeeb-2026-headshot.jpg"
                alt="Mojeeb Titilayo"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.3em] mb-1">Founder</p>
                <p className="text-white font-bold text-sm uppercase tracking-tight">Blindspot Lab</p>
              </div>
            </div>

            {/* Vibe Portfolio CTA card */}
            <a href="/ai"
              className="group bg-[#4e24cf]/10 border border-[#4e24cf]/25 hover:border-[#4e24cf]/60 hover:bg-[#4e24cf]/15 rounded-[2rem] p-6 transition-all flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.3em]">New</span>
                <Zap size={14} className="text-[#4e24cf] group-hover:scale-125 transition-transform" />
              </div>
              <p className="text-white font-black text-base uppercase tracking-tight leading-tight">
                Vibe Coder<br />Portfolio
              </p>
              <p className="text-white/40 text-[11px] leading-relaxed">
                Everything I've built and shipped with AI — tools, systems, and works in progress.
              </p>
              <div className="flex items-center gap-2 text-[#4e24cf] text-[10px] font-bold uppercase tracking-widest mt-1 group-hover:gap-3 transition-all">
                See the Builds <ArrowRight size={10} />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;