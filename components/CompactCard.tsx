import Link from "next/link";
import Image from "next/image";
import type { Build, BuildStatus } from "@/lib/builds";

const statusConfig: Record<BuildStatus, { label: string; bg: string; text: string; border: string; pulse?: boolean }> = {
  live:      { label: "Live",      bg: "#EDFAF4", text: "#1A7A45", border: "#B4DEAD", pulse: true },
  building:  { label: "Building",  bg: "#FFF8E7", text: "#8A6210", border: "#F0D88A", pulse: true },
  paused:    { label: "Paused",    bg: "#F5F5F5", text: "#6B6B6B", border: "#D0D0D0" },
  hold:      { label: "On Hold",   bg: "#F5F5F5", text: "#6B6B6B", border: "#D0D0D0" },
  hackathon: { label: "Hackathon", bg: "#F0EDFF", text: "#5B3FCC", border: "#C4B8F5" },
};

export default function CompactCard({ build }: { build: Build }) {
  const cfg = statusConfig[build.status];

  const inner = (
    <>
      {/* Head */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {build.logo ? (
            <div style={{
              width: 36, height: 36, borderRadius: 9, overflow: "hidden",
              border: "1px solid var(--border)", background: "var(--card2)", flexShrink: 0,
            }}>
              <Image
                src={build.logo} alt={`${build.name} logo`}
                width={36} height={36}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                unoptimized
              />
            </div>
          ) : (
            <div style={{
              width: 36, height: 36, borderRadius: 9,
              background: "var(--yellow-dim)", border: "1px solid rgba(232,184,75,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--yellow-dark)",
            }}>
              {build.name.charAt(0)}
            </div>
          )}
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
              letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1,
            }}>
              {build.name}
            </div>
            {build.url && (
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--yellow-dark)",
                letterSpacing: "0.04em", marginTop: 4, opacity: 0.7,
              }}>
                {build.url.replace("https://", "")}
              </div>
            )}
          </div>
        </div>

        {/* Badge */}
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em",
          textTransform: "uppercase", padding: "4px 10px", borderRadius: 100,
          background: cfg.bg, color: cfg.text, border: `1px solid ${cfg.border}`,
          whiteSpace: "nowrap", flexShrink: 0,
          boxShadow: "0 1px 0 0 rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255,0.25)",
        }}>
          {cfg.pulse && (
            <span className="badge-dot-live" style={{
              width: 4, height: 4, borderRadius: "50%",
              background: cfg.text, display: "inline-block",
            }} />
          )}
          {cfg.label}
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)", marginBottom: 12 }} />

      {/* Tagline */}
      <div style={{
        fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink2)",
        fontWeight: 300, lineHeight: 1.6, marginBottom: 16, flexGrow: 1,
      }}>
        {build.tagline}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {build.tech.slice(0, 3).map((t) => (
          <span key={t} style={{
            fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.06em",
            color: "var(--ink2)", background: "var(--card2)",
            border: "1px solid var(--border)", borderRadius: 5, padding: "3px 8px",
          }}>
            {t}
          </span>
        ))}
      </div>
    </>
  );

  const sharedStyle = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: "20px 22px",
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    boxSizing: "border-box" as const,
  };

  return build.url ? (
    <Link
      href={build.url} target="_blank" rel="noopener noreferrer"
      className="card-compact"
      style={{ ...sharedStyle, color: "inherit", textDecoration: "none" }}
    >
      {inner}
    </Link>
  ) : (
    <div className="card-compact" style={sharedStyle}>
      {inner}
    </div>
  );
}