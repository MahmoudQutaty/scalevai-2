"use client";

import Link from "next/link";
import { useState } from "react";
import { copy, routes } from "@/data/nav";
import { industries, industryHref } from "@/data/industries";
import { megaPartners, megaProducts } from "@/data/partners";
import { serviceHref, services } from "@/data/services";
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
  const s = services[active];
  return (
    <>
      <div className={styles.core}>
        <small>{copy.coreServices}</small>
        {services.map((item, i) => (
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
          <p className={styles.heading}><i className={styles.ic} aria-hidden="true">◆</i><Link href={serviceHref(s.slug)} onClick={onNavigate}>{s.name}</Link></p>
          <p className={styles.desc}>{s.summary}</p>
        </div>
        <div>
          <p className={styles.heading}><i className={styles.ic} aria-hidden="true">✓</i>{copy.whatWeDeliver}</p>
          <ul>{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
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
  const [active, setActive] = useState<number | null>(null);
  const ind = active === null ? null : industries[active];
  const partners = ind ? ind.partners.split(" · ") : megaPartners;
  const products = ind ? ind.capabilities : megaProducts;
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
      <div className={styles.g}>{[0, 1, 2].map(link)}</div>
      <div className={styles.g}>{industries.slice(3).map((_, k) => link(k + 3))}</div>
      <div aria-live="polite">
        <small className={styles.label}>{copy.productsPartners}</small>
        <ul className={styles.list}>{partners.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <div>
        <ul className={styles.listOffset}>{products.map((p) => <li key={p}>{p}</li>)}</ul>
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
