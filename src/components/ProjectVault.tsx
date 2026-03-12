import { ExternalLink, Zap, Utensils, Heart, Radio, Unlink, TrendingUp, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Blindspot Lab",
    tagline: "Strategy Intelligence",
    description:
      "Web3 AI auditor built to identify structural roadmap failures before they become expensive problems. Turning blind spots into leverage.",
    tech: ["Gemini AI", "Vercel", "Web3 Strategy"],
    link: "https://blindspotlab.xyz",
    icon: <Zap size={18} />,
    size: "md:col-span-7",
    accent: true,
    hot: false,
    stat: undefined as { label: string; value: string } | undefined,
  },
  {
    title: "Xunfollow",
    tagline: "Vibe Coded Tool",
    description:
      "Upload your X archive → see who doesn't follow back → download a personalized unfollow script. 100% local, zero data leaves your browser.",
    tech: ["Puppeteer", "Vanilla JS", "Privacy-First"],
    link: "https://xunfollow.xyz",
    icon: <Unlink size={18} />,
    size: "md:col-span-5",
    accent: false,
    hot: true,
    stat: { label: "Launch Day", value: "1,948 views" },
  },
  {
    title: "Vibestream",
    tagline: "Vibe-Built Product Index",
    description:
      "Where the next unicorn gets discovered. The go-to index for AI-built and vibe-coded products — with on-chain verified founder profiles and VC discovery tooling.",
    tech: ["Next.js", "Prisma", "Web3"],
    link: "https://vibestream.cc",
    icon: <Radio size={18} />,
    size: "md:col-span-4",
    accent: false,
    hot: false,
    stat: undefined as { label: string; value: string } | undefined,
  },
  {
    title: "VibeCheck",
    tagline: "Builder Intelligence · Blindspot Lab",
    description:
      "Audit your builder prompt and get ranked — Senior, Mid, or Junior. Powered by Gemini 2.5 Flash-Lite. Know your level before the market tells you.",
    tech: ["Next.js", "Gemini 2.5", "Upstash Redis", "Vercel"],
    link: "https://vibe.blindspotlab.xyz",
    icon: <ShieldCheck size={18} />,
    size: "md:col-span-4",
    accent: false,
    hot: true,
    stat: undefined as { label: string; value: string } | undefined,
  },
  {
    title: "Whate",
    tagline: "Utility Engine",
    description:
      "Decision-fatigue solution with 10k+ meal suggestions. 2-click logic for 9+ global personas. PWA built for real daily use.",
    tech: ["PWA", "UX Logic", "Global"],
    link: "https://whate.online",
    icon: <Utensils size={18} />,
    size: "md:col-span-4",
    accent: false,
    hot: false,
    stat: undefined as { label: string; value: string } | undefined,
  },
  {
    title: "Dearly",
    tagline: "Personalization Layer",
    description:
      "Human-centric system that transforms generic greetings into emotional assets through attribute mapping and custom logic.",
    tech: ["Personalization", "Custom Logic"],
    link: "https://dearly.icu",
    icon: <Heart size={18} />,
    size: "md:col-span-4",
    accent: false,
    hot: false,
    stat: undefined as { label: string; value: string } | undefined,
  },
];

const ProjectVault = () => {
  return (
    <section id="work" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              The Project Vault
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              Shipped <span className="text-white/20 italic">Systems.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[9px] text-white/20 font-mono uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4e24cf] animate-pulse" />
            {projects.length} projects active
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${p.size} group relative bg-[#080808] border rounded-[1.75rem] p-8 transition-all duration-300 overflow-hidden flex flex-col
                ${p.accent ? "border-[#4e24cf]/30 hover:border-[#4e24cf]/60" : "border-white/[0.06] hover:border-[#4e24cf]/30"}
              `}
            >
              {/* Glow on accent cards */}
              {p.accent && (
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#4e24cf]/10 rounded-full blur-3xl pointer-events-none group-hover:opacity-150 transition-opacity" />
              )}

              {/* HOT badge */}
              {p.hot && (
                <div className="absolute top-6 right-14 flex items-center gap-1.5 bg-[#4e24cf]/20 border border-[#4e24cf]/40 px-2.5 py-1 rounded-full">
                  <TrendingUp size={8} className="text-[#4e24cf]" />
                  <span className="text-[8px] font-black text-[#4e24cf] uppercase tracking-widest">New Launch</span>
                </div>
              )}

              {/* Icon + external link */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4e24cf]/10 border border-[#4e24cf]/20 flex items-center justify-center text-[#4e24cf]">
                  {p.icon}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="text-white/15 hover:text-white transition-colors group-hover:text-white/40">
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="mb-3">
                  <p className="text-[9px] font-black text-[#4e24cf] uppercase tracking-[0.3em] mb-1">{p.tagline}</p>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight leading-none">{p.title}</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

                {/* Launch stat */}
                {p.stat && (
                  <div className="bg-[#4e24cf]/10 border border-[#4e24cf]/20 rounded-xl px-4 py-2.5 mb-5 inline-flex items-center gap-3">
                    <TrendingUp size={10} className="text-[#4e24cf]" />
                    <span className="text-[9px] text-[#4e24cf] font-black uppercase tracking-widest">{p.stat.label}:</span>
                    <span className="text-[9px] text-white font-bold">{p.stat.value}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[8px] font-bold text-white/25 border border-white/[0.08] px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVault;