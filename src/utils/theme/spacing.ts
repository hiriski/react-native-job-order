export const createSpacing = (spacing: number): number => {
  const spacingUnit = 4;
  if (!spacing) {
    return 0;
  }

  return spacing * spacingUnit;
};
