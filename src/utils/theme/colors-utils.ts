import { PaletteText } from '@app/interfaces/theme';
import { palettes } from '@config/theme';

export const getTextColor = (color: keyof PaletteText): string => {
  switch (color) {
    case 'primary':
      return palettes.text.primary;
    case 'secondary':
      return palettes.text.secondary;
    case 'disabled':
      return palettes.text.disabled;
    default:
      return palettes.text.primary;
  }
};
