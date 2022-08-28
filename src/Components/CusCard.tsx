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
      <Box height="24px" position="relative" overflow="auto">
        <Typography
          color="text.secondary"
          fontWeight={500}
          className="cus-card-desc"
        >
          {desc}
        </Typography>
      </Box>
    </CardContent>
    <CardActions>
      {/* <Button variant="text" size="small">
        Share
      </Button> */}
      <Button variant="text" size="small">
        View Repository
      </Button>
    </CardActions>
  </Card>
);

export default CusCard;
