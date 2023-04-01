import React from 'react';

import { Box, Stack } from '@mui/material';

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
  (_props, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Box
      flex='0 0 100%'
      sx={{ scrollSnapAlign: 'center' }}
      id='projects'
      ref={ref}
    >
      <TypoH2Secondary800>Projects</TypoH2Secondary800>
      <Stack
        direction='row'
        width={1}
        overflow='auto'
        gap={2}
        sx={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map(data => (
          <Card
            data={data}
            sx={{
              flex: { xs: '0 0 100%', md: '1 1 0' },
              scrollSnapAlign: 'center',
            }}
            key={data.title}
          />
        ))}
      </Stack>
    </Box>
  )
);

const cards = [
  {
    icons: [ReactIcon, NodeIcon, HTMLIcon, CSSIcon, JavascriptIcon],
    title: 'My Virtual Shop',
    desc: 'Is the final semester Individual project is an e-commerce website for mobile phone sellers where they can create an shop and list their products so users can easily view them if the want they can filter by price by phone specs by place etc..., to find the desired product at a comfortable price',
    href: 'https://github.com/FasalMohammadh/MyVirtualShop',
  },
  {
    icons: [PHPIcon, HTMLIcon, CSSIcon, JavascriptIcon],
    title: 'PostIt',
    desc: 'A Social Media Web Application which is a Group Project created in the 3rd Semester in this website users can send friend request to others, they can accept or reject it, can view friends posts, can like and dislike them, can chat with friends and update their information',
    href: 'https://github.com/FasalMohammadh/PostIt',
  },
  {
    icons: [JavaIcon, HTMLIcon, CSSIcon, JavascriptIcon],
    title: 'Rent Portal',
    desc: 'An Advertisement Website which is a Group Project created in the 3rd Semester where users can post their houses, shops, apartments for rent, they can also update or delete their advertisements so others can view it by filtering and if they want more information they can contact owner',
    href: 'https://github.com/mmushfique/RentOnline',
  },
];

Section3.displayName = 'section3';

export default React.memo(Section3);
