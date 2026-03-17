import { Code2, Layout, Rocket } from "lucide-react";

const capabilities = [
  { label: "Build", skills: ["AI Tools", "Smart Contracts", "Full-Stack"], icon: <Code2 size={12} /> },
  { label: "Design", skills: ["UI/UX", "System Design", "Figma"], icon: <Layout size={12} /> },
  { label: "Grow", skills: ["Community", "Content Strategy", "GTM"], icon: <Rocket size={12} /> },
];

export function CapabilitiesTicker() {
  
  const tickerContent = capabilities.flatMap((cap) => [
    ...cap.skills,
  ]);

  
  const items = [...tickerContent, ...tickerContent];

  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{ 
        borderColor: "var(--border)", 
        background: "var(--bg-2)" 
      }}
      aria-hidden="true"
    >
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite" }} 
      >
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-3 shrink-0"
            style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.7rem", 
              letterSpacing: "0.1em", 
              textTransform: "uppercase", 
              color: "var(--text-tertiary)" 
            }}
          >
            {/* Using a diamond icon as your separator */}
            <span style={{ color: "var(--accent)", fontSize: "0.5rem" }}>◆</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
