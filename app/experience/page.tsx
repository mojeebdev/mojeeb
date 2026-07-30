import type { Metadata } from "next";
import { ExperienceRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Mojeeb Titilayo's product strategy, AI engineering, system architecture and Web3 product experience.",
  alternates: { canonical: `${BASE_URL}/experience` },
};

export default function ExperiencePage() {
  return <ExperienceRoute />;
}
