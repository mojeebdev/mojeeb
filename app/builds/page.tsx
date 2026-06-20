import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import BuildsTab from "@/components/BuildsTab";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata.builds;

export default function BuildsPage() {
  return (
    <PortfolioShell activeTab="builds">
      <BuildsTab />
    </PortfolioShell>
  );
}