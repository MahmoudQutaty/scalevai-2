import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { challenges } from "@/data/home-sections";
import styles from "./Challenges.module.css";

export function Challenges() {
  return (
    <div className={styles.w}>
      <Reveal><SectionHeading text={challenges.heading} /></Reveal>
      <Reveal className={styles.sg}>
        {challenges.items.map((c) => (
          <div key={c.title} className={styles.sc}>
            <h3 className={styles.h}><i className={styles.ic} aria-hidden="true">{c.icon}</i>{c.title}</h3>
            <p className={styles.p}>{c.text}</p>
          </div>
        ))}
      </Reveal>
      <div className={styles.mid}>
        <Button href={challenges.ctaHref} variant="ghost">{challenges.ctaLabel}</Button>
      </div>
    </div>
  );
}
