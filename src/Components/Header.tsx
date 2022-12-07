import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import ThemeContext from '../Context/ThemeContext';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';

import ThemeIcon from './ThemeIcon';

const StyledLink = styled(Link)(({ theme }) => {
  return {
    fontWeight: 600,
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    paddingBlockEnd: 10,
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: 4,
      background: `linear-gradient(to right,${theme.palette.primary.main},${theme.palette.secondary.main})`,
      bottom: 0,
      left: 0,
      borderRadius: 99,
      transform: 'translateX(-110%)',
      transition: 'transform 200ms ease-in-out',
    },
    '&:hover::after': {
      transform: 'translateX(0)',
    },
    '&.active::after': {
      transform: 'translateX(0)',
    },
  };
});

export interface HeaderHandle {
  toggleActiveClass: () => void;
}

const Header = React.forwardRef<HeaderHandle>((_props, ref): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const themeChoose = useTheme();
  const isMobile = useIsMobile();

  const aboutMeRef = useRef<HTMLAnchorElement>(null);
  const expertiseRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const contactMeRef = useRef<HTMLAnchorElement>(null);

  const toggleActiveClass = useCallback((): void => {
    if (
      aboutMeRef.current === null ||
      expertiseRef.current === null ||
      projectsRef.current === null ||
      contactMeRef.current === null
    )
      return undefined;

    const hash = window.location.hash.split('#')[1];

    aboutMeRef.current.classList.remove('active');
    expertiseRef.current.classList.remove('active');
    projectsRef.current.classList.remove('active');
    contactMeRef.current.classList.remove('active');

    switch (hash) {
      case 'about-me':
        aboutMeRef.current.classList.add('active');
        break;
      case 'my-expertise':
        expertiseRef.current.classList.add('active');
        break;
      case 'projects':
        projectsRef.current.classList.add('active');
        break;
      case 'contact-me':
        contactMeRef.current.classList.add('active');
        break;
      //no default
    }
  }, []);

  useImperativeHandle(ref, () => ({
    toggleActiveClass,
  }));

  useEffect(() => {
    window.addEventListener('hashchange', toggleActiveClass);

    return () => {
      window.removeEventListener('hashchange', toggleActiveClass);
    };
  }, [theme, toggleActiveClass]);

  const handleClose = (): void => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: themeChoose.palette.background.default,
        maxWidth: '1440px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
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
          <svg
            version='1.0'
            width='clamp(2.5rem, -0.625rem + 10vw, 5rem)'
            viewBox='0 0 218.000000 166.000000'
          >
            <g
              transform='translate(0.000000,166.000000) scale(0.100000,-0.100000)'
              fill={themeChoose.palette.primary.main}
              stroke='none'
            >
              <path
                d='M745 1623 c-29 -7 -583 -379 -628 -422 -21 -20 -52 -65 -70 -101
l-32 -64 -3 -189 c-4 -218 5 -261 68 -350 36 -50 75 -80 312 -239 294 -198
346 -228 396 -228 40 0 99 24 131 53 47 43 61 92 61 217 0 176 3 172 -260 352
-118 81 -223 150 -232 153 -10 4 -18 12 -18 18 0 7 87 70 193 140 338 225 326
211 327 392 0 132 -10 171 -52 212 -55 53 -123 72 -193 56z'
              />
              <path
                d='M1305 1612 c-47 -23 -89 -65 -104 -105 -6 -16 -11 -81 -11 -145 0
-134 15 -180 70 -222 18 -14 122 -86 232 -160 109 -74 200 -139 201 -145 1 -5
-90 -72 -203 -147 -113 -76 -220 -150 -239 -164 -56 -44 -71 -92 -71 -226 0
-127 7 -158 48 -202 55 -59 139 -80 206 -52 29 12 483 310 496 325 3 3 18 13
34 21 52 26 134 115 163 176 28 59 28 60 28 269 l0 210 -28 57 c-16 32 -48 77
-71 100 -24 24 -170 128 -325 231 -259 174 -286 189 -334 193 -38 4 -63 0 -92
-14z'
              />
            </g>
          </svg>

          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight={600}
            fontFamily={PLUS_JAKARTA}
            color='primary'
          >
            Web Developer
          </Typography>

          {isMobile ? (
            <Box textAlign='right'>
              <IconButton
                sx={{ aspectRatio: '1' }}
                onClick={() => setIsDrawerOpen(true)}
                aria-label='Primary Navigation'
                aria-expanded={isDrawerOpen}
                aria-controls='PrimaryNavigation'
              >
                <MenuIcon htmlColor={theme === 'dark' ? 'white' : 'black'} />
              </IconButton>

              <Drawer
                keepMounted
                anchor='left'
                open={isDrawerOpen}
                onClose={handleClose}
                id='PrimaryNavigation'
              >
                <Stack gap={2} direction='column' alignItems='flex-start' p={4}>
                  <StyledLink
                    href='#about-me'
                    ref={aboutMeRef}
                    onClick={handleClose}
                  >
                    About Me
                  </StyledLink>
                  <StyledLink
                    href='#my-expertise'
                    ref={expertiseRef}
                    onClick={handleClose}
                  >
                    Expertise
                  </StyledLink>
                  <StyledLink
                    href='#projects'
                    ref={projectsRef}
                    onClick={handleClose}
                  >
                    Projects
                  </StyledLink>
                  <StyledLink
                    href='#contact-me'
                    ref={contactMeRef}
                    onClick={handleClose}
                  >
                    Contact Me
                  </StyledLink>
                  <ThemeIcon />
                </Stack>
              </Drawer>
            </Box>
          ) : (
            <Stack ml='auto' gap={4} direction='row' alignItems='center'>
              <StyledLink href='#about-me' ref={aboutMeRef}>
                About Me
              </StyledLink>
              <StyledLink href='#my-expertise' ref={expertiseRef}>
                Expertise
              </StyledLink>
              <StyledLink href='#projects' ref={projectsRef}>
                Projects
              </StyledLink>
              <StyledLink href='#contact-me' ref={contactMeRef}>
                Contact Me
              </StyledLink>
              <ThemeIcon />
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default React.memo(Header);
