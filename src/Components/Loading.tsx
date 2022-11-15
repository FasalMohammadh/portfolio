import React from 'react';

import Box from '@mui/material/Box';

const Loading = ({
  handleAnimationEnd,
}: {
  handleAnimationEnd: () => void;
}): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'grid',
        placeContent: 'center',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 1000,
      }}
    >
      <Box
        onAnimationEnd={handleAnimationEnd}
        sx={{
          aspectRatio: '1/1',
          background: 'linear-gradient(0.25turn, #7051ef, #7051effe)',
          animation: 'bouncy-loading 1.5s  linear forwards',
          animationDelay: '750ms',
          borderRadius: '999px',
          width: 0,
        }}
      />
    </Box>
  );
};

export default Loading;
