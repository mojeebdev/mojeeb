import type { Metadata } from "next";
import { ContactRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mojeeb Titilayo for AI product engineering, system architecture, strategy and product build work.",
  alternates: { canonical: `${BASE_URL}/contact` },
};

export default function ContactPage() {
  return <ContactRoute />;
}
