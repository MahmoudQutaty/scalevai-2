import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueDetail from "@/components/catalogue/CatalogueDetail";
import { solutions } from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";

type SolutionPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const instant = false;

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return pageMetadata(`${solution.name} | ScaleVAI`, solution.summary);
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return <CatalogueDetail kind="solution" item={solution} />;
}
