export interface Industry {
  slug: string;
  name: string;
  summary: string;
  systems: readonly { name: string; description: string }[];
  metrics: readonly { value: string; label: string }[];
  colors: readonly [string, string];
}

/** Industry copy and metrics supplied by the owner. */
export const industries: readonly Industry[] = [
  {
    slug: "real-estate-development",
    name: "Real Estate & Development",
    summary: "Your buildings are smart. Your operations should be. From off-plan international sales to multi-tower contractor attendance and tenant experience, we deploy AI systems that accelerate revenue and secure operations.",
    systems: [
      { name: "Immersive 3D Showroom", description: "Photorealistic WebXR digital twins for remote buyer qualification." },
      { name: "Workforce Intelligence", description: "Subcontractor & security guard presence verification across construction sites." },
    ],
    metrics: [
      { value: "3.2x", label: "Remote conversion" },
      { value: "100%", label: "Audit verification" },
      { value: "<45 Days", label: "Deployment speed" },
    ],
    colors: ["#6d28d9", "#a855f7"],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    summary: "Stop losing revenue to billing errors and claim denials. ScaleVAI automates revenue cycle workflows, clinical documentation, and insurer pre-authorizations to protect margins while keeping clinical teams focused on patient care.",
    systems: [
      { name: "Revenue Cycle AI", description: "Pre-claim validation detecting coding mismatches and policy exceptions before submission." },
      { name: "Prior Authorization Engine", description: "Autonomous medical record extraction matching clinical necessity requirements." },
    ],
    metrics: [
      { value: "60%", label: "Fewer denials" },
      { value: "4-Day", label: "Faster reimbursement" },
      { value: "100%", label: "UAE compliance" },
    ],
    colors: ["#b91c1c", "#7f1d1d"],
  },
  {
    slug: "manufacturing-logistics",
    name: "Manufacturing & Logistics",
    summary: "Full floor visibility. Zero attendance gaps. ScaleVAI deploys edge computer vision across facilities and logistics hubs to verify shift worker attendance, prevent unauthorized entries, and automate trade documentation.",
    systems: [
      { name: "Floor Workforce Vision", description: "Real-time attendance & shift verification across gates, turnstiles, and assembly lines." },
      { name: "Trade Document Ingestion", description: "Automated bills of lading, customs paperwork extraction, and ERP inventory sync." },
    ],
    metrics: [
      { value: "0", label: "Unverified clock-ins" },
      { value: "<0.5s", label: "Verification speed" },
      { value: "35%", label: "Dispatch speedup" },
    ],
    colors: ["#047857", "#10b981"],
  },
  {
    slug: "hospitality-luxury-venues",
    name: "Hospitality & Luxury Venues",
    summary: "Guest experience starts with operational excellence. ScaleVAI delivers immersive 3D virtual tour experiences that drive direct reservations, along with multilingual 24/7 AI concierges and shift presence verification for service staff.",
    systems: [
      { name: "3D Virtual Tours", description: "Interactive walkthroughs for suites and event spaces that convert direct bookings." },
      { name: "Multilingual Guest AI", description: "24/7 guest concierge across WhatsApp in Arabic, English, Russian, and 30+ languages." },
    ],
    metrics: [
      { value: "+28%", label: "Direct bookings" },
      { value: "30+", label: "Languages ready" },
      { value: "95%", label: "Query containment" },
    ],
    colors: ["#b45309", "#f59e0b"],
  },
  {
    slug: "retail-store-operations",
    name: "Retail & Store Operations",
    summary: "Know your store. Know your staff. Know your customer. ScaleVAI brings computer vision to retail floors to eliminate shrinkage, ensure brand planogram compliance, and dynamically trigger targeted signage based on real-time footfall demographics.",
    systems: [
      { name: "Retail Vision & Loss Prevention", description: "Real-time stock-out detection, planogram compliance, and checkout shrinkage monitoring." },
      { name: "Dynamic Audience Signage", description: "Anonymous edge vision triggering high-relevance promotions based on dwell time and audience." },
    ],
    metrics: [
      { value: "35%", label: "Shrinkage reduction" },
      { value: "92%", label: "Planogram audit" },
      { value: "+40%", label: "Signage dwell time" },
    ],
    colors: ["#9d174d", "#db2777"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    summary: "AI that makes financial operations faster, smarter, and compliant. ScaleVAI automates document extraction for KYC/AML onboarding, executes autonomous 3-way invoice matching, and maintains cryptographic audit trails adhering to ADGM and DIFC standards.",
    systems: [
      { name: "KYC & Onboarding IDP", description: "Forensic document parsing across Emirates IDs, Trade Licenses, and corporate passports." },
      { name: "Autonomous 3-Way Matching", description: "Autonomous invoice reconciliation against POs and banking GL ledgers with zero manual touch." },
    ],
    metrics: [
      { value: "80%", label: "Onboarding speedup" },
      { value: "0", label: "Matching errors" },
      { value: "ADGM", label: "& DIFC ready" },
    ],
    colors: ["#334155", "#64748b"],
  },
];

export const industryHref = (slug: string): string => `/industries/${slug}`;

export const industryCopy = {
  systems: "Specialized AI Systems Deployed",
  explore: "Explore Industry",
} as const;
