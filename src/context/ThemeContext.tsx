import { createContext } from 'react';
import { IThemeProviderProps } from 'Types/theme';

export const ThemeContext = createContext<IThemeProviderProps>({
  isLight: true,
  setLight: () => {},
});
