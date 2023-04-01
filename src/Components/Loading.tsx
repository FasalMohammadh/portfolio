import Box from '@mui/material/Box';
import { keyframes } from '@mui/material';

interface LoadingProps {
  handleAnimationEnd: () => void;
}

const bouncyLoadingAnimation = keyframes`
  5%,35% {
    width: 40px;
  }
  40%, 70% {
    width: 120px;
  }
  100% {
    width: 150vmax ;
  }`;

function Loading({ handleAnimationEnd }: LoadingProps) {
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
          animation: `${bouncyLoadingAnimation} 1.5s  linear forwards`,
          borderRadius: '999px',
          willChange: 'width',
        })}
      />
    </Box>
  );
}

export default Loading;
