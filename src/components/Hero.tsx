import React from 'react';
import { 
  MapPin, ArrowRight, Linkedin, BookOpen, Utensils, 
  Heart, X, Code2, Rocket, Layout, PenTool, Cpu 
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    { icon: <Code2 size={12} />, label: "Smart Contracts & AI" },
    { icon: <Layout size={12} />, label: "UI/UX & Design Strategy" },
    { icon: <Rocket size={12} />, label: "Growth & Marketing" },
    { icon: <PenTool size={12} />, label: "Content Strategy" },
  ];

  return (
    <section id="hero" className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          
          <div className="md:col-span-8 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-center min-h-[520px] relative overflow-hidden group">
            
            
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-all duration-500 pointer-events-none rotate-12 group-hover:rotate-0">
              <img 
                src="/mojeeb-2026-headshot.jpg" 
                alt="Mojeeb Titilayo Logo" 
                className="w-[320px] h-[320px] object-contain grayscale"
              />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-[#4e24cf] text-[10px] font-bold uppercase tracking-[0.4em] block">Strategist & Founder</span>
                <div className="px-2 py-0.5 rounded bg-[#4e24cf]/10 border border-[#4e24cf]/20 text-[#4e24cf] text-[8px] font-bold uppercase tracking-widest">
                  Resourceful
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
                MOJEEB <br />
                <span className="text-gray-500 italic">TITILAYO.</span>
              </h1>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl group/item hover:border-[#4e24cf]/50 transition-colors">
                    <div className="text-[#4e24cf] group-hover/item:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover/item:text-white transition-colors">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-lg max-w-lg leading-relaxed font-medium mb-10">
                Founder of{" "}
                <a 
                  href="https://blindspotlab.xyz"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white underline decoration-[#4e24cf]/50 underline-offset-4 cursor-pointer hover:text-[#4e24cf] transition-colors"
                >
                  Blindspot Lab
                </a>. 
                Designing growth systems and ecosystem strategy for the next on-chain cycle.
              </p>
              
              <div className="flex flex-wrap items-center gap-8 mb-10">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#4e24cf] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#6d28d9] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95"
                >
                  Discuss Strategy <ArrowRight size={16} />
                </button>

                <div className="flex items-center gap-6">
                  <a href="https://x.com/mojeebeth" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                    <X size={20} />
                  </a>
                  <a href="https://linkedin.com/in/mojeebhq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://mojeebhq.medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                    <BookOpen size={20} />
                  </a>
                </div>
              </div>

              {/* PROJECT QUICK-LINKS */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                 <a href="https://whate.online" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                    <Utensils size={12} className="text-[#4e24cf] opacity-50 group-hover:opacity-100" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Whate Engine</span>
                 </a>
                 <div className="w-[1px] h-3 bg-white/10 self-center" />
                 <a href="https://trench.mojeeb.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Trench Sniper</span>
                 </a>
                 <div className="w-[1px] h-3 bg-white/10 self-center" />
                 <a href="https://dearly.icu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
                    <Heart size={12} className="text-pink-500/50 group-hover:text-pink-500" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Dearly</span>
                 </a>
              </div>
            </div>
          </div>

          
          <div className="md:col-span-4 h-[450px] md:h-auto bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden relative group">
            <img 
              src="/mojeeb-2026-headshot.jpg" 
              alt="Mojeeb Titilayo" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-left">
              <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">Founder, Blindspot Lab</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-4 h-4 rounded-full bg-[#4e24cf]/20 flex items-center justify-center">
                  <MapPin size={10} className="text-[#4e24cf]" />
                </div>
                <span className="text-xs font-medium tracking-tight">Nigeria / Global</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;