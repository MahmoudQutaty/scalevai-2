import type { Metadata } from "next";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";

export const metadata: Metadata = {
  title: "About | ScaleVAI",
  description: pageCopy.about.description,
};

export default function AboutPage() {
  return <RouteStub name="about" />;
}
