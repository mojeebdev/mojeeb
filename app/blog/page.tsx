import type { Metadata } from "next";
import PortfolioShell from "@/components/PortfolioShell";
import BlogTab from "@/components/BlogTab";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata.blog;

export default function BlogPage() {
  return (
    <PortfolioShell activeTab="blog">
      <BlogTab />
    </PortfolioShell>
  );
}