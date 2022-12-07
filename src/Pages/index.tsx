import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';

import Header, { HeaderHandle } from './../Components/Header';
import Section1 from './../Components/Section1';
import Section2 from './../Components/Section2';
import Section3 from './../Components/Section3';
import Section4 from './../Components/Section4';
import Loading from './../Components/Loading';
import BackToTop from './../Components/BackToTop';

import 'swiper/css';
import 'swiper/css/pagination';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const headerHandleRef = useRef<HeaderHandle>(null);

  useEffect((): (() => void) => {
    const updateHashOnScroll = () => {
      if (
        section1Ref.current === null ||
        section2Ref.current === null ||
        section3Ref.current === null ||
        section4Ref.current === null
      )
        return undefined;

      const allSections: HTMLDivElement[] = [
        section1Ref.current,
        section2Ref.current,
        section3Ref.current,
        section4Ref.current,
      ];

      allSections.forEach(section => {
        if (
          section.getBoundingClientRect().top > 0 &&
          section.getBoundingClientRect().top <= 150
        ) {
          window.history.replaceState(null, '', `#${section.id}`);
          headerHandleRef.current?.toggleActiveClass();
        }
      });
    };
    document.addEventListener('scroll', updateHashOnScroll);
    return () => {
      document.removeEventListener('scroll', updateHashOnScroll);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <Loading
          handleAnimationEnd={() => {
            setIsLoading(false);
          }}
        />
      )}
      <Box display={isLoading ? 'none' : undefined}>
        <Header ref={headerHandleRef} />

        <Box
          component='main'
          sx={{
            maxWidth: { sm: 'min(80%,600px)', md: '1400px' },
            marginInline: { sm: 'auto' },
            marginTop: '100px',
            paddingInline: { xs: '18px', md: '56px' },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '2em', md: '4em' },
            paddingBlockEnd: '2em',
          }}
        >
          <Section1 ref={section1Ref} />
          <Section2 ref={section2Ref} />
          <Section3 ref={section3Ref} />
          <Section4 ref={section4Ref} />
        </Box>

        <BackToTop />
      </Box>
    </>
  );
};

export default MainPage;
