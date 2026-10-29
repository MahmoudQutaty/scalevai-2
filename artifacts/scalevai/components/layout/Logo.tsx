import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { copy, routes } from "@/data/nav";
import styles from "./Logo.module.css";

export interface LogoProps {
  className?: string;
  style?: CSSProperties;
}

export default function Logo({ className, style }: LogoProps) {
  return (
    <Link className={className ? `${styles.logo} ${className}` : styles.logo} style={style} href={routes.top}>
      <Image
        src="/scalevai-logo-transparent.png"
        alt={`${copy.brand}${copy.brandAccent}`}
        width={1147}
        height={248}
        priority
        className={styles.image}
      />
    </Link>
  );
}
