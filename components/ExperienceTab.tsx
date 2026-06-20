export default function ExperienceTab() {
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
  };

  const experiences = [
    {
      company: "BlindspotLab",
      role: "Founder & AI-Native Developer",
      period: "Dec 2025 – Present",
      status: "active" as const,
      desc: "Productized build-as-a-service studio — \"You have the idea. We ship the product.\" Shipping AI + Web3 products solo at speed. 30+ products across AI, SaaS, and Web3 domains.",
      metric: null,
    },
    {
      company: "Taiku NFT",
      role: "Web3 Growth Strategist",
      period: "Past",
      status: null,
      desc: "Engineered viral GTM alignment and community activation systems resulting in exponential growth in 3.5 days.",
      metric: { num: "3 → 9,000+", lbl: "Followers in 3.5 days" },
    },
    {
      company: "SkylosChain",
      role: "Community & Content Strategist",
      period: "Past",
      status: null,
      desc: "Implemented scalable content systems and retention loops that transformed community activity within 14 days.",
      metric: { num: "5% → 95%", lbl: "Engagement rate" },
    },
    {
      company: "GX DAO · Crypto Family · EchelonHQ",
      role: "Strategist / Co-Founder",
      period: "Earlier",
      status: null,
      desc: "12+ years Web2 marketing, 4+ years Web3 strategy before pivoting to AI-native development. Former skit creator (500+ videos).",
      metric: null,
    },
  ];

  const capabilities = [
    { icon: "⚡", title: "Build", items: ["Full-Stack Development", "Smart Contracts", "AI Tool Integration", "Prompt Engineering", "API Design"] },
    { icon: "◎", title: "Design", items: ["UI/UX Design", "Design Systems", "Component Architecture", "Web3 DApp Design"] },
    { icon: "↗", title: "Grow", items: ["Community Building", "Content Strategy", "GTM Planning", "Build in Public"] },
  ];

  return (
    <div>
      <p style={S.sectionLabel}>Track Record</p>
      <h2 style={S.h2}>
        Experiences{" "}
        <em style={{ color: "var(--yellow-dark)" }}>Capabilities.</em>
      </h2>

      {/* Experience items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
        {experiences.map((e) => (
          <div
            key={e.company}
            style={{
              background: "var(--card)",
              border: `1px solid ${e.status === "active" ? "rgba(232,184,75,0.4)" : "var(--border)"}`,
              borderRadius: 14,
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 19,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                  }}
                >
                  {e.company}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.06em",
                    color: "var(--yellow-dark)",
                    marginTop: 2,
                  }}
                >
                  {e.role}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                {e.status === "active" && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "5px 11px",
                      borderRadius: 100,
                      background: "#EDFAF4",
                      color: "#1A7A45",
                      border: "1px solid #B4DEAD",
                      marginBottom: 4,
                    }}
                  >
                    <span
                      className="badge-dot-live"
                      style={{ width: 5, height: 5, borderRadius: "50%", background: "#1A7A45", display: "inline-block" }}
                    />
                    Active
                  </span>
                )}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.06em",
                    color: "var(--ink3)",
                    marginTop: 4,
                  }}
                >
                  {e.period}
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: "var(--ink2)", lineHeight: 1.65 }}>
              {e.desc}
            </p>
            {e.metric && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--yellow-dim)",
                  border: "1px solid rgba(232,184,75,0.3)",
                  borderRadius: 8,
                  padding: "6px 14px",
                  marginTop: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--yellow-dark)",
                  }}
                >
                  {e.metric.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink3)",
                  }}
                >
                  {e.metric.lbl}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Capabilities */}
      <p style={{ ...S.sectionLabel, marginBottom: 16 }}>Capabilities</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {capabilities.map((c) => (
          <div
            key={c.title}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 10 }}>{c.icon}</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: 8,
              }}
            >
              {c.title}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--ink3)",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              {c.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < c.items.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
