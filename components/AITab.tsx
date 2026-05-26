import CompactCard from "./CompactCard";
import { builds } from "@/lib/builds";

const aiBuilds = ["roasturl", "arcaprompt", "promptrank", "sitehook", "dearly", "directorx"];

export default function AITab() {
  const aiProducts = builds.filter((b) => aiBuilds.includes(b.id));

  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--ink3)",
          marginBottom: 6,
        }}
      >
        AI Layer
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        AI-Native{" "}
        <em style={{ color: "var(--yellow-dark)" }}>Builds.</em>
      </h2>

      <p
        style={{
          fontSize: 13.5,
          fontWeight: 300,
          color: "var(--ink2)",
          lineHeight: 1.7,
          marginBottom: 32,
        }}
      >
        Prompt engineering is a core stack component in every build — not just LLM
        integration. These are the AI-powered products I've shipped, each
        with deliberate prompting architecture.
      </p>

      {/* AI Stack */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--ink3)",
          marginBottom: 12,
        }}
      >
        AI Stack
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
        {[
          "Claude API",
          "Gemini 2.5 Pro",
          "OpenRouter",
          "Prompt Engineering",
          "LLM Integration",
          "11× Anthropic Certs",
          "RAG",
          "Streaming AI",
        ].map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.06em",
              background: "#F0EDFF",
              color: "#5B3FCC",
              border: "1px solid #C4B8F5",
              borderRadius: 8,
              padding: "6px 13px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* AI Products grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {aiProducts.map((b) => (
          <CompactCard key={b.id} build={b} />
        ))}
      </div>

      {/* Certs card */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 14,
          padding: 24,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ink3)",
            marginBottom: 12,
          }}
        >
          Certifications
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {[
            { label: "Anthropic Academy × 11", yellow: true },
            { label: "AI Fluency", yellow: false },
            { label: "Prompt Engineering", yellow: false },
            { label: "LLM Integration", yellow: false },
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
  );
}
