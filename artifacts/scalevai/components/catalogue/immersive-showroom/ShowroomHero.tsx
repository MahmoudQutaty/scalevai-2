import Link from "next/link";
import Button from "@/components/ui/Button";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

export default function ShowroomHero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol>
            {copy.breadcrumb.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
                <span aria-hidden="true">/</span>
              </li>
            ))}
            <li aria-current="page">Immersive Showroom</li>
          </ol>
        </nav>

        <h1 className={styles.heroTitle}>{copy.hero.heading}</h1>
        <p className={styles.heroDescription}>{copy.hero.description}</p>
        <ul className={styles.benefits}>
          {copy.hero.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Button className={styles.heroPrimaryButton} href="/contact">
            {copy.hero.bookCall}
          </Button>
          <Button className={styles.heroSecondaryButton} href="#how-it-works" variant="white">
            {copy.hero.howItWorks}
          </Button>
        </div>
      </div>
    </header>
  );
}
