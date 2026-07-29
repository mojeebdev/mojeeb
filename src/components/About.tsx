import { Eye, ShieldCheck, Zap, Terminal } from "lucide-react";

const ecosystems = [
  { name: "Ethereum", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
  { name: "Base", logo: "/base-logo.png" },
  { name: "Solana", logo: "/solana-sol-logo.png" },
  { name: "Polygon", logo: "/polygon-matic-logo.png" },
  { name: "Avalanche", logo: "/avalanche-avax-logo.png" },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#F9F6F2]">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <span className="text-[#5B2BFF] text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-[-0.04em] uppercase leading-none">
              How I <span className="text-gray-300 italic">Think.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-6">
          {/* Philosophy Card - Now full width on desktop (was col-span-7, now col-span-12) */}
          <div className="lg:col-span-12 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/30 rounded-[1.75rem] p-10 transition-all relative overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5B2BFF] via-[#5B2BFF]/50 to-transparent rounded-t-[1.75rem]" />
            <p className="text-[10px] font-black text-[#5B2BFF] uppercase tracking-[0.4em] mb-5">Core Belief</p>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-[-0.03em] mb-6 uppercase">
              Longevity is the<br />
              <span className="text-[#5B2BFF]">Ultimate Leverage.</span>
            </h3>
            <p className="text-gray-500 text-base italic border-l-2 border-[#5B2BFF]/30 pl-5 mb-8 leading-relaxed max-w-3xl">
              "I help teams design systems that grow deliberately — identifying structural blindspots before they become expensive problems."
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Eye size={13} className="text-[#5B2BFF]" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Growth Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-[#5B2BFF]" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Incentive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={13} className="text-[#5B2BFF]" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Vibe Coder</span>
              </div>
            </div>
          </div>

          {/* Ecosystem Bar */}
          <div className="lg:col-span-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-[1.75rem] px-8 py-6 shadow-sm">
            <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] mb-5">Ecosystem Experience</p>
            <div className="flex flex-wrap justify-between items-center gap-6">
              {ecosystems.map((eco) => (
                <div key={eco.name}
                  className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                  <img src={eco.logo} alt={eco.name} className="w-5 h-5 object-contain" />
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest group-hover:text-[#5B2BFF] transition-colors">
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