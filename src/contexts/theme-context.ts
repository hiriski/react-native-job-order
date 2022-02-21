import { createContext } from 'react';
import theme from '@config/theme';
import { Theme } from '@app/interfaces/theme';

const themeContext = createContext<Theme>(theme);

export default themeContext;
