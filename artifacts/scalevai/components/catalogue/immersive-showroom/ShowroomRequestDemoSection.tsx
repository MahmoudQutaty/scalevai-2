import { ContactSection } from "@/components/sections/home/ContactSection";
import { immersiveShowroomPage as copy } from "@/data/immersive-showroom-page";

export default function ShowroomRequestDemoSection() {
  return (
    <ContactSection
      content={copy.requestDemo}
      fieldIdPrefix="showroom-contact"
      includePartnerBanner={false}
      interestOptions={copy.requestDemo.form.interestOptions}
      sectionId="book"
      variant="service"
    />
  );
}
