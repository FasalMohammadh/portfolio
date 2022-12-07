import React, { useContext } from 'react';

import IconButton from '@mui/material/IconButton';
import DarkThemeIcon from '@mui/icons-material/Brightness4';
import LightThemeIcon from '@mui/icons-material/Brightness7';

import ThemeContext from '../Context/ThemeContext';

const ThemeIcon = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <IconButton
      onClick={(): void => {
        setTheme(currentTheme => {
          localStorage.setItem(
            'theme',
            currentTheme === 'dark' ? 'light' : 'dark'
          );
          return currentTheme === 'dark' ? 'light' : 'dark';
        });
      }}
    >
      {theme === 'dark' ? (
        <LightThemeIcon color='primary' />
      ) : (
        <DarkThemeIcon color='primary' />
      )}
    </IconButton>
  );
};

export default React.memo(ThemeIcon);
