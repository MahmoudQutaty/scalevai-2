import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { outcomeBanner } from "@/data/home-sections";
import styles from "./OutcomeBanner.module.css";

export function OutcomeBanner() {
  return (
    <div className={styles.w}>
      <Reveal className={styles.ban}>
        <div>
          <h3 className={styles.h3}>{outcomeBanner.text}</h3>
          <Button href={outcomeBanner.ctaHref} variant="ghost">{outcomeBanner.ctaLabel}</Button>
        </div>
        <div className={styles.orb} aria-hidden="true" />
      </Reveal>
    </div>
  );
}
