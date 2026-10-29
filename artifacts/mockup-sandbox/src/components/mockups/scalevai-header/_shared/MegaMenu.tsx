"use client";

import Link from "@/lib/Link";
import { useState } from "react";
import { copy, routes } from "@/data/nav";
import { industries, industryCopy, industryHref } from "@/data/industries";
import { solutionCopy, solutionHref, solutions } from "@/data/solutions";
import styles from "./MegaMenu.module.css";

export type MegaKind = "services" | "industries";

export interface MegaMenuProps {
  kind: MegaKind;
  id: string;
  open: boolean;
  onNavigate: () => void;
}

function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState<number>(0);
  const s = solutions[active];
  return (
    <>
      <div className={styles.core}>
        <small>{copy.coreServices}</small>
        {solutions.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            className={i === active ? styles.on : undefined}
            aria-pressed={i === active}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.mc} aria-live="polite">
        <div>
          <p className={styles.heading}><i className={styles.ic} aria-hidden="true">◆</i><Link href={solutionHref(s.slug)} onClick={onNavigate}>{s.name}</Link></p>
          <p className={styles.desc}>{s.summary}</p>
          <p className={styles.meta}>{s.deployment} · {solutionCopy.region}</p>
          <Link href={solutionHref(s.slug)} onClick={onNavigate}>{solutionCopy.explore} →</Link>
        </div>
        <div>
          <p className={styles.heading}><i className={styles.ic} aria-hidden="true">✓</i>{solutionCopy.capabilities}</p>
          <ul>{s.capabilities.map((d) => <li key={d.name}><b>{d.name}</b> {d.description}</li>)}</ul>
        </div>
      </div>
      <div className={styles.cta}>
        <span>✦ <b>{copy.servicesCtaLead}</b>{copy.servicesCtaText}</span>
        <Link href={routes.contact} onClick={onNavigate}>{copy.servicesCtaLink}</Link>
      </div>
    </>
  );
}

function IndustriesPanel({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState(0);
  const ind = industries[active];
  const split = Math.ceil(industries.length / 2);
  const link = (i: number) => {
    const x = industries[i];
    return (
      <Link key={x.slug} href={industryHref(x.slug)} onClick={onNavigate} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
        <i className={styles.ic} aria-hidden="true">◆</i>{x.name}
      </Link>
    );
  };
  return (
    <>
      <div className={styles.g}>{industries.slice(0, split).map((_, i) => link(i))}</div>
      <div className={styles.g}>{industries.slice(split).map((_, i) => link(i + split))}</div>
      <div aria-live="polite">
        <p className={styles.heading}><Link href={industryHref(ind.slug)} onClick={onNavigate}>{ind.name}</Link></p>
        <p className={styles.desc}>{ind.summary}</p>
        <ul className={styles.list}>{ind.metrics.map((m) => <li key={m.label}><b>{m.value}</b> {m.label}</li>)}</ul>
      </div>
      <div aria-live="polite">
        <small className={styles.label}>{industryCopy.systems}</small>
        <ul className={styles.list}>{ind.systems.map((system) => <li key={system.name}><b>{system.name}</b> {system.description}</li>)}</ul>
      </div>
      <div className={styles.cta}>
        <span>✦ <b>{copy.industriesCtaLead}</b>{copy.industriesCtaText}</span>
        <Link href={routes.contact} onClick={onNavigate}>{copy.letsTalk}</Link>
      </div>
    </>
  );
}

export default function MegaMenu({ kind, id, open, onNavigate }: MegaMenuProps) {
  const cls = [styles.mega, kind === "services" ? styles.services : styles.industries, open ? styles.open : ""].join(" ");
  return (
    <div className={cls} id={id}>
      {kind === "services" ? <ServicesPanel onNavigate={onNavigate} /> : <IndustriesPanel key={open ? "o" : "c"} onNavigate={onNavigate} />}
    </div>
  );
}
