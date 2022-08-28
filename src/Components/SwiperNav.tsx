import { useEffect, useState } from "react";

import { Fab, IconButton, Stack } from "@mui/material";

import NavigatePrevIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircleIcon from "@mui/icons-material/Circle";

import { useSwiper } from "swiper/react";

import { BLUE } from "../Constants/COLORS";

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
    <Stack
      position="absolute"
      top="50%"
      right="0"
      zIndex={1}
      sx={{
        transform: "translateY(-50%)",
      }}
      alignItems="center"
      p={2}
      boxSizing="border-box"
      maxHeight="100%"
    >
      <Fab
        onClick={handleClickPrev}
        disabled={isBeginning}
        sx={{ aspectRatio: "1" }}
      >
        <NavigatePrevIcon />
      </Fab>
      {Array(swiper.slides.length)
        .fill("1")
        .map((_item, index) => (
          <IconButton onClick={(): void => handleClickDot(index)} key={index}>
            <CircleIcon htmlColor={BLUE[100]} fontSize="small" />
          </IconButton>
        ))}
      <Fab onClick={handleClickNext} disabled={isEnd} sx={{ aspectRatio: 1 }}>
        <NavigateNextIcon />
      </Fab>
    </Stack>
  );
};

export default SwiperNav;
