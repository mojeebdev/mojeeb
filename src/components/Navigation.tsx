import { useState, useEffect, useMemo } from "react";
import { Menu, X, Home, User, Mail, PenTool, Zap, Briefcase, Cpu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "work", label: "Work", icon: Zap },
    { id: "blog", label: "Blog", icon: PenTool },
    { id: "experience", label: "XP", icon: Briefcase },
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
      {/* Logo */}
      <div className="fixed top-6 left-6 z-[60]">
        <button
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2.5"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 shadow-lg">
            <span className="text-white font-black text-sm">M</span>
          </div>
          <span className="text-[13px] font-black tracking-[-0.02em] text-gray-800 hidden sm:block uppercase">
            Mojeeb<span className="text-[#5B2BFF]">.</span>
          </span>
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className={`border px-2 py-1.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-lg"
            : "bg-white/50 backdrop-blur-sm border-gray-200/50"
        }`}>
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-200 text-[9px] font-black uppercase tracking-[0.15em] flex items-center gap-1.5 ${
                  activeSection === item.id
                    ? "text-[#5B2BFF] bg-[#5B2BFF]/10"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100/50"
                }`}
              >
                {activeSection === item.id && (
                  <div className="w-1 h-1 rounded-full bg-[#5B2BFF]" />
                )}
                {item.label}
              </button>
            ))}

            {/* Divider */}
            <div className="w-px h-4 bg-gray-200 mx-1" />

            {/* AI CTA - Main nav item */}
            <a 
              href="/ai" 
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] text-white px-4 py-2 rounded-full transition-all text-[9px] font-black uppercase tracking-[0.15em] shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <Cpu size={9} /> AI BUILDS
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Button */}
      <div className="fixed top-6 right-6 z-[60] md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 rounded-xl border bg-white/80 backdrop-blur-md flex items-center justify-center transition-all shadow-md ${
            isOpen ? "border-[#5B2BFF]" : "border-gray-200"
          }`}
        >
          {isOpen
            ? <X size={16} className="text-[#5B2BFF]" />
            : <Menu size={16} className="text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-6 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-4 text-2xl font-black uppercase tracking-[-0.02em] transition-all ${
              activeSection === item.id ? "text-[#5B2BFF]" : "text-gray-300 hover:text-gray-600"
            }`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <item.icon size={20} className={activeSection === item.id ? "text-[#5B2BFF]" : "text-gray-200"} />
            {item.label}
          </button>
        ))}

        {/* AI Link in Mobile Menu - More prominent */}
        <a 
          href="/ai" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 text-2xl font-black uppercase bg-gradient-to-r from-[#5B2BFF] to-[#4E24CF] bg-clip-text text-transparent hover:from-[#4E24CF] hover:to-[#5B2BFF] transition-all mt-4"
        >
          <Cpu size={22} className="text-[#5B2BFF]" /> AI BUILDS
        </a>

        {/* Divider before AI link */}
        <div className="w-24 h-px bg-gray-200 my-2" />

        <p className="absolute bottom-10 text-[9px] text-gray-300 font-mono uppercase tracking-[0.5em]">
          v.2026.03
        </p>
      </div>
    </>
  );
};

export default Navigation;