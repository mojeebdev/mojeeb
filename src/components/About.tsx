import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, ShieldCheck, Gauge, Cpu, 
  Gamepad2, Utensils, Heart, Code2, 
  Layout, Rocket, Binary
} from "lucide-react";

const About = () => {
  const ecosystems = [
    { 
      name: "ETHEREUM", 
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040" 
    },
    { 
      name: "BASE", 
      logo: "https://vibestream.cc/base-logo.png" 
    }, 
    { 
      name: "SOLANA", 
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040" 
    },
    { 
      name: "POLYGON", 
      logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=040" 
    },
    { 
      name: "AVALANCHE", 
      logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=040" 
    },
  ];

  const capabilities = [
    { label: "Build", skills: ["AI Development", "Smart Contracts", "Full-Stack Dev"], icon: <Code2 size={14}/> },
    { label: "Design", skills: ["UI/UX Strategy", "Figma Literacy", "System Design"], icon: <Layout size={14}/> },
    { label: "Growth", skills: ["Marketing", "Content Strategy", "Growth Strategy"], icon: <Rocket size={14}/> },
  ];

  return (
    <section id="about" className="py-12 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* PHILOSOPHY CARD */}
          <Card className="lg:col-span-7 glass-card border-white/5 bg-white/5 p-8 md:p-10">
            <span className="text-[#4e24cf] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Longevity is the <span className="text-[#4e24cf]">Ultimate Leverage.</span>
            </h2>
            <p className="text-lg text-white italic border-l-2 border-[#4e24cf]/30 pl-6 mb-8">
              "I help teams design systems that grow deliberately, identifying structural blindspots before they become expensive problems."
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#4e24cf]"/>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Growth Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4e24cf]"/>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Incentive Design</span>
              </div>
            </div>
          </Card>

          {/* CAPABILITIES CARD */}
          <Card className="lg:col-span-5 glass-card border-[#4e24cf]/20 bg-[#4e24cf]/5 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <Badge className="bg-[#4e24cf] text-white border-none text-[8px] tracking-widest uppercase">Multi-Disciplinary</Badge>
                <Binary className="text-[#4e24cf]/20 group-hover:text-[#4e24cf]/40 transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tighter">Core Resourcefulness</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#4e24cf]/30 transition-all">
                    <div className="flex items-center gap-2 text-[#4e24cf] text-[10px] font-black uppercase tracking-widest mb-2">
                      {cap.icon} {cap.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cap.skills.map(skill => (
                        <span key={skill} className="text-[11px] text-white/60 font-medium">
                          {skill} <span className="text-[#4e24cf]/40 ml-1">/</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* ACTIVE SYSTEMS CARD */}
          <Card className="lg:col-span-12 glass-card border-white/5 bg-white/5 p-8 relative overflow-hidden transition-all hover:border-[#4e24cf]/20">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-end">
              <div className="w-full md:w-1/2">
                <Badge className="mb-4 bg-white/10 text-white border-none text-[8px] tracking-widest uppercase">Deployment Terminal</Badge>
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Active Systems</h3>
                
                <div className="space-y-6">
                  <div className="group block cursor-pointer">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#4e24cf] uppercase tracking-[0.2em] mb-1">
                      <Utensils size={14} /> Whate Engine
                    </div>
                    <p className="text-[12px] text-white/70 group-hover:text-white transition-colors">
                      PWA solving decision fatigue with <span className="text-[#4e24cf]">10k+ food items</span> and persona-based logic.
                    </p>
                  </div>

                  <div className="group block cursor-pointer">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#4e24cf] uppercase tracking-[0.2em] mb-1">
                      <Heart size={14} /> Dearly Personalizer
                    </div>
                    <p className="text-[12px] text-white/70 group-hover:text-white transition-colors">
                      Human-centric greeting system converting <span className="text-[#4e24cf] font-bold">attributes into assets</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-4 items-end">
                 <p className="text-[9px] text-gray-500 uppercase font-bold tracking-[0.2em]">Strategic R&D</p>
                 <div className="flex gap-3">
                    <div className="bg-white/5 hover:bg-[#4e24cf]/20 p-3 rounded-xl transition-colors border border-white/10 group cursor-pointer">
                      <Cpu size={20} className="text-gray-400 group-hover:text-[#4e24cf]" />
                    </div>
                    <div className="bg-white/5 hover:bg-[#4e24cf]/20 p-3 rounded-xl transition-colors border border-white/10 group cursor-pointer">
                      <Gamepad2 size={20} className="text-gray-400 group-hover:text-[#4e24cf]" />
                    </div>
                 </div>
              </div>
            </div>
            <Gauge size={120} className="absolute -right-8 -bottom-8 text-[#4e24cf] opacity-[0.03] pointer-events-none" />
          </Card>

          
          <div className="lg:col-span-12 flex flex-wrap justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/5 mt-2 gap-4">
            {ecosystems.map((eco) => (
              <div key={eco.name} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <img 
                    src={eco.logo} 
                    alt={eco.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[9px] font-bold tracking-widest text-white uppercase group-hover:text-[#4e24cf] transition-colors">
                  {eco.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;