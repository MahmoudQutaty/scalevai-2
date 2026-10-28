import Button from "@/components/ui/Button";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";
import styles from "./WorkforceFinalSections.module.css";

const items: readonly AccordionItem[] = copy.faq.items.map((item, index) => ({
  id: `question-${index + 1}`,
  title: item.question,
  content: <p className={styles.answerText}>{item.answer}</p>,
}));

export default function FaqSection() {
  return (
    <section className={`${styles.section} ${styles.faqSection}`} id="faq">
      <div className={`${styles.container} ${styles.faqGrid}`}>
        <Reveal>
          <div>
            <p className={styles.kicker}>{copy.faq.label}</p>
            <SectionHeading text={copy.faq.heading} />
            <p className={styles.faqIntro}>{copy.faq.intro}</p>
            <Button href="#talk" variant="ghost" icon="›" className={styles.faqButton}>
              {copy.faq.bookCall}
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <Accordion
            classNames={{
              root: styles.questions,
              item: styles.question,
              itemOpen: styles.questionOpen,
              heading: styles.questionHeading,
              trigger: styles.questionTrigger,
              icon: styles.questionIcon,
              panel: styles.answer,
            }}
            defaultOpen={0}
            headingLevel={4}
            icon="↓"
            idBase="workforce-faq"
            items={items}
          />
        </Reveal>
      </div>
    </section>
  );
}
