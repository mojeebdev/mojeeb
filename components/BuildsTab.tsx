import BuildCard from "./BuildCard";
import CompactCard from "./CompactCard";
import { featuredBuilds, secondaryBuilds } from "@/lib/builds";

export default function BuildsTab() {
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
        Portfolio
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
          lineHeight: 1.1,
          marginBottom: 40,
        }}
      >
        Everything I've{" "}
        <em style={{ color: "var(--yellow-dark)" }}>shipped.</em>
      </h2>

      {/* Featured */}
      <div style={{ marginBottom: 48 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink4)",
            paddingBottom: 12,
            borderBottom: "1px solid var(--border)",
            marginBottom: 16,
          }}
        >
          Featured Builds
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {featuredBuilds.map((b) => (
            <BuildCard key={b.id} build={b} />
          ))}
        </div>
      </div>

      {/* Secondary */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink4)",
            paddingBottom: 12,
            borderBottom: "1px solid var(--border)",
            marginBottom: 16,
          }}
        >
          More Builds
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {secondaryBuilds.map((b) => (
            <CompactCard key={b.id} build={b} />
          ))}
        </div>
      </div>
    </div>
  );
}