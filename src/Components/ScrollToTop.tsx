import React from 'react';

import Fab from '@mui/material/Fab';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop = (): JSX.Element => (
  <Fab color='primary' aria-label='add'>
    <ArrowUpwardIcon />
  </Fab>
);

export default ScrollToTop;
