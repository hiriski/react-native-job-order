export const createSpacing = (unit: number): number => {
  const spacingUnit = 4;
  if (!unit) {
    return 0;
  }

  return unit * spacingUnit;
};
