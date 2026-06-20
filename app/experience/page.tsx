import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import ExperienceTab from "@/components/ExperienceTab";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata.experience;

export default function ExperiencePage() {
  return (
    <PortfolioShell activeTab="experience">
      <ExperienceTab />
    </PortfolioShell>
  );
}