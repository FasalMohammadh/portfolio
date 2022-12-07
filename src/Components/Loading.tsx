import Box from '@mui/material/Box';

const Loading = ({
  handleAnimationEnd,
}: {
  handleAnimationEnd: () => void;
}): JSX.Element => {
  return (
    <Box
      sx={theme => ({
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'grid',
        placeContent: 'center',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 1000,
      })}
    >
      <Box
        onAnimationEnd={handleAnimationEnd}
        sx={theme => ({
          aspectRatio: '1/1',
          background: `linear-gradient(0.25turn, ${theme.palette.secondary.main}, ${theme.palette.secondary.main}fe)`,
          animation: 'bouncy-loading 1.5s  linear forwards',
          animationDelay: '750ms',
          borderRadius: '999px',
          width: 0,
        })}
      />
    </Box>
  );
};

export default Loading;
