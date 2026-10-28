export interface WayToWork {
  title: string;
  description: string;
  footer: string;
}

export const waysToWorkHeading = "Ways to work with us";

export const waysToWork: readonly WayToWork[] = [
  { title: "Product Pods", description: "We own the outcome. A cross-functional team takes end-to-end responsibility.", footer: "Outcome-owned delivery" },
  { title: "Managed Delivery", description: "We own the scope. Fixed programmes delivered to plan and budget.", footer: "Scope-owned delivery" },
  { title: "Team Extension", description: "You own delivery, we add capability. Specialists embedded in your team.", footer: "Capability on demand" },
  { title: "Ready Products", description: "Start with a proven product where it fits and go live in weeks, not quarters.", footer: "Live in weeks" },
  { title: "Custom Build", description: "We build only what has to be built, in phases, with working software every few weeks.", footer: "Built to fit" },
  { title: "AI Readiness Check", description: "A clear roadmap for where AI pays off in your business, before you commit.", footer: "Plan first" },
  { title: "Managed Support", description: "We stay after go-live: monitoring, updates, a dedicated team and quarterly reviews.", footer: "Long-term partnership" },
];
