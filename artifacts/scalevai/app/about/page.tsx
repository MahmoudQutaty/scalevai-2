import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About | ScaleVAI", pageCopy.about.description);

export default function AboutPage() {
  return <RouteStub name="about" />;
}
