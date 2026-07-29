import { Users, Brain, Handshake, Cpu, Network } from "lucide-react";

const coreSkills = [
  {
    title: "Growth Architecture",
    icon: <Users size={20} />,
    desc: "Designing incentive structures that drive participation and long-term user retention across Web3 ecosystems.",
  },
  {
    title: "Systemic Logic",
    icon: <Brain size={20} />,
    desc: "Building persona-based decision frameworks and custom logic engines for complex datasets and protocols.",
  },
  {
    title: "Strategic Partnerships",
    icon: <Handshake size={20} />,
    desc: "Structuring high-value alignment across ETH, Solana, and Base ecosystems that compounds over time.",
  },
];

const tags = ["Base", "Solana", "ETH", "DAOs", "Community", "AI Tools", "GTM", "Content"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#F9F6F2]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[#5B2BFF] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              Intelligence Layer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-[-0.04em] uppercase leading-none">
              Capabilities <span className="text-gray-300 italic">&amp; Focus.</span>
            </h2>
          </div>
        </div>

        {/* Core Skills Grid - UPDATED with transparency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {coreSkills.map((s, i) => (
            <div key={i}
              className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/30 rounded-[1.75rem] p-8 transition-all group shadow-sm hover:shadow-md">
              <div className="w-10 h-10 bg-[#5B2BFF]/10 border border-[#5B2BFF]/20 rounded-xl flex items-center justify-center text-[#5B2BFF] mb-6 group-hover:bg-[#5B2BFF]/20 group-hover:scale-110 transition-all">
                {s.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* Full-stack strategy - UPDATED with transparency */}
          <div className="md:col-span-8 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/30 rounded-[1.75rem] p-8 flex items-center gap-8 group transition-all shadow-sm hover:shadow-md">
            <div className="bg-[#5B2BFF]/10 border border-[#5B2BFF]/20 p-4 rounded-2xl text-[#5B2BFF] shrink-0 hidden md:flex group-hover:bg-[#5B2BFF]/20 transition-colors">
              <Cpu size={28} className="group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div>
              <p className="text-[9px] font-black text-[#5B2BFF] uppercase tracking-[0.3em] mb-2">Full-Stack Strategy</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Developing execution frameworks that scale. I focus on internal logic errors and structural blindspots that prevent systems — whether food apps or blockchain protocols — from reaching longevity.
              </p>
            </div>
          </div>

          {/* Ecosystem tags - Keep this solid with gradient (looks great already) */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#5B2BFF] to-[#4E24CF] rounded-[1.75rem] p-8 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(91,43,255,0.3)] transition-all">
            <Network size={32} className="text-white/30 mb-4" />
            <div>
              <p className="text-white/70 font-black text-[9px] uppercase tracking-[0.3em] mb-4">Ecosystem Context</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag}
                    className="text-[9px] font-black bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-white uppercase tracking-widest transition-colors cursor-default backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;