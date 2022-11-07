import { useEffect, useRef, useState } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { PRIMARY } from '../Constants/COLORS';
import { PLUS_JAKARTA } from '../Constants/FONTS';

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
  const [steppedValue, setSteppedValue] = useState(0);

  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry): void => {
        entry.isIntersecting
          ? entry.target.classList.add('addWidth', 'moveIcon')
          : entry.target.classList.remove('addWidth', 'moveIcon');
      });
    });

    progressBarRef.current && observer.observe(progressBarRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect((): void => {
    steppedValue !== value &&
      setTimeout((): void => {
        setSteppedValue(currentState => currentState + 1);
      }, 1000 / value);
  }, [steppedValue]);

  return (
    <Typography
      variant='h6'
      fontWeight={500}
      fontFamily={PLUS_JAKARTA}
      color='secondary'
      role='presentation'
      {...containerProps}
    >
      {label}
      <Stack direction='row' alignItems='center' mt={1} gap={1}>
        <Box
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          role='progressbar'
          ref={progressBarRef}
          sx={{
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
              backgroundColor: PRIMARY,
              boxSizing: 'border-box',
              borderRadius: '99px 0 0 99px',
            },
            '&.addWidth:before': {
              transition: 'width 1s ease-in-out',
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
            '&.moveIcon::after': {
              transition: 'left 1s ease-in-out',
              left: `${value}%`,
            },
          }}
        />
        <Typography
          color='text.secondary'
          variant='body2'
          fontWeight={600}
        >{`${steppedValue}%`}</Typography>
      </Stack>
    </Typography>
  );
};

export default LinearProgressBar;
