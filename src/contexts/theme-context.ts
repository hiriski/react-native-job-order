import { createContext, Dispatch, SetStateAction } from 'react';

export interface Theme {
  palette: {
    primary: {
      primary: string;
      secondary: string;
      text: string;
    };
    secondary: {
      primary: string;
      secondary: string;
      text: string;
    };
  };
}

export interface ThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const themeContext = createContext<ThemeContext>({} as ThemeContext);

export default themeContext;
