import { useState, useEffect, useMemo } from "react";
import { Menu, X, Home, User, Mail, PenTool, Zap, Briefcase, Circle } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "work", label: "Work", icon: Zap },
    { id: "experience", label: "XP", icon: Briefcase },
    { id: "blog", label: "Blog", icon: PenTool },
    { id: "contact", label: "Contact", icon: Mail },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* ── LOGO ── */}
      <div className="fixed top-6 left-6 z-[60]">
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2.5"
        >
          <div className="w-8 h-8 bg-[#4e24cf] rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_20px_rgba(78,36,207,0.4)] overflow-hidden">
            <img src="/lovable-uploads/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
          </div>
          <span className="text-[13px] font-black tracking-[-0.02em] text-white hidden sm:block uppercase">
            Mojeeb<span className="text-[#4e24cf]">.</span>
          </span>
        </button>
      </div>

      {/* ── DESKTOP NAV ── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className={`border px-2 py-1.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
            : "bg-black/30 backdrop-blur-xl border-white/5"
        }`}>
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-200 text-[9px] font-black uppercase tracking-[0.15em] flex items-center gap-1.5 ${
                  activeSection === item.id
                    ? "text-[#4e24cf] bg-[#4e24cf]/10"
                    : "text-white/30 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeSection === item.id && (
                  <Circle className="w-1 h-1 fill-[#4e24cf] text-[#4e24cf]" />
                )}
                {item.label}
              </button>
            ))}

            {/* Divider */}
            <div className="w-px h-4 bg-white/10 mx-1" />

            {/* AI CTA — prominent */}
            <a href="/ai"
              className="flex items-center gap-1.5 bg-[#4e24cf] hover:bg-[#6d3cf7] text-white px-4 py-2 rounded-full transition-all text-[9px] font-black uppercase tracking-[0.15em] shadow-[0_0_15px_rgba(78,36,207,0.4)]">
              <Zap size={9} /> Builds
            </a>
          </div>
        </div>
      </nav>

      {/* ── MOBILE BUTTON ── */}
      <div className="fixed top-6 right-6 z-[60] md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 rounded-xl border bg-black/60 backdrop-blur-md flex items-center justify-center transition-all ${
            isOpen ? "border-[#4e24cf] rotate-90" : "border-white/10"
          }`}
        >
          {isOpen
            ? <X size={16} className="text-[#4e24cf]" />
            : <Menu size={16} className="text-white" />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={`fixed inset-0 z-50 bg-black/97 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-6 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-4 text-2xl font-black uppercase tracking-[-0.02em] transition-all ${
              activeSection === item.id ? "text-[#4e24cf]" : "text-white/30 hover:text-white"
            }`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <item.icon size={20} className={activeSection === item.id ? "text-[#4e24cf]" : "text-white/15"} />
            {item.label}
          </button>
        ))}

        <a href="/ai" onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 text-2xl font-black uppercase text-[#4e24cf] hover:text-[#9d6fff] transition-colors mt-2">
          <Zap size={20} /> Vibe Builds
        </a>

        <p className="absolute bottom-10 text-[9px] text-white/10 font-mono uppercase tracking-[0.5em]">
          v.2026.03
        </p>
      </div>
    </>
  );
};

export default Navigation;