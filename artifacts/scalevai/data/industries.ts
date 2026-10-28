export interface Industry {
  slug: string;
  name: string;
  summary: string;
  capabilities: readonly string[];
  partners: string;
  colors: readonly [string, string];
  showcase: string;
}

export const industries: readonly Industry[] = [
  { slug: "healthcare", name: "Healthcare", summary: "Get paid for the care you deliver, and give doctors their time back.", capabilities: ["EMR", "Revenue cycle management", "AI medical scribe", "Front-desk and billing automation"], partners: "DocMate (EMR) · Droidal (healthcare AI agents) · Wellnooz (integrative medicine)", colors: ["#b91c1c", "#7f1d1d"], showcase: "DocMate" },
  { slug: "education", name: "Education", summary: "Personal learning support for every student, and less admin for every school.", capabilities: ["AI tutoring and mentoring", "Learning platforms", "Admissions", "Parent communication"], partners: "CRITI AI (AI learning companion)", colors: ["#b45309", "#f59e0b"], showcase: "CRITI AI" },
  { slug: "retail", name: "Retail", summary: "See what’s happening on your shop floor, and act on it.", capabilities: ["Footfall, shelf and queue analytics", "Responsive in-store ads", "3D virtual showrooms", "Smart Retail"], partners: "Smart Retail (powered by Vizion) · 3D Showrooms", colors: ["#9d174d", "#db2777"], showcase: "Smart Retail" },
  { slug: "manufacturing", name: "Manufacturing", summary: "Safer floors and fewer incidents, from the cameras you already have.", capabilities: ["PPE and safety-zone monitoring", "Incident alerts", "Compliance reporting", "Quality and audit systems"], partners: "Smart Factory AI", colors: ["#047857", "#10b981"], showcase: "Smart Factory" },
  { slug: "real-estate", name: "Real Estate", summary: "Sell faster and run smarter buildings.", capabilities: ["AI 3D property tours", "AI lead management agents", "Workforce and presence intelligence", "Live in weeks"], partners: "AI 3D Tours (powered by Vizion) · Workforce Intelligence", colors: ["#6d28d9", "#a855f7"], showcase: "AI 3D Tours" },
  { slug: "legal", name: "Legal", summary: "Less paperwork, faster resolution.", capabilities: ["Online dispute resolution", "Digital notarization", "Case management", "Document automation"], partners: "Dispute resolution and notarization platforms built by our engineering team", colors: ["#334155", "#64748b"], showcase: "Legal Suite" },
];

export const industryHref = (slug: string): string => `/industries#${slug}`;

export const industryCarousel = {
  heading: "Challenges we solve.\nSound familiar?",
  partnersLabel: "Products & partners:",
  demoLabel: "Book a demo ›",
  demoHref: "#talk",
} as const;
