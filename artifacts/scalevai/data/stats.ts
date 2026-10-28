export interface Stat { readonly value: number; readonly suffix: string; readonly label: string; }

export const stats: readonly Stat[] = [
  { value: 50, suffix: "+", label: "Platforms delivered by our engineering team" },
  { value: 5, suffix: "M+", label: "Users on platforms we\u2019ve engineered" },
  { value: 99.95, suffix: "%", label: "Uptime across managed platforms" },
  { value: 20, suffix: "+ years", label: "Leadership experience on programmes worldwide" },
];
