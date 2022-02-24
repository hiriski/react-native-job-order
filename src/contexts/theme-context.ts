import { createContext } from 'react';
import { Theme } from '@app/interfaces/theme';

const themeContext = createContext<Theme>({} as Theme);

export default themeContext;
