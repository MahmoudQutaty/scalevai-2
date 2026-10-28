import { contact } from "./nav";

export const servicesExpand = {
  heading: "Everything you need to build,\nrun and scale with AI",
  arrow: "↗",
  listSeparator: " · ",
} as const;

export const outcomeBanner = {
  text: "Most transformation projects fail because technology is treated as the goal. We start with the outcome.",
  ctaLabel: "Book a discovery call ›",
  ctaHref: "#talk",
} as const;

export interface Challenge {
  icon: string;
  title: string;
  text: string;
}

export const challenges = {
  heading: "Challenges we hear every week,\nsolved by one team",
  ctaLabel: "Explore our services ›",
  ctaHref: "#talk",
  items: [
    { icon: "⏱", title: "Products take too long to launch.", text: "Releases slip and the market moves on." },
    { icon: "⚙", title: "Legacy systems hold you back.", text: "Old architecture blocks every new idea." },
    { icon: "✋", title: "Manual work eats your team’s day.", text: "Effort spent on work software should do." },
    { icon: "⇄", title: "Systems don’t talk to each other.", text: "No single view of the business." },
    { icon: "✦", title: "AI pilots never reach production.", text: "Plenty of demos, no results." },
    { icon: "?", title: "Not sure which one is yours?", text: "Tell us the problem; we’ll tell you the fix." },
  ] as readonly Challenge[],
} as const;

export const industryTiles = {
  heading: "Built for the industries we know best",
  explore: "Explore ›",
  href: "#talk",
  itemsShown: 3,
} as const;

export type WhyIcon = "people" | "target" | "shield" | "bolt" | "heart";

export interface WhyItem {
  icon: WhyIcon;
  title: string;
  text: string;
}

export const why = {
  heading: "Why businesses choose ScaleVAI",
  items: [
    { icon: "people", title: "Shapes the solution with you", text: "A typical vendor builds to requirements. We work through the problem with you before anything is built." },
    { icon: "target", title: "Delivers a measurable result", text: "A typical vendor delivers a project. We agree the success metric first, then test against it." },
    { icon: "shield", title: "Business first, technology second", text: "A typical vendor starts with technology. We start with your business problem and use ready-made products where they fit." },
    { icon: "bolt", title: "Right-sized, live in weeks", text: "A typical vendor brings enterprise prices and year-long timelines. We size every project to a growing business." },
    { icon: "heart", title: "Stays as your long-term partner", text: "A typical vendor hands over and leaves. We stay after go-live with managed support and quarterly reviews." },
  ] as readonly WhyItem[],
} as const;

export interface FaqCategory {
  id: string;
  label: string;
  items: readonly { q: string; a: string }[];
}

export const faq = {
  heading: "Turning your questions into confidence",
  tabsLabel: "FAQ categories",
  arrow: "↓",
  categories: [
    { id: "about", label: "About us", items: [
      { q: "Do we need to be a big company to work with you?", a: "No. We work with growing businesses and size every project to your budget and pace." },
      { q: "Do you work outside the UAE?", a: "Yes, across the GCC, and in Africa through local partners." },
    ] },
    { id: "delivery", label: "Delivery", items: [
      { q: "How long does a project take?", a: "Ready products go live in weeks. Custom builds ship in phases, with working software every few weeks." },
    ] },
    { id: "data", label: "Data & support", items: [
      { q: "Where is our data hosted?", a: "Where your regulator needs it, including in the UAE." },
      { q: "Do you support us after launch?", a: "Yes. Managed support is part of every engagement we recommend." },
    ] },
  ] as readonly FaqCategory[],
} as const;

export const interestOptions = ["A service", "An industry", "Partnering"] as const;
export type Interest = (typeof interestOptions)[number] | "";
export const partnerInterest: Interest = "Partnering";

export const contactSection = {
  heading: "Let’s solve your next business challenge.",
  text: "Get a strategy conversation, not a sales pitch. Speak directly with a senior consultant from a team with decades of global delivery experience.",
  bigText: "Let’s Talk!",
  form: {
    heading: "Speak with our experts",
    name: "Full name",
    company: "Company",
    email: "Business email",
    phone: "Phone",
    interestPlaceholder: "I’m interested in…",
    message: "Message",
    submit: "Send enquiry",
    success: "Thanks, we have recorded your enquiry (demo).",
  },
  offices: [
    { label: "DUBAI, UAE", value: "Al Sagar Tower, Floor 29, Sheikh Zayed Road" },
    { label: "CALL OR WHATSAPP", value: contact.phoneLabel },
    { label: "EMAIL", value: contact.emailLabel },
    { label: "ENGINEERING CENTRE", value: "Bangalore, India" },
  ],
} as const;

export const partnerBanner = {
  text: "Have a product the region needs? Become a ScaleVAI partner.",
  cta: "Become a partner",
} as const;
