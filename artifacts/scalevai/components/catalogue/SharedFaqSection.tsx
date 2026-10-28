import Button from "@/components/ui/Button";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./SharedFaqSection.module.css";

export interface FaqContentItem {
  readonly question: string;
  readonly answer: string;
}

interface SharedFaqSectionProps {
  readonly sectionId: string;
  readonly accordionId: string;
  readonly heading: string;
  readonly label?: string;
  readonly intro?: string;
  readonly bookCall?: { readonly label: string; readonly href: string };
  readonly items: readonly FaqContentItem[];
}

export default function SharedFaqSection({
  sectionId,
  accordionId,
  heading,
  label,
  intro,
  bookCall,
  items,
}: SharedFaqSectionProps) {
  const accordionItems: readonly AccordionItem[] = items.map((item, index) => ({
    id: `question-${index + 1}`,
    title: item.question,
    content: <p className={styles.answerText}>{item.answer}</p>,
  }));

  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className={`${styles.section} ${styles.faqSection}`}
      id={sectionId}
    >
      <div className={`${styles.container} ${styles.faqGrid}`}>
        <Reveal>
          <div>
            {label ? <p className={styles.kicker}>{label}</p> : null}
            <SectionHeading id={`${sectionId}-heading`} text={heading} />
            {intro ? <p className={styles.faqIntro}>{intro}</p> : null}
            {bookCall ? (
              <Button
                className={styles.faqButton}
                href={bookCall.href}
                icon="›"
                variant="ghost"
              >
                {bookCall.label}
              </Button>
            ) : null}
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
            idBase={accordionId}
            items={accordionItems}
          />
        </Reveal>
      </div>
    </section>
  );
}
