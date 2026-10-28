export interface Foundation {
  name: string;
  description: string;
  included: readonly string[];
}

export const foundationsHeading = "Built on proven foundations.\nWe don’t start from zero.";
export const foundationTabNote = "Tested building blocks";
export const foundationTitleSuffix = " foundations";
export const foundationsIncludedHeading = "What’s included from day one";
export const foundationsPartnersHeading = "Products & partners we bring";
export const foundationPartners: readonly string[] = ["DocMate", "Droidal", "Vizion", "CRITI AI"];

export const foundations: readonly Foundation[] = [
  { name: "Security", description: "Single sign-on, role-based access, encryption and a full audit trail.", included: ["Single sign-on", "Role-based access", "Encryption", "Full audit trail"] },
  { name: "Platform", description: "Multi-tenant architecture and configurable workflows.", included: ["Multi-tenant architecture", "Configurable workflows"] },
  { name: "Business", description: "Payments, email, SMS and push notifications built in.", included: ["Payments", "Email", "SMS", "Push notifications"] },
  { name: "AI", description: "Agents, knowledge bases and search grounded in your own data.", included: ["AI agents", "Knowledge bases", "Search on your data"] },
];
