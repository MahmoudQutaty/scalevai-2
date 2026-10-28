import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "pill" | "pillAlt" | "ghost" | "ai" | "white" | "outline" | "outlineCompact" | "footerContact" | "demo";

const variantClass: Record<ButtonVariant, string> = {
  pill: styles.pill,
  pillAlt: `${styles.pill} ${styles.alt}`,
  ghost: styles.ghost,
  ai: styles.ai,
  white: styles.white,
  outline: styles.outline,
  outlineCompact: `${styles.outline} ${styles.outlineCompact}`,
  footerContact: styles.pill,
  demo: styles.demo,
};

/* Reference footer: inline style="padding:8px 22px;display:inline-flex" (opacity .8 from .fc a still applies). */
const variantStyle: Partial<Record<ButtonVariant, CSSProperties>> = {
  footerContact: { padding: "8px 22px", display: "inline-flex" },
};

export interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  icon?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({ href, variant = "pill", icon, className, external = false, onClick, children }: ButtonProps) {
  const cls = className ? `${variantClass[variant]} ${className}` : variantClass[variant];
  const style = variantStyle[variant];
  const content = (
    <>
      {children}
      {icon ? <> <i aria-hidden="true">{icon}</i></> : null}
    </>
  );
  if (external) {
    return <a className={cls} style={style} href={href} onClick={onClick}>{content}</a>;
  }
  return <Link className={cls} style={style} href={href} onClick={onClick}>{content}</Link>;
}
