import Link from "next/link";
import RouteStub from "@/components/layout/RouteStub";
import { pageCopy } from "@/data/pages";
import { industries, industryHref } from "@/data/industries";
import { pageMetadata } from "@/lib/metadata";
import styles from "@/components/layout/RouteStub.module.css";

export const metadata = pageMetadata("Industries | ScaleVAI", pageCopy.industries.description);

export default function IndustriesPage() {
  return (
    <RouteStub name="industries">
      <div className={styles.anchors}>
        {industries.map((industry) => (
          <Link key={industry.slug} href={industryHref(industry.slug)}>
            {industry.name}
          </Link>
        ))}
      </div>
    </RouteStub>
  );
}
