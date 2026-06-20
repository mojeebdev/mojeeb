import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import ContactTab from "@/components/ContactTab";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <PortfolioShell activeTab="contact">
      <ContactTab />
    </PortfolioShell>
  );
}