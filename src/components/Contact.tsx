import { Mail, MessageSquare, X, Network, TrendingUp, Users, ArrowRight, Zap } from "lucide-react";

const social = [
  { icon: <Mail size={16} />, label: "Email", val: "hello@mojeeb.xyz", link: "mailto:hello@mojeeb.xyz" },
  { icon: <MessageSquare size={16} />, label: "Telegram", val: "@mojeebhq", link: "https://t.me/mojeebhq" },
  { icon: <X size={16} />, label: "X (Twitter)", val: "@mojeebeth", link: "https://x.com/mojeebeth" },
];

const services = [
  { icon: <Network size={14} />, label: "Ecosystem Strategy" },
  { icon: <TrendingUp size={14} />, label: "Growth Systems" },
  { icon: <Users size={14} />, label: "Community Design" },
  { icon: <Zap size={14} />, label: "Vibe Coding / AI Tools" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#F9F6F2]">
      <div className="container mx-auto max-w-6xl">

        {/* Hire Me Header - Keep this solid with gradient */}
        <div className="bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] rounded-[2rem] p-10 md:p-14 mb-6 relative overflow-hidden shadow-lg">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Available for Work</p>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-[-0.04em] uppercase leading-none">
                Let's Build<br />Something.
              </h2>
            </div>
            <a
              href="mailto:hello@mojeeb.xyz"
              className="group shrink-0 bg-white text-[#5B2BFF] px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/90 transition-all flex items-center gap-3 shadow-lg hover:scale-105 active:scale-95"
            >
              Hire Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contact + Services */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

          {/* Contact channels - Updated with transparency */}
          <div className="md:col-span-7 flex flex-col gap-3">
            {social.map((s) => (
              <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#5B2BFF]/40 rounded-[1.5rem] p-6 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center gap-5">
                  <div className="w-9 h-9 bg-[#5B2BFF]/10 border border-[#5B2BFF]/20 rounded-xl flex items-center justify-center text-[#5B2BFF] group-hover:bg-[#5B2BFF]/20 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em] mb-0.5">{s.label}</p>
                    <p className="text-gray-900 font-bold text-sm font-mono">{s.val}</p>
                  </div>
                </div>
                <span className="text-gray-300 group-hover:text-[#5B2BFF] transition-all group-hover:translate-x-1 transform text-lg">→</span>
              </a>
            ))}
          </div>

          {/* Services - Updated with transparency */}
          <div className="md:col-span-5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[1.75rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <p className="text-[9px] font-black text-[#5B2BFF] uppercase tracking-[0.4em] mb-6">What I Do</p>
            <ul className="flex flex-col gap-4 flex-1">
              {services.map((s) => (
                <li key={s.label}
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-none last:pb-0">
                  <div className="w-7 h-7 bg-[#5B2BFF]/10 rounded-lg flex items-center justify-center text-[#5B2BFF] shrink-0">
                    {s.icon}
                  </div>
                  <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{s.label}</span>
                </li>
              ))}
            </ul>

            {/* Availability */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[8px] text-gray-400 uppercase tracking-widest font-bold mb-1">Availability</p>
                <p className="text-[#5B2BFF] font-black text-sm uppercase tracking-tight">Open for Q1 '26</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B2BFF] animate-pulse" />
                <span className="text-[9px] text-gray-400 font-mono uppercase">Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;