import type { ReactNode } from "react";
import { pageCopy, type StubPageName } from "@/data/pages";
import styles from "./RouteStub.module.css";

export default function RouteStub({
  name,
  children,
}: Readonly<{ name: StubPageName; children?: ReactNode }>) {
  const page = pageCopy[name];

  return (
    <main className={styles.stub}>
      <div className={styles.content}>
        <h1>{page.heading}</h1>
        {page.description && <p>{page.description}</p>}
        {children}
      </div>
    </main>
  );
}
