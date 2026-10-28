/** Named solution catalogue supplied by the owner. Delivery capabilities remain in services.ts. */
export interface Solution {
  slug: string;
  name: string;
  summary: string;
  capabilities: readonly { name: string; description: string }[];
  deployment: string;
  colors: readonly [string, string];
}

export const solutions: readonly Solution[] = [
  {
    slug: "workforce-intelligence",
    name: "Workforce Intelligence",
    summary: "Ground-truth attendance and presence verification that eliminates card gaming, tailgating, and blind spots with real-time management dashboards and anomaly alerts.",
    capabilities: [
      { name: "Neural Presence", description: "Multi-camera verification across site access points." },
      { name: "Anti-Tailgating", description: "Eliminates badge sharing and buddy punching." },
      { name: "Real-Time Audits", description: "Multi-facility roster sync with instant anomaly alerts." },
    ],
    deployment: "8–12 wk deploy",
    colors: ["#1d4ed8", "#7c3aed"],
  },
  {
    slug: "immersive-showroom",
    name: "Immersive Showroom",
    summary: "Photorealistic 3D property and product experiences that convince remote and international buyers faster than flat photos or static floor plans.",
    capabilities: [
      { name: "Instant WebXR", description: "Zero-install web & mobile walkthroughs on any browser." },
      { name: "Customizer", description: "Real-time material, lighting & layout switching." },
      { name: "Higher Conversion", description: "3.2x higher remote off-plan buyer commitment." },
    ],
    deployment: "4–8 wk deploy",
    colors: ["#86198f", "#2563eb"],
  },
  {
    slug: "talent-intelligence",
    name: "Talent Intelligence",
    summary: "AI-powered candidate screening that delivers a ranked, qualified shortlist for high-volume, high-turnover roles in days instead of weeks.",
    capabilities: [
      { name: "Multilingual Parser", description: "Arabic & English CV parsing and credential verification." },
      { name: "Scoring Engine", description: "Objective rubric scoring aligned with role benchmarks." },
      { name: "65% Faster", description: "Slashes time-to-offer and recruiter administrative toil." },
    ],
    deployment: "4–6 wk deploy",
    colors: ["#047857", "#10b981"],
  },
  {
    slug: "revenue-cycle",
    name: "Revenue Cycle Management",
    summary: "AI-powered revenue cycle management that slashes claim denials and manual coding errors, recovering critical revenue that healthcare providers are owed.",
    capabilities: [
      { name: "Pre-Submission", description: "Claims validation against payer and regulation rules." },
      { name: "Coding Audits", description: "Automated ICD-10 & CPT coding discrepancy detection." },
      { name: "60% Less Rejections", description: "Substantial reduction in initial claim rejection overhead." },
    ],
    deployment: "8–14 wk deploy",
    colors: ["#b91c1c", "#7f1d1d"],
  },
  {
    slug: "people-assistant",
    name: "People Assistant",
    summary: "An enterprise AI assistant that resolves routine payroll, leave, policy, and onboarding queries instantly - freeing human resource teams for strategic priorities.",
    capabilities: [
      { name: "Omnichannel", description: "Native WhatsApp, Slack & Teams employee access." },
      { name: "Policy Grounding", description: "Instant answers grounded strictly in internal handbooks." },
      { name: "70% Ticket Drop", description: "Substantial reduction in Tier-1 routine ticket volume." },
    ],
    deployment: "3–5 wk deploy",
    colors: ["#0e7490", "#2563eb"],
  },
  {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation",
    summary: "Automation of high-volume manual processes - document extraction, supplier billing, 3-way reconciliation, and compliance validation - with strict auditability.",
    capabilities: [
      { name: "3-Way Matching", description: "Autonomous PO, receipt, and invoice validation." },
      { name: "Trade Extraction", description: "Complex customs documents and supplier bills processed in seconds." },
      { name: "Core ERP Sync", description: "Bi-directional sync with SAP, Oracle, and enterprise ERPs." },
    ],
    deployment: "6–10 wk deploy",
    colors: ["#155e75", "#4f46e5"],
  },
  {
    slug: "retail-intelligence",
    name: "Retail Intelligence",
    summary: "Real-time camera vision monitoring inventory shrinkage, stock-outs, and planogram non-compliance across retail footprints before it impacts margins.",
    capabilities: [
      { name: "Stock-Out Alerts", description: "Real-time inventory gap detection and automated reorders." },
      { name: "Planogram Audits", description: "Continuous layout compliance grading across store aisles." },
      { name: "Loss Prevention", description: "Proactive checkout and high-shrink zone monitoring." },
    ],
    deployment: "6–12 wk deploy",
    colors: ["#9d174d", "#db2777"],
  },
  {
    slug: "audience-intelligence",
    name: "Audience Intelligence",
    summary: "Edge AI that reads audience engagement and demographics in front of digital displays, serving the most relevant message dynamically instead of static playlists.",
    capabilities: [
      { name: "Edge Anonymous", description: "Zero biometric storage - fully anonymous local processing." },
      { name: "Sub-100ms CMS", description: "Dynamic ad triggering based on viewer engagement." },
      { name: "Telemetry", description: "Exact dwell time, impression and footfall conversion logs." },
    ],
    deployment: "4–8 wk deploy",
    colors: ["#312e81", "#0ea5e9"],
  },
  {
    slug: "business-efficiency-consulting",
    name: "Business Efficiency Consulting",
    summary: "Ongoing advisory that identifies operational bottlenecks and process improvement opportunities as we learn your enterprise, delivering compounding value.",
    capabilities: [
      { name: "Process Mining", description: "Deep operational flow audits across existing enterprise tools." },
      { name: "ROI Matrix", description: "Prioritized 30-day proof-of-value roadmap with clear metrics." },
      { name: "Governance", description: "Ongoing quarterly steering, model tuning, and SLA reviews." },
    ],
    deployment: "Ongoing retainer",
    colors: ["#334155", "#64748b"],
  },
  {
    slug: "virtual-experience",
    name: "Virtual Experience",
    summary: "Interactive 3D tours for hospitality venues, event spaces, and premium villas that drive direct booking conversion before guests ever set foot on site.",
    capabilities: [
      { name: "Universal WebXR", description: "Frictionless mobile, tablet, and desktop 3D walkthroughs." },
      { name: "Direct Booking CTA", description: "Direct reservation engine integration at key vista points." },
      { name: "28% Direct Uplift", description: "Measurable increase in high-ticket direct guest bookings." },
    ],
    deployment: "4–6 wk deploy",
    colors: ["#6d28d9", "#a855f7"],
  },
];

export const solutionHref = (slug: string): string => `/services/${slug}`;

export const solutionSourceHref = (slug: string): string =>
  `https://mahmoudqutaty.github.io/scalevai/solutions/${slug}.html`;

export const solutionCopy = {
  heading: "Challenges we solve.\nSound familiar?",
  capabilities: "Core Capabilities",
  explore: "Explore Solution",
  region: "Sovereign GCC",
} as const;
