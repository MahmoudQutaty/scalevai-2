/** Hero partner carousel content retained from the approved homepage reference. */

export interface HeroPartner {
  name: string;
  logo: string;
  description: string;
  keyWord: string;
  phrase: string;
}

/** Hero trust strip cards and description box texts (reference P array), in card order. */
export const heroPartners: readonly HeroPartner[] = [
  { name: "DocMate", logo: "/docmate.png", description: "Healthcare EMR and revenue cycle management for providers.", keyWord: "EMR", phrase: "plus AI medical scribe and billing automation" },
  { name: "Droidal", logo: "/droidal.png", description: "Healthcare AI agents for front-desk and billing work.", keyWord: "Agents", phrase: "taking repetitive work off your team’s plate" },
  { name: "Vizion", logo: "/vizion.png", description: "Immersive 3D tours and virtual showrooms for property and retail.", keyWord: "3D", phrase: "tours, showrooms and AR/VR experiences" },
  { name: "CRITI AI", logo: "/criti-ai.png", description: "An AI learning companion with personal support for every student.", keyWord: "AI", phrase: "tutoring and mentoring, less admin for schools" },
  { name: "Minebrat", logo: "/minebrat.avif", description: "A technology partner we bring to buyers across the region.", keyWord: "GCC", phrase: "and Africa reach, with local contracts and support" },
  { name: "Wellnooz", logo: "/wellnooz.png", description: "An integrative medicine platform we deploy and support.", keyWord: "Care", phrase: "live in weeks, supported after launch" },
];
