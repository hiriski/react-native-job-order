import { createContext } from 'react';
import theme from '../config/theme';

type PaletteMode = 'light' | 'dark';

export interface Typography {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
  body: number;
  subtitle: number;
}

export interface Palette {
  mode: PaletteMode;
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
}

export interface Theme {
  palette: Palette;
  typography: Typography;
}

export interface ThemeContext {
  palette: Palette;
  typography: Typography;
}

const themeContext = createContext<ThemeContext>(theme);

export default themeContext;
