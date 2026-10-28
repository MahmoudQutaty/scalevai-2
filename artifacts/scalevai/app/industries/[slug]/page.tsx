import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueDetail from "@/components/catalogue/CatalogueDetail";
import { industries } from "@/data/industries";
import { pageMetadata } from "@/lib/metadata";

type IndustryPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export const instant = false;

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return pageMetadata(`${industry.name} | ScaleVAI`, industry.summary);
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return <CatalogueDetail kind="industry" item={industry} />;
}
