"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.12) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [styles.rv, shown ? styles.in : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
