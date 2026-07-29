import type { Metadata } from "next";
import { BuildsRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Builds",
  description: "Selected work and complete build record for Mojeeb Titilayo across AI, SaaS, developer tools, Web3 and experiments.",
  alternates: { canonical: `${BASE_URL}/builds` },
};

export default function BuildsPage() {
  return <BuildsRoute />;
}
