"use client";

import Link from "@/lib/Link";
import type { CSSProperties } from "react";
import { copy, routes } from "@/data/nav";
import { industries, industryHref } from "@/data/industries";
import { solutionHref, solutions } from "@/data/solutions";
import styles from "./MegaMenu.module.css";

export type MegaKind = "services" | "industries";

export type MegaPosition = CSSProperties & {
  "--mx": string;
  "--mw": string;
  "--ax": string;
};

export interface MegaMenuProps {
  kind: MegaKind;
  id: string;
  open: boolean;
  onNavigate: () => void;
  position: MegaPosition;
}

const serviceIcons: Record<string, string> = {
  "workforce-intelligence": "◉",
  "immersive-showroom": "◆",
  "talent-intelligence": "▲",
  "revenue-cycle": "✚",
  "people-assistant": "●",
  "ai-workflow-automation": "✦",
  "retail-intelligence": "■",
  "audience-intelligence": "★",
  "business-efficiency-consulting": "◐",
  "virtual-experience": "▶",
};

const industryIcons: Record<string, string> = {
  "real-estate-development": "◆",
  "healthcare-life-sciences": "✚",
  "manufacturing-logistics": "⬢",
  "hospitality-luxury-venues": "▶",
  "retail-store-operations": "■",
  "financial-services": "●",
};

function accentStyle(colors: readonly [string, string]): CSSProperties & { "--a": string; "--b": string } {
  return { "--a": colors[0], "--b": colors[1] };
}

function MenuCard({
  href,
  name,
  description,
  colors,
  icon,
  onNavigate,
}: {
  href: string;
  name: string;
  description: string;
  colors: readonly [string, string];
  icon: string;
  onNavigate: () => void;
}) {
  return (
    <Link className={styles.mi} href={href} onClick={onNavigate}>
      <span className={styles.mc} style={accentStyle(colors)} aria-hidden="true">{icon}</span>
      <span className={styles.copy}>
        <span className={styles.mn}>{name}</span>
        <small>{description}</small>
      </span>
    </Link>
  );
}

function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      {solutions.map((item) => (
        <MenuCard
          key={item.slug}
          href={solutionHref(item.slug)}
          name={item.name}
          description={item.summary}
          colors={item.colors}
          icon={serviceIcons[item.slug] ?? "◆"}
          onNavigate={onNavigate}
        />
      ))}
      <Link className={styles.mv} href={routes.services} onClick={onNavigate}>
        View all solutions <span aria-hidden="true">→</span>
      </Link>
    </>
  );
}

function IndustriesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      {industries.map((item) => (
        <MenuCard
          key={item.slug}
          href={industryHref(item.slug)}
          name={item.name}
          description={item.summary}
          colors={item.colors}
          icon={industryIcons[item.slug] ?? "◆"}
          onNavigate={onNavigate}
        />
      ))}
      <Link className={styles.mv} href={routes.contact} onClick={onNavigate}>
        {copy.industriesCtaLead} {copy.letsTalk} <span aria-hidden="true">→</span>
      </Link>
    </>
  );
}

export default function MegaMenu({ kind, id, open, onNavigate, position }: MegaMenuProps) {
  const cls = [styles.mega, open ? styles.open : ""].filter(Boolean).join(" ");
  return (
    <div className={cls} id={id} style={position} aria-hidden={!open}>
      <div className={styles.grid} aria-label={kind === "services" ? copy.services : copy.industries}>
        {kind === "services"
          ? <ServicesPanel onNavigate={onNavigate} />
          : <IndustriesPanel onNavigate={onNavigate} />}
      </div>
    </div>
  );
}
