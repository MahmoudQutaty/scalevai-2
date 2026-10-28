import type { ReactNode } from "react";
import styles from "./BlueZone.module.css";

export function BlueZone({ children, id }: { readonly children: ReactNode; readonly id?: string }) {
  return <section className={styles.blue} id={id}>{children}</section>;
}
