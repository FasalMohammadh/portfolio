import React, { useContext, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { List, ListItemButton, useTheme } from '@mui/material';

import DarkThemeIcon from '@mui/icons-material/Brightness4';
import LightThemeIcon from '@mui/icons-material/Brightness7';

import CodeLogo from '../assets/code.svg';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';
import ThemeContext from '../Context/ThemeContext';

const Header = (): JSX.Element => {
  const { setTheme, theme } = useContext(ThemeContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const themeChoose = useTheme();
  const isMobile = useIsMobile();

  const handleClose = (): void => {
    setIsDrawerOpen(false);
  };
  return (
    <AppBar
      position='fixed'
      color='transparent'
      sx={{ backgroundColor: themeChoose.palette.background.default }}
    >
      <Toolbar>
        <Box
          display={{ xs: 'grid', md: 'flex' }}
          gap={{ xs: 2, md: 4 }}
          p={{ md: 2 }}
          py={2}
          width={1}
          gridTemplateColumns={{ xs: '1fr auto 1fr', md: 'unset' }}
          alignItems='center'
        >
          <img
            src={CodeLogo}
            alt='braces logo'
            style={{
              width: ' clamp(2.5rem, -0.625rem + 10vw, 5rem)',
              objectFit: 'cover',
              color: themeChoose.palette.primary.main,
            }}
          />
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight={600}
            fontFamily={PLUS_JAKARTA}
          >
            Web Developer
          </Typography>

          {isMobile ? (
            <Box textAlign='right'>
              <IconButton
                sx={{ aspectRatio: '1' }}
                onClick={() => setIsDrawerOpen(true)}
              >
                <Stack
                  width='100%'
                  height='100%'
                  alignItems='center'
                  gap={0.5}
                  justifyContent='center'
                >
                  <Box width='24px' height='2px' />
                  <Box width='24px' height='2px' />
                  <Box width='24px' height='2px' />
                </Stack>
              </IconButton>

              <Drawer anchor='right' open={isDrawerOpen} onClose={handleClose}>
                <List sx={{ padding: 4 }}>
                  <ListItemButton
                    component={Link}
                    href='#about-me'
                    onClick={handleClose}
                  >
                    About Me
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    href='#my-expertise'
                    onClick={handleClose}
                  >
                    Expertise
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    href='#projects'
                    onClick={handleClose}
                  >
                    Projects
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    href='#contact-me'
                    onClick={handleClose}
                  >
                    Contact Me
                  </ListItemButton>
                </List>
              </Drawer>
            </Box>
          ) : (
            <Stack ml='auto' gap={4} direction='row' alignItems='center'>
              <Link href='#about-me'>About Me</Link>
              <Link href='#my-expertise'>Expertise</Link>
              <Link href='#projects'>Projects</Link>
              <Link href='#contact-me'>Contact Me</Link>
              <IconButton
                onClick={() =>
                  setTheme(currentTheme =>
                    currentTheme === 'dark' ? 'light' : 'dark'
                  )
                }
              >
                {theme === 'dark' ? (
                  <LightThemeIcon color='primary' />
                ) : (
                  <DarkThemeIcon color='primary' />
                )}
              </IconButton>
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
