import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Partners | ScaleVAI", pageCopy.partners.description);

export default function PartnersPage() {
  return <RouteStub name="partners" />;
}
