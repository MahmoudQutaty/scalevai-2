import Link from "next/link";
import HeroVideoBackground from "@/components/ui/HeroVideoBackground";
import ServiceHeroActions from "@/components/ui/ServiceHeroActions";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

export default function ShowroomHero() {
  return (
    <header className={styles.hero} id="top">
      <HeroVideoBackground className={styles.media} src={copy.hero.video} />
      <div className={styles.heroContainer}>
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
        <ul className={styles.benefits}>
          {copy.hero.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <p className={styles.heroDescription}>{copy.hero.description}</p>
        <ServiceHeroActions
          className={styles.actions}
          primaryHref="/contact"
          primaryLabel={copy.hero.bookCall.replace(/ ›$/, "")}
          secondaryHref="#how-it-works"
          secondaryLabel={copy.hero.howItWorks}
        />
      </div>
    </header>
  );
}
