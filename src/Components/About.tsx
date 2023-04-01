import React, { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { Box, useTheme } from '@mui/material';

import MyImage from './../assets/MyImage.webp';

import TypoH2Secondary800 from './TypoH2Secondary800';
import TypingEffectText from './TypingEffectText';

const Section1 = React.forwardRef(
  (_props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const theme = useTheme();

    useEffect(() => {
      const img = new Image();
      img.src = MyImage;
    }, []);

    return (
      <Box
        flex='0 0 100%'
        display='grid'
        alignItems='center'
        boxSizing='border-box'
        justifyContent='space-between'
        gridTemplateColumns={{ xs: 'auto', md: 'repeat(2,1fr)' }}
        sx={{ scrollSnapAlign: 'center' }}
        ref={ref}
      >
        <Box>
          <TypingEffectText
            textToAnimate='I&rsquo;m Fasal Mohammadh, a Web Developer.'
            typingSpeed={350}
            renderText={(text, props) => (
              <TypoH2Secondary800
                style={{ color: theme.palette.primary.main }}
                {...props}
              >
                {text}
              </TypoH2Secondary800>
            )}
          />

          <Typography
            fontWeight={500}
            mb={2}
            variant='body1'
            mt={{ xs: 2, md: 3 }}
            sx={{
              background: `linear-gradient(to top,${theme.palette.primary.main},${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              color: 'transparent',
              '--webkit-background-clip': 'text',
            }}
          >
            I&apos;m Fasal Mohammadh, shorty Fasal, and I&apos;m{' '}
            {Math.floor(
              (Date.now() -
                new Date('2000-02-02').setHours(0, 0, 0, 0).valueOf()) /
                (1000 * 60 * 60 * 24 * 365)
            )}{' '}
            years old. I am an IT professional with a higher national diploma.
            At the moment, I&apos;m a working as trainee web developer in
            DotTech Softwares.
          </Typography>
        </Box>
        <Box
          alignSelf='center'
          position='relative'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <svg
            viewBox='0 0 200 200'
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            id='shape'
          >
            <defs>
              <linearGradient id='gradient'>
                <stop offset='0%' stopColor={theme.palette.primary.main} />
                <stop offset='100%' stopColor={theme.palette.secondary.main} />
              </linearGradient>
            </defs>
            <path
              d='M38.3,-62C49.1,-52.7,56.8,-41.1,63.9,-28.4C71,-15.6,77.5,-1.8,73.5,9C69.5,19.8,55,27.4,44.4,36.8C33.7,46.2,26.9,57.2,16.9,62.4C6.9,67.7,-6.3,67,-17.4,62.3C-28.4,57.6,-37.4,48.9,-46,39.5C-54.6,30.2,-62.9,20.2,-68.7,7.3C-74.5,-5.5,-77.8,-21.3,-74.7,-36.7C-71.7,-52.1,-62.2,-67.1,-48.7,-75.1C-35.2,-83.2,-17.6,-84.2,-1.9,-81.3C13.8,-78.3,27.6,-71.3,38.3,-62Z'
              style={{
                fill: 'url(#gradient)',
                transform: 'translate(50%,50%)',
                width: '100%',
                height: '100%',
              }}
            />
          </svg>

          <img
            src={MyImage}
            alt='My Image'
            style={{
              borderRadius: '100%',
              aspectRatio: '1',
              maxWidth: '500px',
              backdropFilter: 'blur(.5px)',
            }}
          />
        </Box>
      </Box>
    );
  }
);

Section1.displayName = 'Section1';

export default React.memo(Section1);
