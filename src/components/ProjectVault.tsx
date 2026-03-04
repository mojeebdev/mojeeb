import { ExternalLink, Zap, Utensils, Target, Heart, Box, Gamepad2 } from "lucide-react";

const ProjectVault = () => {
  const projects = [
    {
      title: "Blindspot Lab",
      tagline: "Strategy Intelligence",
      description: "A Web3 AI Auditor designed to identify structural roadmap failures. Turning blind spots into leverage.",
      tech: ["Gemini AI", "Vercel", "Strategy"],
      link: "https://blindspotlab.xyz",
      icon: <Zap className="text-[#4e24cf]" size={20} />,
      size: "md:col-span-7" 
    },
    {
      title: "Whate",
      tagline: "Utility Engine",
      description: "Decision-fatigue solution with 10k+ meal suggestions. 2-click strategy for 9+ global personas.",
      tech: ["PWA", "UX Logic", "Global"],
      link: "https://whate.online",
      icon: <Utensils className="text-[#4e24cf]" size={20} />,
      size: "md:col-span-5" 
    },
    {
      title: "Trench Sniper",
      tagline: "Culture Translator",
      description: "Gamified educational terminal for crypto-vernacular. Bridging the gap between the trenches and retail.",
      tech: ["Gamification", "Web3 Culture"],
      link: "https://trench.mojeeb.xyz",
      icon: <Gamepad2 className="text-[#4e24cf]" size={20} />,
      size: "md:col-span-4" 
    },
    {
      title: "Dearly",
      tagline: "Personalization Layer",
      description: "Human-centric system transforming generic greetings into emotional assets through attribute mapping.",
      tech: ["Personalization", "Custom Logic"],
      link: "https://dearly.icu",
      icon: <Heart className="text-[#4e24cf]" size={20} />,
      size: "md:col-span-4"
    },
    {
      title: "Bearo",
      tagline: "Smart Infrastructure",
      description: "Full-stack NFT ecosystem featuring on-chain SVG generation and custom smart contract deployment.",
      tech: ["Solidity", "SVG", "On-Chain"],
      link: "https://bearo.mojeeb.xyz",
      icon: <Box className="text-[#4e24cf]" size={20} />,
      size: "md:col-span-4"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-[#4e24cf] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The Project Vault</span>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
            Proven <span className="text-gray-500 italic">Systems.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((p, i) => (
            <div key={i} className={`${p.size} bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] hover:border-[#4e24cf]/40 transition-all group`}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white leading-none mb-1">{p.title}</h3>
                <p className="text-[9px] text-[#4e24cf] uppercase font-bold tracking-widest">{p.tagline}</p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-[9px] font-bold text-gray-500 border border-white/5 px-3 py-1 rounded-full uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVault;
