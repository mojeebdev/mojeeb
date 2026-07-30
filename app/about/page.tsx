import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { AboutRoute } from "@/components/RoutePage";
import { aboutPageJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

const description = "Learn about Mojeeb Titilayo, a Product Strategist, AI Product Engineer and System Architect building across AI, SaaS, developer tools and Web3.";

export const metadata: Metadata = {
  title: "About Mojeeb Titilayo",
  description,
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: "profile",
    title: "About Mojeeb Titilayo",
    description,
    url: `${BASE_URL}/about`,
    images: [{ url: "/mojeeb_headshot.png", width: 1086, height: 1448, alt: "Mojeeb Titilayo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mojeeb Titilayo",
    description,
    images: ["/mojeeb-editorial-og.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd} />
      <AboutRoute />
    </>
  );
}
