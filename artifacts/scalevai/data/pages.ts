// Stub-page copy is taken from the supplied website content document / reference homepage.
import { hero } from "./hero";
import { contactSection } from "./home-sections";

const cta = { cta: "Book a discovery call", ctaHref: "/#talk" } as const;
const companyIntro = "ScaleVAI is an AI and digital engineering company based in Dubai.";

export const pageCopy = {
  services: {
    label: "Services",
    heading: "Everything you need to build, run and scale with AI.",
    description: hero.sub,
    ...cta,
  },
  industries: {
    label: "Industries",
    heading: "Built for the industries we know best.",
    description:
      "We combine our own engineering with proven products from trusted partners, so you get something that works in weeks, not a blank-page project.",
    ...cta,
  },
  about: {
    label: "About",
    heading: "Business first. Technology second. Results always.",
    description:
      `${companyIntro} We help growing businesses across the UAE, the GCC and Africa use AI, generative AI, data analytics and AR/VR to save time, cut costs and grow.`,
    ...cta,
  },
  partners: {
    label: "Partners",
    heading: "Your gateway to GCC & Africa.",
    description:
      "You've built a product that works. We get it sold, deployed and supported across the region, without you opening an office.",
    ...cta,
  },
  contact: {
    label: "Contact",
    heading: "Let's solve your next business challenge.",
    description: contactSection.text,
    ...cta,
  },
  careers: {
    label: "Careers",
    heading: "Careers",
    description: companyIntro,
    ...cta,
  },
} as const;

export const notFoundCopy = {
  title: "Page not found | ScaleVAI",
  heading: "404: Page not found.",
  description: "The page you are looking for does not exist or has moved.",
  cta: "Back to homepage",
  ctaHref: "/",
} as const;

export type StubPageName = keyof typeof pageCopy;
