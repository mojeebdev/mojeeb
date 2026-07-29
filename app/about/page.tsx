import type { Metadata } from "next";
import { AboutRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Mojeeb Titilayo, AI Product Engineer, System Architect and Product Strategist based in Nigeria.",
  alternates: { canonical: `${BASE_URL}/about` },
};

export default function AboutPage() {
  return <AboutRoute />;
}
