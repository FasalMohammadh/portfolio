type Palette = {
  PRIMARY: string;
  SECONDARY: string;
  TEXT_PRIMARY: string;
  BACKGROUND: string;
};

export const LIGHT_THEME_PALETTE: Readonly<Palette> = {
  PRIMARY: '#012137',
  SECONDARY: '#0B5E8E',
  TEXT_PRIMARY: '#20333D',
  BACKGROUND: '#FCFCFC',
};

export const DARK_THEME_PALETTE: Readonly<Palette> = {
  PRIMARY: '#057dcd',
  SECONDARY: '#43b0f1',
  TEXT_PRIMARY: '#e8eef1',
  BACKGROUND: '#121212',
};
