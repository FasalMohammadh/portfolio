import { createContext } from 'react';

import { PaletteMode, Theme } from '@mui/material';

type ThemeContextType = {
  theme: PaletteMode;
  setTheme: React.Dispatch<React.SetStateAction<PaletteMode>>;
  muiTheme: Theme | null;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => console.info('dark theme selected'),
  muiTheme: null,
});

export default ThemeContext;
