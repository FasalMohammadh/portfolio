import React, { useEffect, useRef, useState } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';
import { Theme } from '@mui/material';

interface LinearProgressBarProps {
  value: number;
  iconURL: string;
  label: string;
  containerProps?: TypographyProps;
}

const LinearProgressBar = ({
  value,
  iconURL,
  label,
  containerProps,
}: LinearProgressBarProps) => {
  // const [steppedValue, setSteppedValue] = useState(0);

  const progressBarRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useEffect((): (() => void) => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.classList.contains('animate') && observer.disconnect();
          }
        });
      }
    );

    progressBarRef.current && observer.observe(progressBarRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // useEffect((): void => {
  //   steppedValue !== value &&
  //     setTimeout((): void => {
  //       setSteppedValue(currentState => currentState + 1);
  //     }, 1000 / value);
  // }, [steppedValue]);

  return (
    <Typography
      variant={isMobile ? 'body1' : 'h6'}
      fontWeight={500}
      fontFamily={PLUS_JAKARTA}
      color='secondary'
      role='presentation'
      {...containerProps}
    >
      {label}
      <Stack direction='row' alignItems='center' mt={{ xs: 0, md: 1 }} gap={1}>
        <Box
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          role='progressbar'
          ref={progressBarRef}
          sx={({
            palette: {
              primary: { main },
            },
          }) => ({
            flex: '1 1 0',
            height: '20px',
            backgroundColor: '#c8bcf8',
            borderRadius: '99px',
            position: 'relative',
            '&:before': {
              content: "''",
              position: 'absolute',
              width: 0,
              height: '100%',
              backgroundColor: main,
              boxSizing: 'border-box',
              borderRadius: '99px 0 0 99px',
            },
            '&.animate:before': {
              transition: 'width 1s ease-in-out 500ms',
              width: `${value}%`,
            },
            '&:after': {
              content: "''",
              backgroundImage: `url('${iconURL}')`,
              backgroundSize: '30px 30px',
              height: '30px',
              width: '30px',
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translate(-50%,-50%)',
              borderRadius: '99px',
            },
            '&.animate::after': {
              transition: 'left 1s ease-in-out 500ms',
              left: `${value}%`,
            },
          })}
        />
        <Typography
          color='text.secondary'
          variant='body2'
          fontWeight={600}
        >{`${value}%`}</Typography>
      </Stack>
    </Typography>
  );
};

export default LinearProgressBar;
