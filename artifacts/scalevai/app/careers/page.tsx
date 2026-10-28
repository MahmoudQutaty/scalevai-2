import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Careers | ScaleVAI", pageCopy.careers.heading);

export default function CareersPage() {
  return <RouteStub name="careers" />;
}
