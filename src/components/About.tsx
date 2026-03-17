import { Eye, ShieldCheck, Zap, Terminal, Code2, Layout, Rocket } from "lucide-react";
import { CapabilitiesTicker } from "./CapabilitiesTicker"; 

const capabilities = [
  { label: "Build", skills: ["AI Tools", "Smart Contracts", "Full-Stack"], icon: <Code2 size={12} /> },
  { label: "Design", skills: ["UI/UX", "System Design", "Figma"], icon: <Layout size={12} /> },
  { label: "Grow", skills: ["Community", "Content Strategy", "GTM"], icon: <Rocket size={12} /> },
];

const ecosystems = [
  { name: "Ethereum", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
  { name: "Base", logo: "/base-logo.png" },
  { name: "Solana", logo: "/solana-sol-logo.png" },
  { name: "Polygon", logo: "/polygon-matic-logo.png" },
  { name: "Avalanche", logo: "/avalanche-avax-logo.png" },
];

// --- Ticker Component Integrated Directly ---
export function CapabilitiesTicker() {
  const tickerContent = capabilities.flatMap((cap) => [...cap.skills]);
  const items = [...tickerContent, ...tickerContent, ...tickerContent]; // Triple for smoother loop

  return (
    <div className="w-full overflow-hidden py-5 border-y border-white/[0.06] bg-[#080808] mt-3 mb-3 rounded-[1.75rem]">
      <div className="flex gap-16 animate-ticker whitespace-nowrap">
        {items.map((skill, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
            <span className="text-[#4e24cf] text-[8px]">◆</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#030303]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
          <div>
            <span className="text-[#4e24cf] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase leading-none">
              How I <span className="text-white/20 italic">Think.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* PHILOSOPHY (Full Width Top) */}
          <div className="lg:col-span-12 bg-[#080808] border border-white/[0.06] rounded-[1.75rem] p-10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4e24cf] via-[#4e24cf]/50 to-transparent" />
             <div className="max-w-3xl">
                <p className="text-[10px] font-black text-[#4e24cf] uppercase tracking-[0.4em] mb-5">Core Belief</p>
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-[-0.03em] mb-6 uppercase">
                  Longevity is the<br />
                  <span className="text-[#4e24cf]">Ultimate Leverage.</span>
                </h3>
                <p className="text-white/40 text-lg italic border-l-2 border-[#4e24cf]/30 pl-5 mb-8 leading-relaxed">
                  "I help teams design systems that grow deliberately — identifying structural blindspots before they become expensive problems."
                </p>
             </div>
          </div>

          {/* THE TICKER (The Capabilities Move Here) */}
          <div className="lg:col-span-12">
            <CapabilitiesTicker />
          </div>

          {/* ECOSYSTEM BAR (Bottom) */}
          <div className="lg:col-span-12 bg-[#080808] border border-white/[0.06] rounded-[1.75rem] px-8 py-8">
            <div className="flex flex-wrap justify-between items-center gap-8">
              {ecosystems.map((eco) => (
                <div key={eco.name} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                  <img src={eco.logo} alt={eco.name} className="w-5 h-5 object-contain" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover:text-[#4e24cf]">
                    {eco.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
