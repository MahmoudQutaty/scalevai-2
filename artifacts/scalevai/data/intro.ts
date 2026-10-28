export interface IntroTile { readonly title: string; readonly text: string; }
export interface IntroPhrase { readonly text: string; readonly group: number; }

export const introHeading = "ScaleVAI is an AI and digital engineering company based in Dubai. We help you";

export const introParagraph =
  "We help growing businesses across the UAE, the GCC and Africa use technology to save time, cut costs and grow. Our team brings decades of experience delivering technology for organisations around the world, with an engineering centre in Bangalore. We start with your business problem, not the technology, using ready-made products where they fit and building only what has to be built.";

export const introTiles: readonly IntroTile[] = [
  { title: "Build", text: "apps, platforms and custom software" },
  { title: "Automate", text: "AI and generative AI that take repetitive work off your team\u2019s plate" },
  { title: "Analyse", text: "data and dashboards that show what\u2019s really happening" },
  { title: "Immerse", text: "3D tours, virtual showrooms and AR/VR experiences" },
  { title: "Support", text: "we keep it all running after launch" },
];

export const introPhrases: readonly IntroPhrase[] = [
  { text: "BUILD APPS", group: 0 },
  { text: "BUILD PLATFORMS", group: 0 },
  { text: "BUILD CUSTOM SOFTWARE", group: 0 },
  { text: "AUTOMATE WITH AI", group: 1 },
  { text: "AUTOMATE ROUTINE WORK", group: 1 },
  { text: "ANALYSE YOUR DATA", group: 2 },
  { text: "ANALYSE YOUR BUSINESS", group: 2 },
  { text: "IMMERSE IN 3D TOURS", group: 3 },
  { text: "IMMERSE IN AR/VR", group: 3 },
  { text: "SUPPORT AFTER LAUNCH", group: 4 },
];
