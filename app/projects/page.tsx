import type { Metadata } from "next";
import { ProjectsRoute } from "@/components/RoutePage";
import { BASE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects and Experiments",
  description: "Explore products, developer tools, SaaS platforms, Web3 builds, hackathon projects and experiments built by Mojeeb Titilayo.",
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    title: "Projects and Experiments — Mojeeb Titilayo",
    description: "Explore products, developer tools, SaaS platforms, Web3 builds, hackathon projects and experiments built by Mojeeb Titilayo.",
    url: `${BASE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return <ProjectsRoute />;
}
