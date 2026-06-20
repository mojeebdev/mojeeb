"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Read Before It's Too Late: The 2026 Creator Systems",
    desc: "Talent isn't enough anymore. Exploring the Top 5 Creator Packs required to survive the 2026 barrier to entry.",
    link: "https://x.com/BlindspotLab/status/2009497216109695467?s=20",
    tag: "Strategy",
    featured: true,
    wide: true,
  },
  {
    title: "The Subtle Act of Not Giving a Fvck",
    desc: "Foundations of community building through Emotional Intelligence.",
    link: "https://tmojeeb.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-31043b5160aa",
    tag: "Community",
    featured: false,
    wide: false,
  },
  {
    title: "The 2026 Product Blueprint",
    desc: "Strategic deep dive into the next wave of integrated ecosystem design.",
    link: "https://x.com/BlindspotLab/status/2009997538267435511?s=20",
    tag: "Research",
    featured: false,
    wide: false,
  },
  {
    title: "9k Followers & The Mistake After",
    desc: "Growth campaign deconstruction: what reshaped my strategy.",
    link: "https://x.com/BlindspotLab/status/1971794428789461365",
    tag: "Case Study",
    featured: false,
    wide: false,
  },
  {
    title: "Growth Hack: FEEDBACK",
    desc: "Turn raw input into a growth engine for your protocol.",
    link: "https://tmojeeb.medium.com/the-subtle-act-of-not-giving-a-fvck-about-your-community-community-building-6afe90b633f4",
    tag: "Growth",
    featured: false,
    wide: false,
  },
];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  Strategy:    { bg: "rgba(232,184,75,0.1)",  text: "#C99A2E", border: "rgba(232,184,75,0.3)" },
  Community:   { bg: "rgba(52,211,153,0.08)", text: "#059669", border: "rgba(52,211,153,0.2)" },
  Research:    { bg: "rgba(56,189,248,0.08)", text: "#0284C7", border: "rgba(56,189,248,0.2)" },
  "Case Study":{ bg: "rgba(251,191,36,0.08)", text: "#D97706", border: "rgba(251,191,36,0.2)" },
  Growth:      { bg: "rgba(251,113,133,0.08)", text: "#E11D48", border: "rgba(251,113,133,0.2)" },
};

export default function BlogTab() {
  const cardBase: React.CSSProperties = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 18,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",
    minHeight: 180,
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 40,
          paddingBottom: 20,
          borderBottom: "1px solid var(--border)",
        }}
      >
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
            Intelligence Feed
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            Featured{" "}
            <em style={{ color: "var(--ink4)" }}>Posts.</em>
          </h2>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink4)",
          }}
        >
          ✦ {posts.length} articles
        </div>
      </div>

      {/* Bento grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {posts.map((post, i) => {
          const tag = tagColors[post.tag] ?? { bg: "var(--card2)", text: "var(--ink3)", border: "var(--border)" };
          const colSpan = post.wide
            ? "span 12"
            : i === 1 || i === 2
            ? "span 4"
            : "span 4";

          return (
            <Link
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...cardBase,
                gridColumn: post.wide ? "span 12" : "span 4",
                borderColor: post.featured ? "rgba(232,184,75,0.25)" : "var(--border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--yellow)";
                el.style.boxShadow = "0 4px 24px rgba(232,184,75,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = post.featured ? "rgba(232,184,75,0.25)" : "var(--border)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Featured glow */}
              {post.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    background: "rgba(232,184,75,0.06)",
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 20,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: tag.text,
                    background: tag.bg,
                    border: `1px solid ${tag.border}`,
                    borderRadius: 100,
                    padding: "4px 10px",
                  }}
                >
                  {post.tag}
                </span>
                <ArrowUpRight
                  size={15}
                  style={{ color: "var(--ink4)", flexShrink: 0 }}
                />
              </div>

              {/* Content */}
              <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: post.featured ? 22 : 16,
                    fontWeight: 700,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    color: "var(--ink3)",
                    lineHeight: 1.6,
                  }}
                >
                  {post.desc}
                </p>
              </div>

              {/* Read indicator */}
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--yellow)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    fontWeight: 700,
                    color: "var(--ink4)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Read Article
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Follow CTA */}
      <div
        style={{
          background: "var(--yellow-dim)",
          border: "1px dashed rgba(232,184,75,0.4)",
          borderRadius: 14,
          padding: 28,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 600,
            color: "var(--ink)",
            marginBottom: 8,
          }}
        >
          More writing dropping soon.
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--ink2)",
            fontWeight: 300,
            marginBottom: 16,
          }}
        >
          Follow on X for live updates.
        </p>
        <Link
          href="https://x.com/tmojeeb"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink)",
            background: "var(--yellow)",
            borderRadius: 10,
            padding: "12px 20px",
            textDecoration: "none",
          }}
        >
          Follow @tmojeeb ↗
        </Link>
      </div>
    </div>
  );
}