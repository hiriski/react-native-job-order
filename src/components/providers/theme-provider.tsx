import React, { FC, ReactNode, useState } from 'react';
import themeContext, { Theme }  from '../../contexts/theme-context';

interface Props {
  children: ReactNode;
}

const initialValues = {
  palette: {
    primary: {
      primary: '#fbfbfb',
      secondary: 'fbfbfb',
      text: '#fbfbfb',
    },
    secondary: {
      primary: '#fbfbfb',
      secondary: '#fbfbfb',
      text: '#fbfbfb',
    },
  },
};

const ThemeProvider: FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(initialValues);
  return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
