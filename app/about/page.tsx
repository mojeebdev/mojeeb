import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import AboutTab from "@/components/AboutTab";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <PortfolioShell activeTab="about">
      <AboutTab />
    </PortfolioShell>
  );
}