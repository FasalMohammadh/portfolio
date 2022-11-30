import Fab from '@mui/material/Fab';
import { styled, keyframes } from '@mui/material';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import React, { useEffect, useRef } from 'react';

const bounce = keyframes`
0%{
  transform:translateY(-40px);
  box-shadow: 0 50px 0 10px rgb(0 0 0/.3);
}
20%,60%,100%{
  transform:translateY(0);
  box-shadow: none;

}
40%{
  transform:translateY(-20px);
   box-shadow: 0 50px 0 10px rgb(0 0 0/.3);
}
80%{
  transform:translateY(-10px);
   box-shadow:  0 50px 0 10px rgb(0 0 0/.3);
}`;

const FabStyled = styled(Fab)({
  visibility: 'hidden',
  position: 'fixed',
  '&.visible': {
    // animation: `${bounce} 1000ms ease-out forwards`,
    visibility: 'visible',
    bottom: 20,
    right: 20,
  },
});

const BackToTop = () => {
  const backToTop = useRef<HTMLButtonElement>(null);
  useEffect((): (() => void) => {
    window.addEventListener('scroll', shouldShowBackToTop);
    return () => {
      window.removeEventListener('scroll', shouldShowBackToTop);
    };
  }, []);

  function shouldShowBackToTop(this: Window): void {
    this.scrollY > 1000
      ? backToTop.current?.classList.add('visible')
      : backToTop.current?.classList.remove('visible');
  }

  return (
    <FabStyled
      onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      ref={backToTop}
      color='primary'
      aria-label='scroll to top'
    >
      <ArrowUpwardIcon />
    </FabStyled>
  );
};

export default BackToTop;
