import React, { FC, ReactNode, useState } from 'react';
import ThemeContext from '@contexts/theme-context';
import { createTheme } from '@config/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }: Props) => {
  const [theme] = useState(createTheme('light'));
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
