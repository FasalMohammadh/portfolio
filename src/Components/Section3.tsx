import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from '../Hooks/useIsMobile';

import CusCard from './CusCard';
import TypoH2Secondary800 from './TypoH2Secondary800';

const Section3 = () => {
  const isMobile = useIsMobile();

  return (
    <Box minWidth={{ md: 'calc(100vh - 100px)' }}>
      <TypoH2Secondary800>Projects</TypoH2Secondary800>
      <Box>
        <Swiper slidesPerView={isMobile ? 1 : 3} spaceBetween={32}>
          <SwiperSlide>
            <CusCard
              title='My Virtual Shop'
              desc='Is the final semester Individual project created by
              utilizing technologies like ReactJs, NodeJs, ExpressJs, Mysql, Css, HTML, Bootstrap'
              imgSrcset={[
                'https://picsum.photos/id/1/400/250.webp',
                'https://picsum.photos/id/7/400/250.webp',
                'https://picsum.photos/id/7/400/250.webp',
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CusCard
              title='PostIt'
              desc='A Social Media Web Application which is a Group Project created in the 3rd Semester by utilizing technologies like PHP,JavaScript,HTML,CSS,SASS,Ajax,Mysql'
              imgSrcset={[
                'https://picsum.photos/id/2/400/250.webp',
                'https://picsum.photos/id/4/400/250.webp',
                'https://picsum.photos/id/6/400/250.webp',
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CusCard
              title='Rent Portal'
              desc='An Advertisement Website which is a Group Project created in the 3rd Semester by utilizing technologies like Java,JavaScript,HTML,CSS,Ajax,Mysql'
              imgSrcset={[
                'https://picsum.photos/id/2/400/250.webp',
                'https://picsum.photos/id/4/400/250.webp',
                'https://picsum.photos/id/6/400/250.webp',
              ]}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Section3;
