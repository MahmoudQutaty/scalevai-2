import Link from "@/lib/Link";
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

const variantStyle: Partial<Record<ButtonVariant, CSSProperties>> = {
  footerContact: { padding: "8px 22px", display: "inline-flex" },
};

interface SharedButtonProps {
  variant?: ButtonVariant;
  icon?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export type ButtonProps = SharedButtonProps & (
  | { href: string; external?: boolean; type?: never; disabled?: never }
  | { href?: never; external?: never; type?: "button" | "submit" | "reset"; disabled?: boolean }
);

export default function Button({ href, variant = "pill", icon, className, external = false, type = "button", disabled, onClick, children }: ButtonProps) {
  const cls = className ? `${variantClass[variant]} ${className}` : variantClass[variant];
  const style = variantStyle[variant];
  const content = (
    <>
      {children}
      {icon ? <> <i aria-hidden="true">{icon}</i></> : null}
    </>
  );
  if (href === undefined) {
    return <button className={cls} style={style} type={type} disabled={disabled} onClick={onClick}>{content}</button>;
  }
  if (external) {
    return <a className={cls} style={style} href={href} onClick={onClick}>{content}</a>;
  }
  return <Link className={cls} style={style} href={href} onClick={onClick}>{content}</Link>;
}
