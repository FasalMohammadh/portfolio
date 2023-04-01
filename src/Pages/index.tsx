import React, { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Header from './../Components/Header';
import About from '../Components/About';
import Expertise from '../Components/Expertise';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Loading from './../Components/Loading';
import BackToTop from './../Components/BackToTop';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeLink, setActiveLink] = useState(NAV_ITEM.About);

  const container = useRef<HTMLDivElement>(null);
  const sections = useRef<Record<NAV_ITEM, HTMLDivElement | null>>({
    About: null,
    Contact: null,
    Expertise: null,
    Projects: null,
  }).current;

  useEffect(() => {
    console.log('asda');
    const x = new IntersectionObserver(
      entries => {
        console.log(entries.length);
        entries.forEach(entry => {
          console.log(entry.isIntersecting);
        });
      },
      { root: container.current }
    );
    if (
      sections.About !== null &&
      sections.Contact !== null &&
      sections.Expertise !== null &&
      sections.Projects !== null
    ) {
      x.observe(sections.About);
      x.observe(sections.Contact);
      x.observe(sections.Expertise);
      x.observe(sections.Projects);
    }

    return () => {
      x.disconnect();
    };
  }, []);

  function scrollToSection(navItem: NAV_ITEM) {
    setActiveLink(navItem);
    container.current?.scrollTo({
      behavior: 'smooth',
      top: sections[navItem]?.offsetTop,
    });
  }

  if (isLoading)
    return <Loading handleAnimationEnd={() => setIsLoading(false)} />;

  return (
    <Stack height='100vh'>
      <Header activeLink={activeLink} scrollToSection={scrollToSection} />

      <Stack
        px={{ md: 2, lg: 4 }}
        overflow='auto'
        flex='1 1 0'
        position='relative'
        sx={{ scrollSnapType: 'y mandatory' }}
        ref={container}
      >
        <About ref={ref => (sections.About = ref)} />
        <Expertise ref={ref => (sections.Expertise = ref)} />
        <Projects ref={ref => (sections.Projects = ref)} />
        <Contact ref={ref => (sections.Contact = ref)} />
      </Stack>
      <BackToTop />
    </Stack>
  );
};

enum NAV_ITEM {
  'About' = 'About',
  'Expertise' = 'Expertise',
  'Projects' = 'Projects',
  'Contact' = 'Contact',
}

export { NAV_ITEM };
export default MainPage;

{
  /* <Box display={isLoading ? 'none' : undefined} height={1}>
        <Header ref={headerHandleRef} /> */
}

{
  /* <Box
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
        </Box> */
}

{
  /* </Box> */
}
