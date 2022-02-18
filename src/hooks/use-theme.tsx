import { useContext } from 'react';
import { themeContext } from '../contexts';

const useTheme = () => {
  const theme = useContext(themeContext);
  return theme;
};

export default useTheme;
