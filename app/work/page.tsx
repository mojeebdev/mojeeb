import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { WorkRoute } from "@/components/RoutePage";
import { workPageJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

const description = "Selected AI, SaaS, developer-tool and Web3 products showing Mojeeb Titilayo's product strategy, system architecture and engineering work.";

export const metadata: Metadata = {
  title: "Selected Work",
  description,
  alternates: { canonical: `${BASE_URL}/work` },
  openGraph: {
    title: "Selected Work — Mojeeb Titilayo",
    description,
    url: `${BASE_URL}/work`,
    type: "website",
    images: [{ url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: "Selected work by Mojeeb Titilayo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work — Mojeeb Titilayo",
    description,
    images: ["/mojeeb-editorial-og.jpg"],
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={workPageJsonLd} />
      <WorkRoute />
    </>
  );
}
