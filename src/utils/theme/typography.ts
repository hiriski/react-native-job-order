import { Typography } from '../../contexts/theme-context';
import theme from '../../config/theme';

export const getTypographyFontSize = (variant: keyof Typography): number => {
  const { typography } = theme;
  switch (variant) {
    case 'h1':
      return typography.h1;
    case 'h2':
      return typography.h2;
    case 'h3':
      return typography.h3;
    case 'h4':
      return typography.h4;
    case 'h5':
      return typography.h5;
    case 'h6':
      return typography.h6;
    default:
      return typography.body;
  }
};
