import SharedFaqSection from "@/components/catalogue/SharedFaqSection";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";

export default function ShowroomFaqSection() {
  return (
    <SharedFaqSection
      accordionId="showroom-faq"
    bookCall={{ label: copy.faq.bookCall, href: "/contact" }}
      heading={copy.faq.heading}
      intro={copy.hero.description}
      items={copy.faq.items}
      label={copy.faq.label}
      sectionId="showroom-faq"
    />
  );
}
