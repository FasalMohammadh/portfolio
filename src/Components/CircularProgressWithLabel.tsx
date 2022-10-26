import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Stack,
  Typography,
  StackProps,
} from '@mui/material';

import { PLUS_JAKARTA } from '../Constants/FONTS';

interface CircularProgressWithLabelProps extends CircularProgressProps {
  value: number;
  label: string;
  ContainerProps?: StackProps;
}

const CircularProgressWithLabel = (props: CircularProgressWithLabelProps) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      gap={2}
      justifyContent='space-between'
      {...props.ContainerProps}
    >
      <Typography
        variant='h6'
        fontWeight={500}
        fontFamily={PLUS_JAKARTA}
        color='secondary'
      >
        {props.label}
      </Typography>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
          width: 'fit-content',
        }}
      >
        <CircularProgress variant='determinate' size='5rem' {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            fontWeight={500}
            variant='caption'
            component='div'
            color='text.secondary'
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default CircularProgressWithLabel;
