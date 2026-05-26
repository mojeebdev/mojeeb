import Link from "next/link";
import { Mail, MessageSquare, ArrowRight, Cpu, Network, TrendingUp, Zap } from "lucide-react";

const social = [
  { icon: <Mail size={16} />,           label: "Email",      val: "mojeeb.eth@gmail.com", link: "mailto:mojeeb.eth@gmail.com" },
  { icon: <MessageSquare size={16} />,  label: "Telegram",   val: "@mojeebeth",            link: "https://t.me/mojeebeth"      },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.742-8.878L1.254 2.25H8.08l4.26 5.633 5.904-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label: "X (Twitter)",
    val: "@mojeebeth",
    link: "https://x.com/mojeebeth",
  },
];

const services = [
  { icon: <Cpu size={14} />,        label: "AI-Native Product Builds"   },
  { icon: <Network size={14} />,    label: "Web3 Strategy & Systems"    },
  { icon: <TrendingUp size={14} />, label: "Growth Architecture"        },
  { icon: <Zap size={14} />,        label: "Vibe Coding / Full-Stack"   },
];

export default function ContactTab() {
  return (
    <div>
      {/* Hero CTA banner */}
      <div
        style={{
          background: "var(--yellow)",
          borderRadius: 24,
          padding: "40px 48px",
          marginBottom: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 240,
            height: 240,
            background: "rgba(255,255,255,0.15)",
            borderRadius: "50%",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            position: "relative",
            zIndex: 1,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(10,10,8,0.5)",
                marginBottom: 8,
              }}
            >
              Available Now
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              Let's Build<br />Something.
            </h2>
          </div>

          <Link
            href="mailto:mojeeb.eth@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--ink)",
              color: "#fff",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "14px 24px",
              borderRadius: 100,
              textDecoration: "none",
              flexShrink: 0,
              transition: "transform 0.15s, opacity 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            Hire Me <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Bottom grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: 12,
        }}
      >
        {/* Social links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {social.map((s) => (
            <Link
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 18,
                padding: "20px 24px",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--yellow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: "var(--yellow-dim)",
                    border: "1px solid rgba(232,184,75,0.25)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--yellow-dark)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ink3)",
                      marginBottom: 2,
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--ink)",
                    }}
                  >
                    {s.val}
                  </p>
                </div>
              </div>
              <span style={{ color: "var(--ink4)", fontSize: 18 }}>→</span>
            </Link>
          ))}
        </div>

        {/* What I Build */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--yellow-dark)",
              marginBottom: 24,
            }}
          >
            What I Build
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
            {services.map((s, i) => (
              <li
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: i < services.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    background: "var(--yellow-dim)",
                    border: "1px solid rgba(232,184,75,0.2)",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--yellow-dark)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--ink2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Status */}
          <div
            style={{
              marginTop: 20,
              paddingTop: 20,
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 8,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--ink4)",
                  marginBottom: 4,
                }}
              >
                Status
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--yellow-dark)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Open for Work
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                className="badge-dot-live"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  color: "var(--ink3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}