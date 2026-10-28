import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";
import styles from "./ImmersiveShowroom.module.css";

const items: readonly AccordionItem[] = copy.faq.items.map((item, index) => ({
  id: `question-${index + 1}`,
  title: item.question,
  content: <p className={styles.faqAnswerText}>{item.answer}</p>,
}));

export default function ShowroomFaqSection() {
  return (
    <section aria-labelledby="showroom-faq-heading" className={styles.faqSection} id="showroom-faq">
      <div className={`${styles.container} ${styles.centered}`}>
        <Reveal>
          <SectionHeading
            className={styles.faqTitle}
            id="showroom-faq-heading"
            text={copy.faq.heading}
          />
        </Reveal>
      </div>
      <div className={styles.container}>
        <Reveal>
          <Accordion
            classNames={{
              root: styles.faqRoot,
              item: styles.faqItem,
              itemOpen: styles.faqItemOpen,
              heading: styles.faqHeading,
              trigger: styles.faqTrigger,
              icon: styles.faqIcon,
              panel: styles.faqAnswer,
            }}
            defaultOpen={0}
            headingLevel={3}
            icon="⌄"
            idBase="showroom-faq"
            items={items}
          />
        </Reveal>
      </div>
    </section>
  );
}
