import Link from "@/lib/Link";
import type { CSSProperties } from "react";
import { copy, routes } from "@/data/nav";
import styles from "./Logo.module.css";

export interface LogoProps {
  withMark?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function Logo({ withMark = true, className, style }: LogoProps) {
  return (
    <Link className={className ? `${styles.logo} ${className}` : styles.logo} style={style} href={routes.top}>
      {withMark ? (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M4 26 16 5l12 21" stroke="#fff" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M10 26l6-10 6 10" stroke="#4a90f0" strokeWidth="3.5" strokeLinejoin="round" />
        </svg>
      ) : null}
      {copy.brand}<b>{copy.brandAccent}</b>
    </Link>
  );
}
