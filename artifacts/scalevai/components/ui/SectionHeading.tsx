import { Fragment } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  readonly text: string;
  readonly id?: string;
  readonly className?: string;
  readonly as?: "h1" | "h2" | "h3";
}

export function SectionHeading({ text, id, className, as: Heading = "h2" }: SectionHeadingProps) {
  const lines = text.split("\n");
  return (
    <Heading id={id} className={className ? `${styles.h2} ${className}` : styles.h2}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </Heading>
  );
}
