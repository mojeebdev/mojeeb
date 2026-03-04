import { Mail, MessageSquare, Network, TrendingUp, Users, X } from "lucide-react";

const Contact = () => {
  const social = [
    { icon: <Mail />, label: "Email", val: "mojeeb.eth@gmail.com", link: "mailto:mojeeb.eth@gmail.com" },
    { icon: <MessageSquare />, label: "Telegram", val: "@mojeebhq", link: "https://t.me/mojeebhq" },
    { icon: <X />, label: "X (Twitter)", val: "@mojeebeth", link: "https://x.com/mojeebeth" }
  ];

  return (
   <section id="contact" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-12 mb-12">
             <h2 className="text-5xl font-black text-white tracking-tighter">STRATEGIC <span className="text-gray-500">ACCESS.</span></h2>
          </div>
          
          <div className="md:col-span-7 space-y-4">
            {social.map(s => (
              <a href={s.link} target="_blank" key={s.label} className="flex items-center justify-between p-8 bg-[#111] border border-white/10 rounded-[2rem] group hover:border-[#4e24cf] transition-all">
                <div className="flex items-center gap-6">
                  <div className="text-gray-500 group-hover:text-[#4e24cf] transition-colors">{s.icon}</div>
                  <div>
                    <p className="text-white font-bold uppercase text-xs tracking-[0.2em]">{s.label}</p>
                    <p className="text-gray-500 font-mono text-sm">{s.val}</p>
                  </div>
                </div>
                <div className="text-[#4e24cf] opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </a>
            ))}
          </div>

          <div className="md:col-span-5 bg-[#4e24cf] p-10 rounded-[2.5rem] text-white flex flex-col justify-center">
             <h4 className="text-2xl font-black tracking-tight mb-8">CORE FOCUS AREAS</h4>
             <ul className="space-y-6">
                <li className="flex items-center gap-4 text-sm font-bold border-b border-white/10 pb-4 uppercase tracking-tighter"><Network size={16} /> Ecosystem Strategy</li>
                <li className="flex items-center gap-4 text-sm font-bold border-b border-white/10 pb-4 uppercase tracking-tighter"><TrendingUp size={16} /> Growth Systems</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-tighter"><Users size={16} /> Community Design</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
