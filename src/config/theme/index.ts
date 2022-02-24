import { palette, typography, shape } from './base';
import { paletteLight } from './light';
import { paletteDark } from './dark';

import { PaletteMode, Theme } from '@app/interfaces/theme';

export const createTheme = (mode?: PaletteMode): Theme => ({
  palette: {
    ...palette,
    background: mode !== 'dark' ? paletteLight.background : paletteDark.background,
    text: mode !== 'dark' ? paletteLight.text : paletteDark.text,
  },
  typography,
  shape,
});
