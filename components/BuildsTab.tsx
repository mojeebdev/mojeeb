import Link from "next/link";
import BuildCard from "./BuildCard";
import CompactCard from "./CompactCard";
import {
  featuredBuilds,
  secondaryBuilds,
  vibeathonBuilds,
  vibeathonHubUrl,
  featuredHackathonBuilds,
  secondaryHackathonBuilds,
} from "@/lib/builds";

const sectionLabelStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: 9,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--ink4)",
  paddingBottom: 12,
  borderBottom: "1px solid var(--border)",
  marginBottom: 16,
};

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
        Everything I&apos;ve{" "}
        <em style={{ color: "var(--yellow-dark)" }}>shipped.</em>
      </h2>

      {/* Featured */}
      <div style={{ marginBottom: 48 }}>
        <p style={sectionLabelStyle}>Featured Builds</p>
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
      <div style={{ marginBottom: 48 }}>
        <p style={sectionLabelStyle}>More Builds</p>
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

      {/* Vibeathon */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            paddingBottom: 12,
            borderBottom: "1px solid var(--border)",
            marginBottom: 16,
          }}
        >
          <p style={{ ...sectionLabelStyle, marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}>
            Vibeathon
          </p>
          <Link
            href={vibeathonHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--yellow-dark)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            30 Days Hub ↗
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {vibeathonBuilds.map((b) => (
            <CompactCard key={b.id} build={b} />
          ))}
        </div>
      </div>

      {/* Hackathons */}
      <div>
        <p style={sectionLabelStyle}>Hackathons</p>
        {featuredHackathonBuilds.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            {featuredHackathonBuilds.map((b) => (
              <BuildCard key={b.id} build={b} featured />
            ))}
          </div>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {secondaryHackathonBuilds.map((b) => (
            <CompactCard key={b.id} build={b} />
          ))}
        </div>
      </div>
    </div>
  );
}