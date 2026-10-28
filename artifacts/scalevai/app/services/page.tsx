import Link from "next/link";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { solutions, solutionHref } from "@/data/solutions";
import { pageMetadata } from "@/lib/metadata";
import styles from "@/components/layout/RouteStub.module.css";

export const metadata = pageMetadata("Services | ScaleVAI", pageCopy.services.heading);

export default function ServicesPage() {
  return (
    <RouteStub name="services">
      <div className={styles.anchors}>
        {solutions.map((service) => (
          <Link id={service.slug} key={service.slug} href={solutionHref(service.slug)}>
            {service.name}
          </Link>
        ))}
      </div>
    </RouteStub>
  );
}
