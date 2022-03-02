import React, { FC, ReactNode, useState, useCallback, useEffect, useMemo } from 'react';
import ThemeContext from '@contexts/theme-context';
import { createTheme } from '@config/theme';
import { useAppSelector } from '@app/store/hook';
import { Theme } from '@app/interfaces/theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }: Props) => {
  const { mode } = useAppSelector((state) => state.common);
  const theme = useMemo<Theme>(() => createTheme(mode), [mode]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
