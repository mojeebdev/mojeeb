import { Code2, Layout, Rocket } from "lucide-react";

const capabilities = [
  { label: "Build", skills: ["AI Tools", "Smart Contracts", "Full-Stack"], icon: <Code2 size={12} /> },
  { label: "Design", skills: ["UI/UX", "System Design", "Figma"], icon: <Layout size={12} /> },
  { label: "Grow", skills: ["Community", "Content Strategy", "GTM"], icon: <Rocket size={12} /> },
];

export function CapabilitiesTicker() {
  
  const tickerContent = capabilities.flatMap((cap) => cap.skills);
  const items = [...tickerContent, ...tickerContent];

  return (
    <div className="overflow-hidden py-4 border-y border-gray-200 bg-white/30 backdrop-blur-sm w-full">
      <div className="flex gap-16 whitespace-nowrap animate-ticker">
        {items.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-3 shrink-0 text-[0.7rem] font-mono uppercase tracking-[0.1em] text-gray-500"
          >
            <span className="text-[#5B2BFF] text-[0.5rem]">◆</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}