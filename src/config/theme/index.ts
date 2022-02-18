import { Palette, Theme, Typography } from '../../contexts/theme-context';

export const palettes: Palette = {
  mode: 'light',
  primary: {
    main: '#3393FF',
    dark: '#1955B7',
    light: '#D6F1FF',
    contrastText: '#fbfbfb',
  },
  secondary: {
    main: '#fd9d00',
    dark: '#B66200',
    light: '#FEF3CB',
    contrastText: '#fbfbfb',
  },
};

export const typography: Typography = {
  h1: 28,
  h2: 24,
  h3: 22,
  h4: 20,
  h5: 19,
  h6: 16,
  body: 15,
  subtitle: 13,
};

const theme: Theme = {
  palette: palettes,
  typography: typography,
};

export default theme;
