import React, { FC, ReactNode } from 'react';
import ThemeContext from '../../contexts/theme-context';
import theme from '../../config/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }: Props) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
