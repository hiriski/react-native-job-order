import { ButtonSize, Palette } from '@app/interfaces/theme';
import { createTheme } from '@config/theme';

export const getButtonColor = (color: keyof Pick<Palette, 'primary' | 'secondary'>, pressed: boolean): string => {
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

export const getButtonSize = (size: ButtonSize): number => {
  if (!size) {
    return 40;
  } else {
    switch (size) {
      case 'small':
        return 34;
      case 'medium':
        return 40;
      case 'large':
        return 52;
    }
  }
};
