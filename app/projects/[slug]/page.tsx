import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailRoute } from "@/components/RoutePage";
import { getProjectBySlug, selectedProjectSlugs } from "@/lib/projects";
import { BASE_URL } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return selectedProjectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.selected) {
    return { title: "Project not found" };
  }

  const description = project.description ?? `A selected project by Mojeeb Titilayo: ${project.name}.`;
  const canonical = `${BASE_URL}/projects/${project.slug}`;

  return {
    title: project.name,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${project.name} — Mojeeb Titilayo`,
      description,
      url: canonical,
      images: project.visual ? [{ url: project.visual, alt: project.visualAlt ?? project.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Mojeeb Titilayo`,
      description,
      images: project.visual ? [project.visual] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.selected) notFound();

  return <ProjectDetailRoute project={project} />;
}
