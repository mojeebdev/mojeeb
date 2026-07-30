import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { ProjectDetailRoute } from "@/components/RoutePage";
import { projectPageJsonLd } from "@/lib/jsonLd";
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
  const image = project.visual
    ? { url: project.visual, alt: project.visualAlt ?? project.name }
    : { url: "/mojeeb-editorial-og.jpg", width: 1200, height: 630, alt: `${project.name} by Mojeeb Titilayo` };

  return {
    title: `${project.name} — Project Profile`,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: `${project.name} — Project Profile by Mojeeb Titilayo`,
      description,
      url: canonical,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Project Profile by Mojeeb Titilayo`,
      description,
      images: [project.visual ?? "/mojeeb-editorial-og.jpg"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.selected) notFound();

  return (
    <>
      <JsonLd data={projectPageJsonLd(project)} />
      <ProjectDetailRoute project={project} />
    </>
  );
}
