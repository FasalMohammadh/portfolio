import React from 'react';

import { Typography, TypographyProps } from '@mui/material';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';

const TypoH2Secondary800 = (props: TypographyProps) => {
  const isMobile = useIsMobile();

  return (
    <Typography
      variant={isMobile ? 'h4' : 'h3'}
      fontFamily={PLUS_JAKARTA}
      fontWeight={800}
      color='secondary'
      mb={2}
      {...props}
    />
  );
};

export default TypoH2Secondary800;
