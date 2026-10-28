import { Fragment } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  readonly text: string;
  readonly id?: string;
  readonly className?: string;
}

export function SectionHeading({ text, id, className }: SectionHeadingProps) {
  const lines = text.split("\n");
  return (
    <h2 id={id} className={className ? `${styles.h2} ${className}` : styles.h2}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </h2>
  );
}
