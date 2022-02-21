import { Typography } from '@app/interfaces/theme';
import theme from '@config/theme';

interface ReturnTypographyFontSize {
  fontSize: number;
  fontFamily: string;
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
}

const fontBold = 'PlusJakartaSans-ExtraBold';
const fontSemiBold = 'PlusJakartaSans-Medium';

export const getTypographyFontSize = (variant: keyof Typography): ReturnTypographyFontSize => {
  const { typography } = theme;
  switch (variant) {
    case 'h1':
      return {
        fontSize: typography.h1,
        fontFamily: fontBold,
        fontWeight: '600',
      };
    case 'h2':
      return {
        fontSize: typography.h2,
        fontFamily: fontBold,
        fontWeight: '600',
      };
    case 'h3':
      return {
        fontSize: typography.h3,
        fontFamily: fontBold,
        fontWeight: '600',
      };
    case 'h4':
      return {
        fontSize: typography.h4,
        fontFamily: fontBold,
        fontWeight: '600',
      };
    case 'h5':
      return {
        fontSize: typography.h5,
        fontFamily: fontBold,
        fontWeight: '600',
      };
    case 'h6':
      return {
        fontSize: typography.h6,
        fontFamily: fontBold,
        fontWeight: '600',
      };
    case 'subtitle':
      return {
        fontSize: typography.subtitle,
        fontFamily: fontSemiBold,
        fontWeight: '400',
      };
    default:
      return {
        fontSize: typography.body,
        fontFamily: fontSemiBold,
        fontWeight: '400',
      };
  }
};
