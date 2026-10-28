"use client";

import Button from "@/components/ui/Button";
import { partnerBanner } from "@/data/home-sections";
import styles from "./PartnerBanner.module.css";

interface PartnerBannerProps {
  readonly onBecomePartner: () => void;
  readonly disabled?: boolean;
}

export function PartnerBanner({ onBecomePartner, disabled = false }: PartnerBannerProps) {
  return (
    <div className={styles.pb} id="partners">
      <span>{partnerBanner.text}</span>
      <Button type="button" variant="demo" disabled={disabled} onClick={onBecomePartner}>{partnerBanner.cta}</Button>
    </div>
  );
}
