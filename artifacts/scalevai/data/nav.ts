export interface NavLink {
  label: string;
  href: string;
}

export const routes = {
  top: "/#top",
  services: "/services",
  industries: "/industries",
  about: "/about",
  partners: "/partners",
  contact: "/contact",
  careers: "/careers",
} as const;

export const drawerLinks: readonly NavLink[] = [
  { label: "Services", href: routes.services },
  { label: "Industries", href: routes.industries },
  { label: "About", href: routes.about },
  { label: "Partners", href: routes.partners },
  { label: "Let’s Talk", href: routes.contact },
];

export const companyLinks: readonly NavLink[] = [
  { label: "About", href: routes.about },
  { label: "Partners", href: routes.partners },
  { label: "Careers", href: routes.careers },
  { label: "Contact", href: routes.contact },
];

export const contact = {
  phoneHref: "tel:+971585700958",
  phoneLabel: "+971 58 570 0958",
  emailHref: "mailto:scale@scalevai.com",
  emailLabel: "scale@scalevai.com",
  address: "Al Sagar Tower, Floor 29, Sheikh Zayed Road, Dubai",
  whatsapp: "https://wa.me/971585700958",
} as const;

export const copy = {
  brand: "Scale",
  brandAccent: "VAI",
  ai: "AI ✦",
  services: "Services",
  industries: "Industries",
  about: "About",
  partners: "Partners",
  letsTalk: "Let’s Talk",
  book: "Book a discovery call",
  contactUs: "Contact Us",
  coreServices: "CORE SERVICES",
  whatWeDeliver: "What we deliver",
  servicesCtaLead: "Not sure which service you need?",
  servicesCtaText: " Tell us the problem; we’ll tell you the fix.",
  servicesCtaLink: "Talk to an expert",
  productsPartners: "PRODUCTS & PARTNERS",
  industriesCtaLead: "Don’t see your industry?",
  industriesCtaText: " We also build for financial services, logistics, procurement and more.",
  footerTagline: "Ready to transform your business digitally?",
  footerCta: "Contact now!",
  footerServices: "Services",
  footerIndustries: "Industries",
  footerCompany: "Company",
  footerTouch: "Get in touch",
  copyright: "© 2026 ScaleVAI. All rights reserved.",
} as const;
