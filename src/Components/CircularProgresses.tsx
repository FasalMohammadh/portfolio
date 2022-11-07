import { useRef, useState, useEffect } from 'react';

import { Box, styled } from '@mui/material';

import { Black } from '../Constants/COLORS';

import { Expertise } from './Section2';

type CircularProgressesProps = {
  progresses: Expertise[];
};

const STROKE_WIDTH: number = 30;

const SVG = styled('svg')({
  width: '100%',
  height: '100%',
});

const Circle = styled('circle')(props => ({
  strokeLinecap: 'round',
  fill: 'transparent',
  strokeWidth: props.strokeWidth,
}));

const ProgressBarTrack = styled(Box)({
  backgroundColor: '#fff',
  zIndex: '-1',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '100%',
  aspectRatio: '1',
  boxShadow: `0 0 2px ${STROKE_WIDTH}px #dddddd,0 0 2px ${STROKE_WIDTH}px #dddddd, inset 0 0 2px 0 #dddddd`,
  filter: 'contrast(-10px)',
});

const CircularProgresses = ({
  progresses,
}: CircularProgressesProps): JSX.Element => {
  const [radius, setRadius] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect((): void => {
    if (containerRef.current)
      setRadius(containerRef.current.clientWidth / 2 - STROKE_WIDTH / 2);
  }, [containerRef]);

  return (
    <Box
      position='relative'
      ref={containerRef}
      sx={{ height: '100%', transform: 'rotate(-.25turn)', width: '100%' }}
    >
      {progresses.map(({ iconURL, label, value }, index) => (
        <Box
          key={label}
          width='100%'
          height='100%'
          position='absolute'
          top={0}
          left={0}
          sx={{ aspectRatio: '1' }}
        >
          <SVG>
            <defs>
              <linearGradient id={`GradientColor${index}`}>
                <stop
                  offset='0%'
                  stop-color={`hsl(${
                    Math.floor(Math.random() * 360 - 1) + 1
                  } 50% 65% / ${Math.random()})`}
                />
                <stop
                  offset='100%'
                  stop-color={`hsl(${
                    Math.floor(Math.random() * 360 - 1) + 1
                  } 50% 65% / ${Math.random()})`}
                />
              </linearGradient>
            </defs>
            <Circle
              stroke={`url(#GradientColor${index})`}
              cx='50%'
              cy='50%'
              r={radius - index * STROKE_WIDTH}
              id={`progressbar${index}`}
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={2 * Math.PI * (radius - index * STROKE_WIDTH)}
              strokeDashoffset={
                (1 - value / 100) *
                (2 * Math.PI * (radius - index * STROKE_WIDTH))
              }
            />
            <text fill={Black[100]}>
              <textPath
                dominant-baseline='central'
                href={`#progressbar${index}`}
              >
                {`${label} ${value}%`}
              </textPath>
            </text>
          </SVG>
          <ProgressBarTrack
            width={(radius - index * STROKE_WIDTH) * 2 - STROKE_WIDTH}
            className='progress-container__track'
          />
        </Box>
      ))}
    </Box>
  );
};

export default CircularProgresses;
