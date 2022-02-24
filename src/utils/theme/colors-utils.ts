import { PaletteText } from '@app/interfaces/theme';
import { createTheme } from '@config/theme';

export const getTextColor = (color: keyof PaletteText): string => {
  const { palette } = createTheme();
  switch (color) {
    case 'primary':
      return palette.text.primary;
    case 'secondary':
      return palette.text.secondary;
    case 'disabled':
      return palette.text.disabled;
    default:
      return palette.text.primary;
  }
};
