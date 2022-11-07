import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperNav from './SwiperNav';
import { Black } from '../Constants/COLORS';

interface CusCardProps {
  title: string;
  desc: string;
  imgSrcset: string[];
}

const CusCard = ({ title, desc, imgSrcset }: CusCardProps): JSX.Element => (
  <Box py={2}>
    <Card color='primary'>
      <Swiper>
        {imgSrcset.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <CardMedia
              component='img'
              src={imgSrc}
              alt=''
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
        ))}
        <SwiperNav />
      </Swiper>
      <CardContent>
        <Typography gutterBottom fontWeight={500}>
          {title}
        </Typography>
        <Typography color='text.secondary' fontWeight={500} variant='body2'>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size='small' sx={{ ml: 'auto' }}>
          <GitHubIcon htmlColor={Black[100]} />
        </IconButton>
      </CardActions>
    </Card>
  </Box>
);

export default CusCard;
