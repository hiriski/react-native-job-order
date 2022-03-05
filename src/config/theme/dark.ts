import { Palette } from '@app/interfaces/theme';
import { grey } from '@app/lib/theme/colors';

/**
 * Palette dark
 */
export const paletteDark: Pick<Palette, 'text' | 'background'> = {
  text: {
    primary: grey[100],
    secondary: grey[200],
    disabled: grey[300],
  },
  background: {
    default: grey[900],
    paper: '#0e0e0e',
  },
};
