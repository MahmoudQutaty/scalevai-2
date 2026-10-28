import Link from "next/link";
import Button from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import HeroVideoBackground from "@/components/ui/HeroVideoBackground";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceHero.module.css";

export default function WorkforceHero() {
  return (
    <header className={styles.hero} id="top">
      <HeroVideoBackground className={styles.media} src={copy.video} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <ol>
                {copy.breadcrumb.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                    <span className={styles.separator} aria-hidden="true">/</span>
                  </li>
                ))}
                <li aria-current="page">Workforce Intelligence</li>
              </ol>
            </nav>

            <span className={styles.tag}>{copy.category}</span>
            <h1 className={styles.title}>
              <span>{copy.heading[0]}</span>
              <span className={styles.titleAccent}>{copy.heading[1]}</span>
            </h1>
            <p className={styles.lead}>{copy.description}</p>
            <div className={styles.actions}>
              <Button href="#talk" variant="pill" icon="✆" className={styles.callButton}>
                {copy.bookCall}
              </Button>
              <Button href="#how" variant="ghost" className={styles.howButton}>
                {copy.howItWorks}
              </Button>
            </div>
          </div>

          <div
            className={styles.scan}
            role="img"
            aria-label={copy.scanLabel}
          >
            <div className={styles.floor} aria-hidden="true" />
            <div className={styles.scanLine} aria-hidden="true" />
            <div className={styles.status} aria-hidden="true">
              <b>{copy.floor}</b>
              <span>{copy.camera}</span>
            </div>
            {copy.people.map((person) => (
              <div
                className={`${styles.person} ${person.unmatched ? styles.unmatched : ""}`}
                key={`${person.left}-${person.top}`}
                style={{
                  left: person.left,
                  top: person.top,
                  animationDelay: person.delay,
                }}
                aria-hidden="true"
              >
                <i>{person.unmatched ? copy.unmatched : copy.verified}</i>
              </div>
            ))}
            <div className={styles.alert} aria-hidden="true">
              <b>{copy.alertTitle}</b>
              <span>{copy.alertDescription}</span>
            </div>
            <div className={styles.steps} aria-hidden="true">
              {copy.scanSteps.map((step, index) => (
                <span className={index === 0 ? styles.activeStep : ""} key={step}>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.metrics}>
          {copy.metrics.map((metric) => (
            <div className={styles.metric} key={metric.label}>
              {metric.kind === "count" ? (
                <CountUp
                  value={metric.value}
                  suffix={metric.suffix}
                  className={styles.metricValue}
                />
              ) : (
                <b className={styles.metricValue}>{metric.value}</b>
              )}
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
