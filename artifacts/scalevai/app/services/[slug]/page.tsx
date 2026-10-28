import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueDetail from "@/components/catalogue/CatalogueDetail";
import WorkforceIntelligencePage from "@/components/catalogue/workforce-intelligence/WorkforceIntelligencePage";
import { solutions } from "@/data/solutions";
import { workforceIntelligencePage } from "@/data/workforce-intelligence-page";
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

  return slug === "workforce-intelligence"
    ? pageMetadata(workforceIntelligencePage.title, workforceIntelligencePage.description)
    : pageMetadata(`${solution.name} | ScaleVAI`, solution.summary);
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return slug === "workforce-intelligence" ? (
    <WorkforceIntelligencePage />
  ) : (
    <CatalogueDetail kind="solution" item={solution} />
  );
}
