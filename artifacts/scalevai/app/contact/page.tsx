import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact | ScaleVAI", pageCopy.contact.description);

export default function ContactPage() {
  return <RouteStub name="contact" />;
}
