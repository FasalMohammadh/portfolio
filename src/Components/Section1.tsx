import { Box, styled, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import MyImage from "./../assets/MyImage.webp";

import { Black, PRIMARY } from "../Constants/COLORS";
import TypoH2Secondary800 from "./TypoH2Secondary800";
import ContactMe from "./ContactMe";

const CircleBorder = styled(Box)({
  width: "fit-content",
  borderRadius: "100%",
  border: "1px solid #ede7f6",
  padding: "32px",
  boxShadow: "0 0 0 2px rgb(237 231 246/.1)",
  marginInline: "auto",
});

const CirclePrimaryImg = styled("img")({
  borderRadius: "100%",
  border: `40px solid ${PRIMARY}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "1",
  filter: "blur(.4px)",
  position: "relative",
  overflow: "hidden",
  boxShadow: `inset 0 0 0 10px ${PRIMARY}5a,0 0 0 10px ${PRIMARY}5a`,
  objectFit: "cover",
  objectPosition: "top",
  width: "300px",
});

const Section1 = () => {
  return (
    <Grid2
      container
      alignItems="center"
      boxSizing="border-box"
      justifyContent="space-between"
      px={7}
    >
      <Grid2 lg={6} xs={12} className="item1-home" rowSpacing={{ xs: 4 }}>
        <TypoH2Secondary800 zIndex="100">
          I'm Fasal Mohammadh,a
          <div style={{ color: PRIMARY }}>Web Developer</div>
        </TypoH2Secondary800>
        <Typography color={Black[100]} fontWeight={500} mb={2}>
          I'am Fasal Mohammadh,I'm{" "}
          {Math.floor(
            (Date.now() - new Date("2000-02-02").getTime()) /
              (1000 * 60 * 60 * 24 * 365)
          )}{" "}
          years old Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Velit facilis maxime, non tempora tempore natus id cum aperiam dolor
          accusamus. Corporis necessitatibus dolorem officiis expedita quibusdam
          aut fugit nobis illo.
        </Typography>
        <ContactMe />
      </Grid2>
      <Grid2 lg={6} xs={12} alignSelf="center">
        <CircleBorder>
          <CircleBorder>
            <CirclePrimaryImg src={MyImage} alt="" />
          </CircleBorder>
        </CircleBorder>
      </Grid2>
    </Grid2>
  );
};

export default Section1;
