export type SliderAlignment = "center" | "start";

export function wrapSliderIndex(index: number, positions: number): number {
  return positions > 0 ? ((index % positions) + positions) % positions : 0;
}

export function sliderPositionCount(
  count: number,
  align: SliderAlignment,
  viewportWidth: number,
  contentLeft: number,
  cardWidth: number,
  gap: number,
): number {
  if (count < 1) return 0;
  if (align === "center" || cardWidth <= 0) return count;
  const visible = Math.max(1, Math.floor((viewportWidth - contentLeft) / (cardWidth + gap)));
  return Math.max(1, count - visible + 1);
}

export function sliderOffset(
  align: SliderAlignment,
  viewportWidth: number,
  cardWidth: number,
  gap: number,
  index: number,
): number {
  const start = align === "center" ? (viewportWidth - cardWidth) / 2 : 0;
  return start - index * (cardWidth + gap);
}
