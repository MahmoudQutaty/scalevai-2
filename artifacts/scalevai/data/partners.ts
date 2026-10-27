/** Initial "Products & partners" columns in the Industries mega menu (reference #m2). */
export const megaPartners: readonly string[] = ["DocMate", "Droidal", "Wellnooz", "CRITI AI"];
export const megaProducts: readonly string[] = ["Smart Retail", "Smart Factory AI", "AI 3D Tours", "Workforce Intelligence"];

export interface HeroPartner {
  name: string;
  description: string;
  keyWord: string;
  phrase: string;
}

/** Hero trust strip cards and description box texts (reference P array), in card order. */
export const heroPartners: readonly HeroPartner[] = [
  { name: "DocMate", description: "Healthcare EMR and revenue cycle management for providers.", keyWord: "EMR", phrase: "plus AI medical scribe and billing automation" },
  { name: "Droidal", description: "Healthcare AI agents for front-desk and billing work.", keyWord: "Agents", phrase: "taking repetitive work off your team’s plate" },
  { name: "Vizion", description: "Immersive 3D tours and virtual showrooms for property and retail.", keyWord: "3D", phrase: "tours, showrooms and AR/VR experiences" },
  { name: "CRITI AI", description: "An AI learning companion with personal support for every student.", keyWord: "AI", phrase: "tutoring and mentoring, less admin for schools" },
  { name: "Minebrat", description: "A technology partner we bring to buyers across the region.", keyWord: "GCC", phrase: "and Africa reach, with local contracts and support" },
  { name: "Wellnooz", description: "An integrative medicine platform we deploy and support.", keyWord: "Care", phrase: "live in weeks, supported after launch" },
];
