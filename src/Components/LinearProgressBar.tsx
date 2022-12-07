import React, { useContext, useEffect, useId, useRef } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/material';

import ThemeContext from '../Context/ThemeContext';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';

interface LinearProgressBarProps {
  value: number;
  iconURL: string;
  label: string;
  containerProps?: TypographyProps;
}

const animateValue = (value: number) => {
  let stringToBeReturn = '';
  for (let i = 0; i <= value; i++)
    stringToBeReturn += `${i}% {
        counter-increment:count ${i};
      }`;

  return keyframes`${stringToBeReturn}100% {
    counter-increment:count ${value};
  }`;
};

const LinearProgressBar = ({
  value,
  iconURL,
  label,
  containerProps,
}: LinearProgressBarProps) => {
  const { theme } = useContext(ThemeContext);

  const id = useId();

  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarValueRef = useRef<HTMLParagraphElement>(null);

  const isMobile = useIsMobile();

  useEffect((): (() => void) => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.contains('animate') && observer.disconnect();
            entry.target.classList.add('animate');
          }
        });
      }
    );

    progressBarRef.current && observer.observe(progressBarRef.current);
    progressBarValueRef.current &&
      observer.observe(progressBarValueRef.current);

    return () => {
      observer.disconnect();
    };
  }, [theme]);

  return (
    <Stack {...containerProps}>
      <Typography
        variant={isMobile ? 'body1' : 'h6'}
        fontWeight={500}
        fontFamily={PLUS_JAKARTA}
        color='secondary'
        role='presentation'
        id={`Progressbar-label${id}`}
      >
        {label}
      </Typography>
      <Stack direction='row' alignItems='center' mt={{ xs: 0, md: 1 }} gap={1}>
        <Box
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          role='progressbar'
          aria-labelledby={`Progressbar-label${id}`}
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
          ref={progressBarValueRef}
          color='text.secondary'
          variant='body2'
          fontWeight={600}
          sx={{
            '::after': { content: '"%"' },
            '&.animate::before': {
              content: 'counter(count)',
              animation: `${animateValue(
                value
              )} 1000ms steps(${value}) forwards 500ms`,
              counterReset: 'count 0',
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default React.memo(LinearProgressBar);
