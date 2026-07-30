import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { ProjectsRoute } from "@/components/RoutePage";
import { projectsPageJsonLd } from "@/lib/jsonLd";
import { BASE_URL } from "@/lib/site";

const description = "Explore products, developer tools, SaaS platforms, Web3 builds, hackathon projects and experiments built by Mojeeb Titilayo.";

export const metadata: Metadata = {
  title: "Projects and Experiments",
  description,
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    title: "Projects and Experiments — Mojeeb Titilayo",
    description,
    url: `${BASE_URL}/projects`,
    type: "website",
    images: [{ url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: "Projects and experiments by Mojeeb Titilayo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects and Experiments — Mojeeb Titilayo",
    description,
    images: ["/mojeeb-editorial-og.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsPageJsonLd} />
      <ProjectsRoute />
    </>
  );
}
