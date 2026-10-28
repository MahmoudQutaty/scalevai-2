export interface Service {
  slug: string;
  name: string;
  summary: string;
  deliverables: readonly string[];
  colors: readonly [string, string];
}

/** Broad engineering capabilities; named solution catalogue lives in solutions.ts. */
export const deliveryServices: readonly Service[] = [
  { slug: "ai-generative-ai", name: "AI & Generative AI", summary: "Put AI to work where it pays off, starting with a clear plan.", deliverables: ["AI readiness check and roadmap", "Assistants and chatbots, in English and Arabic", "Document, report and content generation", "Smart search over your own files"], colors: ["#1d4ed8", "#7c3aed"] },
  { slug: "ai-agents-automation", name: "AI Agents & Automation", summary: "Agents that do real work inside your systems, with a person in the loop where it matters.", deliverables: ["Custom agents for sales, finance, HR and ops", "Workflow and process automation", "Customer service and enquiry handling", "ERP and CRM connection"], colors: ["#0e7490", "#2563eb"] },
  { slug: "data-analytics", name: "Data Analytics", summary: "Turn the data you already have into decisions.", deliverables: ["Dashboards and business intelligence", "Data integration and cleanup", "Forecasting and predictive analytics", "Video analytics from existing cameras"], colors: ["#312e81", "#0ea5e9"] },
  { slug: "ar-vr-immersive-tech", name: "AR/VR & Immersive Tech", summary: "Let customers walk in before they walk in. Delivered with Vizion.", deliverables: ["AI-powered 3D virtual tours", "3D showrooms for stores and warehouses", "3D product and car showcases", "AR and VR for marketing and training"], colors: ["#86198f", "#2563eb"] },
  { slug: "custom-software-modernization", name: "Custom Software & Modernization", summary: "New apps and platforms, or old systems made new.", deliverables: ["Web and mobile apps", "Portals, platforms and custom CRMs", "Legacy system upgrades", "Cloud migration and integration"], colors: ["#155e75", "#4f46e5"] },
  { slug: "managed-services-support", name: "Managed Services & Support", summary: "We stay after go-live, so your systems keep delivering.", deliverables: ["Monitoring and support", "Updates, fixes and security patches", "Dedicated support team", "Quarterly performance reviews"], colors: ["#1e3a8a", "#0891b2"] },
];

