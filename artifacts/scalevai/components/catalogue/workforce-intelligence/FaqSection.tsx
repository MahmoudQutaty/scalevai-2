import SharedFaqSection from "@/components/catalogue/SharedFaqSection";
import { workforceIntelligencePage as copy } from "@/data/workforce-intelligence-page";

export default function FaqSection() {
  return (
    <SharedFaqSection
      accordionId="workforce-faq"
      bookCall={{ label: copy.faq.bookCall, href: "#talk" }}
      heading={copy.faq.heading}
      intro={copy.faq.intro}
      items={copy.faq.items}
      label={copy.faq.label}
      sectionId="faq"
    />
  );
}
