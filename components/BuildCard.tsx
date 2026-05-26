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

function Badge({ status }: { status: BuildStatus }) {
  const cfg = statusConfig[status];
  return (
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
        background: cfg.bg,
        color: cfg.text,
        border: `1px solid ${cfg.border}`,
        whiteSpace: "nowrap",
        flexShrink: 0,
        boxShadow: "0 1px 0 0 rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255,0.25)",
      }}
    >
      {cfg.pulse && (
        <span
          className={cfg.pulse ? "badge-dot-live" : ""}
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: cfg.text,
            display: "inline-block",
          }}
        />
      )}
      {cfg.label}
    </span>
  );
}

export default function BuildCard({ build }: { build: Build }) {
  return (
    <article
      className="card-featured"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 18,
        padding: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Head */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 22,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {build.logo && (
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--card2)",
                flexShrink: 0,
              }}
            >
              <Image
                src={build.logo}
                alt={`${build.name} logo`}
                width={44}
                height={44}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                unoptimized
              />
            </div>
          )}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              {build.name}
            </div>
            {build.url && (
              <Link
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--yellow-dark)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "block",
                  marginTop: 4,
                  opacity: 0.8,
                }}
              >
                {build.url.replace("https://", "")} ↗
              </Link>
            )}
          </div>
        </div>
        <Badge status={build.status} />
      </div>

      {/* Tagline */}
      {build.tagline && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 400,
            color: "var(--ink2)",
            lineHeight: 1.5,
            marginBottom: build.problem ? 0 : 20,
          }}
        >
          {build.tagline}
        </p>
      )}

      {/* Divider */}
      {(build.problem || build.idea || build.stats) && (
        <div style={{ height: 1, background: "var(--border)", margin: "22px 0" }} />
      )}

      {/* Problem */}
      {build.problem && (
        <>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink3)",
              marginBottom: 7,
            }}
          >
            Problem
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 19,
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--ink)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: 14,
              paddingLeft: 14,
              borderLeft: "2px solid var(--yellow)",
            }}
          >
            &ldquo;{build.problem}&rdquo;
          </p>
        </>
      )}

      {/* Idea */}
      {build.idea && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13.5,
            fontWeight: 300,
            color: "var(--ink2)",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {build.idea}
        </p>
      )}

      {/* Stats */}
      {build.stats && build.stats.length > 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {build.stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "var(--card2)",
                border: "1px solid var(--border)",
                borderRadius: 100,
                padding: "6px 13px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink3)",
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  width: 1,
                  height: 10,
                  background: "var(--border-dk)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Bottom: tech + x + arrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {build.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.06em",
                color: "var(--ink2)",
                background: "var(--card2)",
                border: "1px solid var(--border)",
                borderRadius: 5,
                padding: "4px 9px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          {build.xHandle && (
            <Link
              href={`https://x.com/${build.xHandle.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--ink3)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {build.xHandle}
            </Link>
          )}
          {build.url && (
            <Link
              href={build.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 30,
                height: 30,
                border: "1px solid var(--border)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink3)",
                textDecoration: "none",
                fontSize: 13,
                transition: "all 0.15s",
              }}
            >
              ↗
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}