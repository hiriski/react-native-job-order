import { Theme } from '@/interfaces/theme';
import { useContext } from 'react';
import { themeContext } from '../contexts';

interface UseTheme extends Theme {}

const useTheme = (): UseTheme => {
  const theme = useContext(themeContext);
  return theme;
};

export default useTheme;
