import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperNav from "./SwiperNav";

interface CusCardProps {
  title: string;
  desc: string;
  imgSrcs: string[];
}

const CusCard = ({ title, desc, imgSrcs }: CusCardProps): JSX.Element => (
  <Box py={2}>
    <Card color="primary">
      <Swiper>
        {imgSrcs.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <CardMedia
              component="img"
              src={imgSrc}
              alt=""
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
        <SwiperNav />
      </Swiper>
      <CardContent>
        <Typography gutterBottom fontWeight={500}>
          {title}
        </Typography>
        <Box
          component={Typography}
          color="text.secondary"
          fontWeight={500}
          variant="body2"
        >
          {desc}
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small">
          View Repository
        </Button>
      </CardActions>
    </Card>
  </Box>
);

export default CusCard;
