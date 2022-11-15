import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { List, ListItemButton } from '@mui/material';

import CodeLogo from '../assets/code.webp';

import { Black } from '../Constants/COLORS';
import { PLUS_JAKARTA } from '../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';

const Header = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useIsMobile();

  const handleClose = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar sx={{ boxShadow: 'none', bgcolor: 'white' }} position='fixed'>
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
            }}
          />
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight={600}
            color={Black[100]}
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
                  <Box width='24px' height='2px' bgcolor={Black[100]} />
                  <Box width='24px' height='2px' bgcolor={Black[100]} />
                  <Box width='24px' height='2px' bgcolor={Black[100]} />
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
            <Stack ml='auto' gap={4} direction='row'>
              <Link href='#about-me'>About Me</Link>
              <Link href='#my-expertise'>Expertise</Link>
              <Link href='#projects'>Projects</Link>
              <Link href='#contact-me'>Contact Me</Link>
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
