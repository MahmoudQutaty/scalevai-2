import type { Metadata } from "next";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact | ScaleVAI",
  description: pageCopy.contact.description,
};

export default function ContactPage() {
  return <RouteStub name="contact" />;
}
