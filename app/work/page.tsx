import type { Metadata } from "next";
import { WorkRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected AI, SaaS, developer-tool and Web3 products designed and built by Mojeeb Titilayo.",
  alternates: { canonical: `${BASE_URL}/work` },
  openGraph: {
    title: "Selected Work — Mojeeb Titilayo",
    description: "Selected AI, SaaS, developer-tool and Web3 products designed and built by Mojeeb Titilayo.",
    url: `${BASE_URL}/work`,
  },
};

export default function WorkPage() {
  return <WorkRoute />;
}
