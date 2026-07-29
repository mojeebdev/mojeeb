"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Home", "/"],
  ["Selected Work", "/work"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Approach", "/approach"],
  ["Contact", "/contact"],
] as const;

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const panelControls = Array.from(menuPanel.current?.querySelectorAll<HTMLElement>("a[href]") ?? []);
    const focusable = menuButton.current ? [menuButton.current, ...panelControls] : panelControls;
    panelControls[0]?.focus();
    const background = [document.querySelector("main"), document.querySelector("footer")].filter((element): element is HTMLElement => element instanceof HTMLElement);

    document.body.style.overflow = "hidden";
    background.forEach((element) => { element.setAttribute("inert", ""); element.setAttribute("aria-hidden", "true"); });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab" && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      background.forEach((element) => { element.removeAttribute("inert"); element.removeAttribute("aria-hidden"); });
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButton.current?.focus());
  };

  return (
    <header className="floating-nav">
      <Link href="/" className="floating-nav__name" aria-label="Mojeeb home">Mojeeb</Link>
      <button ref={menuButton} type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="site-menu">
        <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
        <span className="menu-glyph" aria-hidden="true"><i /><i /><i /></span>
      </button>
      {menuOpen && (
        <div id="site-menu" ref={menuPanel} className="site-menu" role="dialog" aria-modal="true" aria-label="Site navigation">
          <nav aria-label="Primary">
            {links.map(([label, href]) => (
              <Link key={`${label}-${href}`} href={href} onClick={closeMenu} aria-current={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined}>{label}</Link>
            ))}
          </nav>
          <div className="site-menu__socials" aria-label="Social links">
            <a href="https://x.com/MojeebMotion" target="_blank" rel="noopener noreferrer">X &#8599;</a>
            <a href="https://www.linkedin.com/in/tmojeeb" target="_blank" rel="noopener noreferrer">LinkedIn &#8599;</a>
            <a href="https://github.com/mojeebdev" target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>
          </div>
        </div>
      )}
    </header>
  );
}
