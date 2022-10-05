import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(0.25turn, #7051ef, #7051effe)',
          animation: 'bouncy-loading 1.5s linear forwards',
          borderRadius: '999px',
          width: 0,
          height: 0,
        }}
      />
    </Box>
  );
};

export default Loading;
