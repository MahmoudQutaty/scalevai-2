import RouteStub from "@/components/layout/RouteStub";
import { notFoundCopy } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(notFoundCopy.title, notFoundCopy.description);

export default function NotFound() {
  return <RouteStub copy={notFoundCopy} />;
}
