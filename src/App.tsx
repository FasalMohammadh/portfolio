import { useMemo, useState } from 'react';

import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';

import ThemeContext from './Context/ThemeContext';

import { DARK_THEME_PALETTE, LIGHT_THEME_PALETTE } from './Constants/COLORS';
import { MONTSERRAT, PLUS_JAKARTA } from './Constants/FONTS';

import MainPage from './Pages';

const App = () => {
  const prefersColorScheme: PaletteMode = useMediaQuery(
    '(prefers-color-scheme:dark)'
  )
    ? 'dark'
    : 'light';

  const userPreferredTheme: PaletteMode | null =
    localStorage.getItem('theme') === 'dark'
      ? 'dark'
      : localStorage.getItem('theme') === 'light'
      ? 'light'
      : null;

  const [theme, setTheme] = useState<PaletteMode>(
    userPreferredTheme ?? prefersColorScheme
  );

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette:
          theme === 'dark'
            ? {
                primary: { main: DARK_THEME_PALETTE.PRIMARY },
                secondary: { main: DARK_THEME_PALETTE.SECONDARY },
                text: { primary: DARK_THEME_PALETTE.TEXT_PRIMARY },
                background: { default: DARK_THEME_PALETTE.BACKGROUND },
                mode: 'dark',
              }
            : {
                primary: { main: LIGHT_THEME_PALETTE.PRIMARY },
                secondary: { main: LIGHT_THEME_PALETTE.SECONDARY },
                text: { primary: LIGHT_THEME_PALETTE.TEXT_PRIMARY },
                background: { default: LIGHT_THEME_PALETTE.BACKGROUND },
                mode: 'light',
              },
        typography: {
          allVariants: {
            fontFamily: MONTSERRAT,
          },
        },
        components: {
          MuiLink: {
            styleOverrides: {
              root: { fontFamily: PLUS_JAKARTA },
            },
          },
          MuiButton: {
            defaultProps: {
              variant: 'contained',
              size: 'large',
            },
            styleOverrides: {
              root: {
                textTransform: 'none',
                transition: 'all 200ms ease-in-out',
                borderRadius: '20px',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              },
            },
          },
        },
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, muiTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline enableColorScheme />
        <MainPage />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
