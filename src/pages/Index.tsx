import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { CapabilitiesTicker } from "@/components/CapabilitiesTicker"; 
import About from "@/components/About";
import ProjectVault from "@/components/ProjectVault";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { ArrowUp, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollAmount = (window.scrollY / windowHeight) * 100;
      setScrollPercentage(scrollAmount);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F9F6F2] text-gray-900 selection:bg-[#5B2BFF]/20">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] z-[100] shadow-[0_0_10px_rgba(91,43,255,0.3)] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />

      <Navigation />
      
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>

        {/* Standalone Ticker - Full width between Hero and About */}
        <div className="w-full">
          <CapabilitiesTicker />
        </div>
        
        <div className="space-y-0 pb-16">
          <About />

          <section id="work">
            <ProjectVault />
          </section>
          
          <div className="container mx-auto px-6 py-4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
          
          <Blog />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-md group-hover:border-[#5B2BFF]/50 transition-all overflow-hidden">
                  <img 
                    src="/lovable-uploads/favicon.ico" 
                    alt="Mojeeb Icon" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
                  Mojeeb<span className="text-[#5B2BFF]">HQ</span>
                </span>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">
                Systems • Strategy • Research • Design • AI <br />
                mojeeb.xyz All rights reserved © 2026  
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                <div className="text-right">
                  <p className="text-[9px] text-[#5B2BFF] font-mono uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B2BFF] animate-pulse" /> 
                    System: Operational
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase font-mono mt-1">v.2026.02.16</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={scrollToTop}
                  className="rounded-xl border border-gray-200 hover:border-[#5B2BFF] hover:text-[#5B2BFF] transition-all bg-white shadow-sm"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex items-center gap-3">
              <Zap size={14} className="text-[#5B2BFF]" />
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-relaxed max-w-sm text-left">
                Architecting long-term leverage for human and digital ecosystems.
              </p>
            </div>
            
            <div className="flex gap-8 items-center">
              <div className="flex flex-col items-end">
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Location</span>
                <span className="text-[11px] text-gray-900 uppercase tracking-widest font-black">Nigeria / Global</span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200" />
              <div className="flex flex-col items-start">
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Availability</span>
                <span className="text-[11px] text-[#5B2BFF] uppercase tracking-widest font-black">Open for Q1 '26</span>
              </div>
            </div>
          </div>

          {/* AI page promo in footer */}
          <div className="mt-12 text-center">
            <a 
              href="/ai" 
              className="inline-flex items-center gap-2 text-[9px] text-gray-400 hover:text-[#5B2BFF] uppercase tracking-[0.3em] transition-colors group"
            >
              <Cpu size={12} className="group-hover:text-[#5B2BFF]" />
              Explore AI Builds
              <span className="w-8 h-px bg-gray-300 group-hover:bg-[#5B2BFF] transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;