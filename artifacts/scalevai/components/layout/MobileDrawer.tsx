"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { copy, drawerLinks, routes } from "@/data/nav";
import styles from "./MobileDrawer.module.css";

export interface MobileDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ id, open, onClose }: MobileDrawerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) ref.current?.querySelector<HTMLAnchorElement>("a")?.focus({ preventScroll: true });
  }, [open]);

  return (
    <div
      ref={ref}
      id={id}
      className={open ? `${styles.drawer} ${styles.open}` : styles.drawer}
      role="dialog"
      aria-modal={open}
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open}
    >
      {drawerLinks.map((l) => (
        <Link key={l.href} href={l.href} onClick={onClose}>{l.label}</Link>
      ))}
      <Button href={routes.contact} variant="pill" icon="✆" className={styles.pill} onClick={onClose}>{copy.book}</Button>
    </div>
  );
}
