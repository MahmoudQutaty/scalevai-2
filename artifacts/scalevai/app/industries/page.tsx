import type { Metadata } from "next";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { industries, industryHref } from "@/data/industries";
import Link from "next/link";
import styles from "@/components/layout/RouteStub.module.css";

export const metadata: Metadata = {
  title: "Industries | ScaleVAI",
  description: pageCopy.industries.description,
};

export default function IndustriesPage() {
  return (
    <RouteStub name="industries">
      <div className={styles.anchors}>
        {industries.map((industry) => (
          <Link id={industry.slug} key={industry.slug} href={industryHref(industry.slug)}>
            {industry.name}
          </Link>
        ))}
      </div>
    </RouteStub>
  );
}
