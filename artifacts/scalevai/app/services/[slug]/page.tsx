import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueDetail from "@/components/catalogue/CatalogueDetail";
import ImmersiveShowroomPage from "@/components/catalogue/immersive-showroom/ImmersiveShowroomPage";
import WorkforceIntelligencePage from "@/components/catalogue/workforce-intelligence/WorkforceIntelligencePage";
import TalentIntelligencePage from "@/components/catalogue/talent-intelligence/TalentIntelligencePage";
import { immersiveShowroomPage } from "@/data/immersive-showroom-page";
import { solutions } from "@/data/solutions";
import { workforceIntelligencePage } from "@/data/workforce-intelligence-page";
import { talentIntelligencePage } from "@/data/talent-intelligence-page";
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

  if (slug === "workforce-intelligence") {
    return pageMetadata(workforceIntelligencePage.title, workforceIntelligencePage.description);
  }
  if (slug === "immersive-showroom") {
    return pageMetadata(immersiveShowroomPage.title, immersiveShowroomPage.description);
  }
  if (slug === "talent-intelligence") {
    const metadata = pageMetadata(talentIntelligencePage.title, talentIntelligencePage.description);
    return {
      ...metadata,
      openGraph: {
        ...metadata.openGraph,
        title: "Talent Intelligence | AI Candidate Scoring & Screening | ScaleVAI",
        description: "Shortlist high-volume applicants in hours, not weeks, with explainable AI scoring and native ATS integration.",
      },
    };
  }
  return pageMetadata(`${solution.name} | ScaleVAI`, solution.summary);
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  if (slug === "workforce-intelligence") return <WorkforceIntelligencePage />;
  if (slug === "immersive-showroom") return <ImmersiveShowroomPage />;
  if (slug === "talent-intelligence") return <TalentIntelligencePage />;
  return <CatalogueDetail kind="solution" item={solution} />;
}
