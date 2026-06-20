import Link from "next/link";

export default function AboutTab() {
  const S = {
    sectionLabel: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.15em",
      textTransform: "uppercase" as const,
      color: "var(--ink3)",
      marginBottom: 6,
    },
    h2: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(32px, 4vw, 44px)",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--ink)",
      lineHeight: 1.1,
      marginBottom: 40,
    },
    card: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 14,
      padding: 24,
    },
    cardLabel: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      letterSpacing: "0.15em",
      textTransform: "uppercase" as const,
      color: "var(--ink3)",
      marginBottom: 10,
    },
  };

  return (
    <div>
      <p style={S.sectionLabel}>Who I Am</p>
      <h2 style={S.h2}>
        About <em style={{ color: "var(--yellow-dark)" }}>Mojeeb.</em>
      </h2>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontStyle: "italic",
          fontWeight: 500,
          color: "var(--ink2)",
          lineHeight: 1.5,
          marginTop: -24,
          marginBottom: 32,
        }}
      >
        I build at the edge of thought.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {/* Core belief — wide */}
        <div style={{ ...S.card, gridColumn: "1 / -1" }}>
          <p style={S.cardLabel}>Core Belief</p>
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 17,
              fontStyle: "italic",
              fontWeight: 500,
              color: "var(--ink)",
              lineHeight: 1.5,
              padding: "16px 20px",
              borderLeft: "3px solid var(--yellow)",
              background: "var(--yellow-glow)",
              borderRadius: "0 10px 10px 0",
              margin: "0 0 16px",
            }}
          >
            &ldquo;Just start. What you don&rsquo;t learn is not part of your
            knowledge.&rdquo;
          </blockquote>
          <p
            style={{
              fontSize: 13.5,
              fontWeight: 300,
              color: "var(--ink2)",
              lineHeight: 1.7,
            }}
          >
            Self-taught builder. Started coding on wapka.mobi in 2014–15 — no
            formal CS, bootcamp. Just building. Spent 12+ years in Web2
            marketing, 4+ years in Web3 strategy, then pivoted to full-stack
            AI-native development. 30+ products shipped. Solo. Fast. Real use
            cases.
          </p>
        </div>

        {/* Hackathon win — wide */}
        <div
          style={{
            ...S.card,
            gridColumn: "1 / -1",
            background: "var(--yellow-glow)",
            border: "1px solid rgba(232,184,75,0.35)",
          }}
        >
          <p style={S.cardLabel}>Hackathon Win</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
                }}
              >
                ScopeAI — Content Creative Award
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  fontWeight: 300,
                  color: "var(--ink2)",
                  lineHeight: 1.7,
                  marginBottom: 12,
                }}
              >
                Winner at{" "}
                <strong style={{ fontWeight: 600, color: "var(--ink)" }}>
                  Build with Medo
                </strong>{" "}
                on Devpost — AI-Powered Scope of Work Generator built with
                deliberate prompt architecture.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  fontFamily: "var(--font-mono)",
                  fontSize: 8,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--yellow-dark)",
                  background: "var(--yellow-dim)",
                  border: "1px solid rgba(232,184,75,0.35)",
                  borderRadius: 100,
                  padding: "5px 12px",
                }}
              >
                Content Creative Award · Devpost
              </span>
            </div>
            <Link
              href="https://app-bqgzl028s6ip.appmedo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink)",
                background: "var(--yellow)",
                border: "1px solid var(--yellow)",
                borderRadius: 10,
                padding: "12px 18px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                alignSelf: "center",
              }}
            >
              View ScopeAI ↗
            </Link>
          </div>
        </div>

        {/* Education */}
        <div style={S.card}>
          <p style={S.cardLabel}>Education</p>
          {[
            { icon: "🎓", title: "B.A. History (Education)", sub: "University of Ilorin · Nigeria" },
            { icon: "🤖", title: "11× Anthropic Academy Certs", sub: "AI Fluency · Prompt Engineering" },
            { icon: "📱", title: "Self-Taught Developer", sub: "Since 2014 · wapka.mobi → Production" },
          ].map((e) => (
            <div
              key={e.title}
              style={{
                display: "flex",
                gap: 16,
                padding: "14px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "var(--yellow-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                {e.icon}
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)", marginBottom: 2 }}>
                  {e.title}
                </div>
                <div style={{ fontSize: 12, color: "var(--ink3)", fontWeight: 300 }}>
                  {e.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DAETO */}
        <div style={S.card}>
          <p style={S.cardLabel}>Philosophy — DAETO</p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 700,
              color: "var(--ink)",
              marginBottom: 16,
            }}
          >
            How I build everything.
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["D", "Discovery"],
              ["A", "Approach"],
              ["E", "Execution"],
              ["T", "Tracking"],
              ["O", "Optimization"],
            ].map(([letter, word]) => (
              <div key={letter} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--yellow-dark)",
                    minWidth: 22,
                  }}
                >
                  {letter}
                </span>
                <span style={{ fontSize: 13, color: "var(--ink2)" }}>{word}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack — wide */}
        <div style={{ ...S.card, gridColumn: "1 / -1" }}>
          <p style={S.cardLabel}>Tech Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 4 }}>
            {[
              { label: "Next.js 15", yellow: true },
              { label: "TypeScript", yellow: true },
              { label: "Prompt Engineering", yellow: true },
              { label: "Claude API", yellow: true },
              { label: "Gemini API", yellow: true },
              { label: "Supabase", yellow: false },
              { label: "Prisma", yellow: false },
              { label: "Vercel", yellow: false },
              { label: "Tailwind CSS", yellow: false },
              { label: "Solidity", yellow: false },
              { label: "Wagmi / Viem", yellow: false },
              { label: "Base · Starknet", yellow: false },
              { label: "NextAuth v5", yellow: false },
              { label: "Python", yellow: false },
              { label: "FastAPI", yellow: false },
              { label: "Claude Code", yellow: false },
            ].map((t) => (
              <span
                key={t.label}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.06em",
                  color: t.yellow ? "var(--yellow-dark)" : "var(--ink2)",
                  background: t.yellow ? "var(--yellow-dim)" : "var(--card2)",
                  border: `1px solid ${t.yellow ? "rgba(232,184,75,0.35)" : "var(--border)"}`,
                  borderRadius: 7,
                  padding: "6px 12px",
                }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
