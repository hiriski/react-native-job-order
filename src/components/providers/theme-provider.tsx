import React, { FC, ReactNode, useState } from 'react';
import ThemeContext from '@contexts/theme-context';
import themeConfig from '@config/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }: Props) => {
  const [theme] = useState(themeConfig)
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
