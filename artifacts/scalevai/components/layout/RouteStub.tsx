import type { ReactNode } from "react";
import { pageCopy, type StubPageName } from "@/data/pages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import styles from "./RouteStub.module.css";

interface StubCopy {
  readonly heading: string;
  readonly description: string;
  readonly cta: string;
  readonly ctaHref: string;
}

export default function RouteStub({
  name,
  copy,
  children,
}: Readonly<{ name?: StubPageName; copy?: StubCopy; children?: ReactNode }>) {
  const page: StubCopy = copy ?? pageCopy[name ?? "contact"];

  return (
    <main id="main-content" tabIndex={-1} className={styles.stub}>
      <div className={styles.content}>
        <SectionHeading as="h1" text={page.heading} className={styles.heading} />
        {page.description ? <p>{page.description}</p> : null}
        {children}
        <div className={styles.cta}>
          <Button href={page.ctaHref} variant="pill" icon="→">{page.cta}</Button>
        </div>
      </div>
    </main>
  );
}
