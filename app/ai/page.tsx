import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { AIRoute } from "@/components/RoutePage";
import { aiPageJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Product Engineering",
  description: "Mojeeb Titilayo's AI product engineering work across agents, SaaS, audits, prompt systems and developer workflows.",
  alternates: { canonical: `${BASE_URL}/ai` },
};

export default function AIPage() {
  return (
    <>
      <JsonLd data={aiPageJsonLd} />
      <AIRoute />
    </>
  );
}
