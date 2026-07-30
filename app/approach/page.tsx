import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { ApproachRoute } from "@/components/RoutePage";
import { approachPageJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

const description = "How Mojeeb Titilayo approaches product discovery, positioning, system architecture, execution, tracking and optimisation through the DAETO framework.";

export const metadata: Metadata = {
  title: "Product Approach and DAETO Framework",
  description,
  alternates: { canonical: `${BASE_URL}/approach` },
  openGraph: {
    title: "Product Approach and DAETO Framework — Mojeeb Titilayo",
    description,
    url: `${BASE_URL}/approach`,
    type: "article",
    images: [{ url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: "Mojeeb Titilayo's DAETO product framework" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Approach and DAETO Framework — Mojeeb Titilayo",
    description,
    images: ["/mojeeb-editorial-og.jpg"],
  },
};

export default function ApproachPage() {
  return (
    <>
      <JsonLd data={approachPageJsonLd} />
      <ApproachRoute />
    </>
  );
}
