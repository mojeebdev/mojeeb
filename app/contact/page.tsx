import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { ContactRoute } from "@/components/RoutePage";
import { contactPageJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

const description = "Contact Mojeeb Titilayo for AI product engineering, system architecture, product strategy and selected consulting work.";

export const metadata: Metadata = {
  title: "Contact Mojeeb Titilayo",
  description,
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Mojeeb Titilayo",
    description,
    url: `${BASE_URL}/contact`,
    type: "website",
    images: [{ url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: "Contact Mojeeb Titilayo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mojeeb Titilayo",
    description,
    images: ["/mojeeb-editorial-og.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      <ContactRoute />
    </>
  );
}
