import type { Metadata } from "next";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { services, serviceHref } from "@/data/services";
import Link from "next/link";
import styles from "@/components/layout/RouteStub.module.css";

export const metadata: Metadata = {
  title: "Services | ScaleVAI",
  description: pageCopy.services.heading,
};

export default function ServicesPage() {
  return (
    <RouteStub name="services">
      <div className={styles.anchors}>
        {services.map((service) => (
          <Link id={service.slug} key={service.slug} href={serviceHref(service.slug)}>
            {service.name}
          </Link>
        ))}
      </div>
    </RouteStub>
  );
}
