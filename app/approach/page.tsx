import type { Metadata } from "next";
import { ApproachRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description: "Mojeeb Titilayo's product philosophy: understand the problem, preserve what works and make the smallest strong move.",
  alternates: { canonical: `${BASE_URL}/approach` },
};

export default function ApproachPage() {
  return <ApproachRoute />;
}
