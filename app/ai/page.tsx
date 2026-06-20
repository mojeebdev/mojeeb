import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import AITab from "@/components/AITab";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata.ai;

export default function AIPage() {
  return (
    <PortfolioShell activeTab="ai">
      <AITab />
    </PortfolioShell>
  );
}