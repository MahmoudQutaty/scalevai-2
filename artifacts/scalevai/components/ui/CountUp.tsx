"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CountUpProps {
  readonly value: number;
  readonly suffix: string;
  readonly className?: string;
}

function format(n: number, p: number): string {
  return String(n % 1 ? (n * p).toFixed(2) : Math.round(n * p));
}

export function CountUp({ value, suffix, className }: CountUpProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState<number | null>(null);
  const done = useRef(false);

  useEffect(() => {
    // A preference change must finish, not strand or replay, an interrupted count.
    if (done.current || typeof IntersectionObserver === "undefined") {
      done.current = true;
      const frame = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(frame);
    }
    if (reduced) return;
    const el = ref.current;
    if (!el || done.current) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || e.intersectionRatio < 0.6 || done.current) return;
          done.current = true;
          io.unobserve(e.target);
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(Math.max((t - t0) / 1500, 0), 1);
            setProgress(p);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          tick(t0);
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const p = reduced ? 1 : progress;
  return (
    <b ref={ref} className={className}>
      {p === null ? "0" : `${format(value, p)}${suffix}`}
    </b>
  );
}
