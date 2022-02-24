import { Palette } from '@app/interfaces/theme';
import { createTheme } from '@config/theme';

export const getBackgroundColorMenuItem = (
  color: keyof Pick<Palette, 'primary' | 'secondary'>,
  pressed: boolean,
): string => {
  const { palette } = createTheme();
  const { primary, secondary } = palette;
  switch (color) {
    case 'primary':
      if (!pressed) {
        return primary.main;
      } else {
        return primary.dark;
      }
    case 'secondary':
      if (!pressed) {
        return secondary.main;
      } else {
        return secondary.dark;
      }
    default:
      return palette.primary.main;
  }
};
