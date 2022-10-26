import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Header from './Components/Header';
import DefaultTheme from './Themes/DefaultTheme';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Loading from './Components/Loading';

import 'swiper/css';
import 'swiper/css/pagination';
import useIsMobile from './Hooks/useIsMobile';

const App = () => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);

  // const animationBox1 = useRef<HTMLDivElement>(null!);

  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useLayoutEffect(() => {
    // window.addEventListener("scroll", animate);
    // return () => window.removeEventListener("scroll", animate);
    // canvasRef.current.addEventListener("mousemove", handleMouseMove);
  }, []);

  // const animate = useCallback((): void => {
  //   console.log(animationBox1.current.getBoundingClientRect().top);
  //   if (
  //     animationBox1.current.getBoundingClientRect().top <
  //     window.innerHeight -
  //       animationBox1.current.getBoundingClientRect().height / 2
  //   ) {
  //     animationBox1.current.classList.add("animateBox1");
  //   }
  // }, []);

  const handleMouseMove = (e: MouseEvent): void => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // const Code = document.getElementById("code");

    // const grd = ctx!.createLinearGradient(0, 0, 300, 0);
    // grd.addColorStop(0, PRIMARY);
    // grd.addColorStop(1, SECONDARY);

    const rect = canvas.getBoundingClientRect();
    const x =
      ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
    const y =
      ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
    ctx!.beginPath();
    ctx!.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx!.fill();
    // ctx!.drawImage(Code, x, y);
    // ctx!.fillStyle = grd;
    // ctx.beginPath();
    // ctx!.arc(50, 50, 8, 0, 2 * Math.PI);
    // ctx!.fill();
    // setTimeout((): void => {
    //   ctx!.clearRect(x, y, 1, 1);
    // }, 1000);
  };

  return (
    <>
      {isLoading && (
        <Loading
          handleAnimationEnd={() => {
            setIsLoading(false);
          }}
        />
      )}
      <Box display={isLoading ? 'none' : undefined}>
        <ThemeProvider theme={DefaultTheme}>
          <header>
            <Header />
          </header>

          <main
            style={{
              marginTop: 100,
              paddingInline: isMobile ? '18px' : '56px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4em',
            }}
          >
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </main>

          <footer>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4100727503137!2d80.4369519143389!3d7.307742815577671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f8808d3ee6c69c0!2s6MV28C5Q%2B3MR!5e0!3m2!1sen!2slk!4v1661699086851!5m2!1sen!2slk'
              width='100%'
              height='450'
              style={{ border: '0' }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </footer>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default App;
