import { useEffect, useMemo, useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { styled } from '@mui/material';

import MyImage from './../assets/MyImage.webp';

import { Black, PRIMARY, SECONDARY } from '../Constants/COLORS';

import ContactMe from './ContactMe';
import TypoH2Secondary800 from './TypoH2Secondary800';
import TypingEffectText from './TypingEffectText';

import useIsMobile from '../Hooks/useIsMobile';

const CircleBorder = styled(Box)({
  borderRadius: '100%',
  border: '4px solid #ede7f6',
  boxShadow: '0 0 0 2px rgb(237 231 246/.1)',
  marginInline: 'auto',
  boxSizing: 'border-box',
});

const Section1 = () => {
  const isMobile = useIsMobile();

  const circleBorderRef = useRef<HTMLDivElement>(null);
  const circleBorder2Ref = useRef<HTMLDivElement>(null);

  const CirclePrimaryImg = useMemo(
    () =>
      styled('img')({
        borderRadius: '100%',
        aspectRatio: '1',
        filter: 'blur(.4px)',
        boxShadow: `inset 0 0 0 10px ${PRIMARY}5a`,
        border: `${isMobile ? '10px' : '40px'} solid ${PRIMARY}`,
        boxSizing: 'border-box',
      }),
    [isMobile]
  );

  useEffect((): (() => void) => {
    new Image().src = MyImage;

    const interSecObserverRing = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          setTimeout(
            (entry: IntersectionObserverEntry): void => {
              entry.isIntersecting
                ? entry.target.classList.add('add-padding')
                : entry.target.classList.remove('add-padding');
            },
            500,
            entry
          );
        });
      }
    );

    circleBorderRef.current &&
      interSecObserverRing.observe(circleBorderRef.current);
    circleBorder2Ref.current &&
      interSecObserverRing.observe(circleBorder2Ref.current);

    return (): void => {
      interSecObserverRing.disconnect();
    };
  }, []);

  return (
    <Grid2
      container
      alignItems='center'
      boxSizing='border-box'
      justifyContent='space-between'
      className='introduction-container'
      columns={2}
      minWidth={{ md: 'calc(100vh - 100px)' }}
    >
      <Grid2 md={1} xs={2} className='introduction-container__section1'>
        <TypingEffectText
          textToAnimate='I&rsquo;m Fasal Mohammadh, a Web Developer.'
          typingSpeed={350}
          renderText={(text, props) => (
            <TypoH2Secondary800
              style={{
                background: `linear-gradient(45deg, ${PRIMARY},${SECONDARY})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
              {...props}
            >
              {text}
            </TypoH2Secondary800>
          )}
        />

        <Typography
          color={Black[100]}
          fontWeight={500}
          mb={2}
          variant='body1'
          mt={{ xs: 2, md: 3 }}
        >
          I'm Fasal Mohammadh, shorty Fasal, and I'm{' '}
          {Math.floor(
            (Date.now() -
              new Date('2000-02-02').setHours(0, 0, 0, 0).valueOf()) /
              (1000 * 60 * 60 * 24 * 365)
          )}{' '}
          years old. I am an IT professional with a higher national diploma. At
          the moment, I'm a working as trainee web developer in DotTech
          Softwares.
        </Typography>
        {!isMobile && <ContactMe />}
      </Grid2>
      <Grid2
        md={1}
        xs={2}
        alignSelf='center'
        className='introduction-container__section2'
      >
        <CircleBorder
          ref={circleBorder2Ref}
          maxWidth={{ md: 'calc(100% - 100px)' }}
        >
          <CircleBorder ref={circleBorderRef}>
            <CirclePrimaryImg src={MyImage} alt='' />
          </CircleBorder>
        </CircleBorder>
      </Grid2>
    </Grid2>
  );
};

export default Section1;
