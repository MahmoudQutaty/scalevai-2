import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import WorkforceContactForm from "./WorkforceContactForm";
import styles from "./WorkforceFinalSections.module.css";

export default function WorkforceContactSection() {
  return (
    <section className={styles.contactSection} id="talk">
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <Reveal>
            <div>
              <SectionHeading
                className={styles.contactHeading}
                text={copy.contact.heading}
              />
              <p className={styles.contactLead}>{copy.contact.description}</p>
            </div>
          </Reveal>
          <WorkforceContactForm />
        </div>
      </div>
    </section>
  );
}
