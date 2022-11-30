import React from 'react';

import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

import ReactIcon from './../assets/Technologies/React.webp';
import NodeIcon from './../assets/Technologies/NodeJS.webp';
import JavaIcon from './../assets/Technologies/Java.webp';
import HTMLIcon from './../assets/Technologies/HTML.webp';
import CSSIcon from './../assets/Technologies/CSS.webp';
import JavascriptIcon from './../assets/Technologies/Javascript.webp';
import PHPIcon from './../assets/Technologies/Php.webp';

import Card from './Card';
import TypoH2Secondary800 from './TypoH2Secondary800';

const Section3 = React.forwardRef(
  (_props, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
      <Box sx={{ scrollMarginTop: '100px' }} id='projects' ref={ref}>
        <TypoH2Secondary800>Projects</TypoH2Secondary800>
        <Box>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              900: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            <SwiperSlide style={{ height: 'auto' }}>
              <Card
                icons={[ReactIcon, NodeIcon, HTMLIcon, CSSIcon, JavascriptIcon]}
                title='My Virtual Shop'
                desc='Is the final semester Individual project is an e-commerce website for mobile phone sellers where they can create an shop and list their products so users can easily view them if the want they can filter by price by phone specs by place ect..., to find the desired product at a comfortable price'
                //ReactJs, NodeJs, ExpressJs, Mysql, Css, HTML, Bootstrap
                imgSrcset={[
                  'https://picsum.photos/id/1/400/250.webp',
                  'https://picsum.photos/id/7/400/250.webp',
                  'https://picsum.photos/id/7/400/250.webp',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: 'auto' }}>
              <Card
                icons={[PHPIcon, HTMLIcon, CSSIcon, JavascriptIcon]}
                title='PostIt'
                desc='A Social Media Web Application which is a Group Project created in the 3rd Semester in this website users can send friend request to others, they can accept or reject it, can view friends posts, can like and dislike them, can chat with friends and update their information'
                //PHP,JavaScript,HTML,CSS,SASS,Ajax,Mysql Bootstrap'
                imgSrcset={[
                  'https://picsum.photos/id/2/400/250.webp',
                  'https://picsum.photos/id/4/400/250.webp',
                  'https://picsum.photos/id/6/400/250.webp',
                ]}
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: 'auto' }}>
              <Card
                icons={[JavaIcon, HTMLIcon, CSSIcon, JavascriptIcon]}
                title='Rent Portal'
                desc='An Advertisement Website which is a Group Project created in the 3rd Semester where users can post their houses, shops, apartments for rent, they can also update or delete their advertisements so others can view it by filtering and if they want more information they can contact owner'
                // Java, JavaScript, HTML, CSS, Ajax, Mysql
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
  }
);

Section3.displayName = 'section3';

export default React.memo(Section3);
