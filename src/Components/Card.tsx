import React from 'react';

import {
  Box,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperNav from './SwiperNav';

interface CardProps {
  title: string;
  desc: string;
  imgSrcset: string[];
  icons: string[];
}

const Card = ({ title, desc, imgSrcset, icons }: CardProps): JSX.Element => (
  <MuiCard
    color='primary'
    sx={{
      marginBlock: 1,
      height: 'calc(100% - 16px)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Swiper style={{ height: 200 }}>
      {imgSrcset.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <CardMedia
            component='img'
            src={imgSrc}
            alt='screenshots'
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </SwiperSlide>
      ))}
      <SwiperNav />
    </Swiper>
    <CardContent sx={{ mb: 2 }}>
      <Typography gutterBottom fontWeight={500}>
        {title}
      </Typography>
      <Typography color='text.secondary' fontWeight={500} variant='body2'>
        {desc}
      </Typography>
    </CardContent>
    <Stack direction='row' gap={1} mt='auto' justifyContent='flex-end' px={2}>
      {icons.map(icon => (
        <img
          src={icon}
          alt='icon'
          key={icon}
          style={{ width: '24px', aspectRatio: '1', borderRadius: 99 }}
        />
      ))}
    </Stack>
    <CardActions>
      <IconButton size='small' sx={{ ml: 'auto' }}>
        <GitHubIcon  />
      </IconButton>
    </CardActions>
  </MuiCard>
);

export default Card;
