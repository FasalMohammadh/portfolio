import { useEffect } from 'react';

import {
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
  TypographyProps,
} from '@mui/material';

import { PLUS_JAKARTA } from '../Constants/FONTS';

interface ProgressWithLabelProps extends LinearProgressProps {
  label: string;
  ContainerProps?: TypographyProps;
}

const ProgressWithLabel = ({
  label,
  ContainerProps,
  ...ProgressProps
}: ProgressWithLabelProps) => {
  return (
    <Typography
      variant='h6'
      fontWeight={500}
      fontFamily={PLUS_JAKARTA}
      color='secondary'
      {...ContainerProps}
    >
      {label}
      <Stack direction='row' alignItems='center' gap={2}>
        <LinearProgress
          variant='determinate'
          style={{ height: '10px', borderRadius: '40px', flexGrow: 1 }}
          {...ProgressProps}
        />{' '}
        <Typography variant='caption' color='text.secondary' fontWeight={600}>
          {ProgressProps.value}%
        </Typography>
      </Stack>
    </Typography>
  );
};

export default ProgressWithLabel;
