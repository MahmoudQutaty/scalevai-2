import type { Metadata } from "next";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";

export const metadata: Metadata = {
  title: "Partners | ScaleVAI",
  description: pageCopy.partners.description,
};

export default function PartnersPage() {
  return <RouteStub name="partners" />;
}
