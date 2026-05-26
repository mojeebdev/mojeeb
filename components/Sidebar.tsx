"use client";

import Image from "next/image";
import Link from "next/link";

type Tab = "builds" | "about" | "experience" | "blog" | "ai" | "contact";

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const navItems: { id: Tab; icon: string; label: string }[] = [
  { id: "builds",     icon: "⬡", label: "Builds"                   },
  { id: "about",      icon: "◎", label: "About"                    },
  { id: "experience", icon: "◈", label: "Experience & Capabilities" },
  { id: "blog",       icon: "◻", label: "Blog"                     },
  { id: "ai",         icon: "⟁", label: "AI"                       },
  { id: "contact",    icon: "✉", label: "Contact"                   },
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside
      className="sidebar"
      style={{
        width: "var(--sidebar-w)",
        minWidth: "var(--sidebar-w)",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        padding: "40px 32px",
        zIndex: 10,
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Avatar */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid var(--yellow)",
            marginBottom: 20,
            background: "var(--yellow-dim)",
            flexShrink: 0,
          }}
        >
          <Image
            src="/mojeeb-toon.png"
            alt="Mojeeb Titilayo"
            width={80}
            height={80}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            priority
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            lineHeight: 1.1,
            marginBottom: 4,
          }}
        >
          Mojeeb<br />Titilayo
        </h1>

        {/* Role tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, margin: "8px 0 12px" }}>
          {["AI Native Dev", "Vibe Coder", "Web3 Strategist"].map((r) => (
            <span
              key={r}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink2)",
                background: "var(--card2)",
                border: "1px solid var(--border)",
                borderRadius: 100,
                padding: "4px 10px",
              }}
            >
              {r}
            </span>
          ))}
        </div>

        {/* Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.05em",
            color: "var(--ink3)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--yellow)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Lagos, Nigeria
        </div>

        {/* Bio */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13.5,
            fontWeight: 300,
            color: "var(--ink2)",
            lineHeight: 1.65,
            marginBottom: 24,
            paddingBottom: 24,
            borderBottom: "1px solid var(--border)",
          }}
        >
          &ldquo;I got rejected countless of times. I locked in to change things
          for better.&rdquo;
          <br />
          <br />
          Solo founder. Building AI and Web3 products under BlindspotLab. 20+
          shipped.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--border)",
            marginBottom: 24,
          }}
        >
          {[
            { num: "20+", lbl: "Shipped" },
            { num: "1B$",  lbl: "Dreams"  },
            { num: "∞",   lbl: "Ships"   },
          ].map((s, i) => (
            <div
              key={s.lbl}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "12px 0",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.03em",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: 3,
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink3)",
                }}
              >
                {s.lbl}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:mojeeb.eth@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink)",
            background: "var(--yellow)",
            border: "none",
            borderRadius: 10,
            padding: "13px 20px",
            cursor: "pointer",
            textDecoration: "none",
            marginBottom: 16,
            width: "100%",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--yellow-dark)";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--yellow)";
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
          }}
        >
          ✦ Work With Me
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: activeTab === item.id ? 600 : 500,
                color: activeTab === item.id ? "var(--ink)" : "var(--ink3)",
                padding: "10px 12px",
                borderRadius: 10,
                cursor: "pointer",
                background:
                  activeTab === item.id ? "var(--yellow-dim)" : "transparent",
                border: `1px solid ${activeTab === item.id ? "var(--yellow)" : "transparent"}`,
                textAlign: "left",
                width: "100%",
                transition: "all 0.18s",
              }}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Socials */}
      <div
        style={{
          display: "flex",
          gap: 8,
          paddingTop: 20,
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {[
          { href: "https://x.com/mojeebeth",       label: "𝕏 @mojeebeth" },
          { href: "https://github.com/mojeebdev",   label: "⌥ GitHub"     },
          { href: "https://youtube.com/@MojeebHQ", label: "▷ YouTube"    },
          { href: "https://blindspotlab.xyz",       label: "↗ Studio"     },
        ].map((s) => (
          <Link
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink2)",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "7px 11px",
              textDecoration: "none",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--yellow)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--border)")
            }
          >
            {s.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}