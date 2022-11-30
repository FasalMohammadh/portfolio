import React, { useState } from 'react';

import { Box, IconButton } from '@mui/material';

import NavigatePrevIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useSwiper } from 'swiper/react';

const SwiperNav = (): JSX.Element => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  const handleClickNext = (): void => {
    swiper.slideNext();
    setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
  };

  const handleClickPrev = (): void => {
    swiper.slidePrev();
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleClickDot = (index: number) => {
    swiper.slideTo(index);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Box
      position='absolute'
      sx={{ transform: 'translateX(-50%)' }}
      zIndex={1}
      left='50%'
      bottom='10px'
      display='flex'
      gap='.5em'
      alignItems='center'
    >
      <IconButton
        style={{ backgroundColor: 'white' }}
        onClick={handleClickPrev}
        disabled={isBeginning}
        className='swiper-nav-control'
      >
        <NavigatePrevIcon sx={{ fontSize: '14px' }} />
      </IconButton>
      {Array(swiper.slides.length)
        .fill('1')
        .map((_item, index) => (
          <Box
            onClick={(): void => handleClickDot(index)}
            key={index}
            width='14px'
            height='14px'
            bgcolor='white'
            sx={({
              palette: {
                primary: { main },
              },
            }) => ({
              cursor: 'pointer',
              borderRadius: '100%',
              boxShadow:
                swiper.activeIndex === index ? `0 0 0 3px ${main}` : 'none',
            })}
          />
        ))}
      <IconButton
        style={{ backgroundColor: 'white' }}
        onClick={handleClickNext}
        disabled={isEnd}
      >
        <NavigateNextIcon sx={{ fontSize: '14px' }} />
      </IconButton>
    </Box>
  );
};

export default SwiperNav;
