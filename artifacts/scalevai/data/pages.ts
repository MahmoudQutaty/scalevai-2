// Stub-page copy is taken from the supplied website content document.
export const pageCopy = {
  services: {
    label: "Services",
    heading: "Everything you need to build, run and scale with AI.",
    description: "",
  },
  industries: {
    label: "Industries",
    heading: "Built for the industries we know best.",
    description:
      "We combine our own engineering with proven products from trusted partners, so you get something that works in weeks, not a blank-page project.",
  },
  about: {
    label: "About",
    heading: "Business first. Technology second. Results always.",
    description:
      "ScaleVAI is an AI and digital engineering company based in Dubai. We help growing businesses across the UAE, the GCC and Africa use AI, generative AI, data analytics and AR/VR to save time, cut costs and grow.",
  },
  partners: {
    label: "Partners",
    heading: "Your gateway to GCC & Africa.",
    description:
      "You've built a product that works. We get it sold, deployed and supported across the region, without you opening an office.",
  },
  contact: {
    label: "Contact",
    heading: "Let's solve your next business challenge.",
    description:
      "Tell us a little about your business and we'll come back within one working day.",
  },
  careers: {
    label: "Careers",
    heading: "Careers",
    description: "",
  },
} as const;

export type StubPageName = keyof typeof pageCopy;
