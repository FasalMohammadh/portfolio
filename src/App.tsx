import {
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";

import { useForm, ValidationError } from "@formspree/react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import SendIcon from "@mui/icons-material/Send";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import RectangleIcon from "@mui/icons-material/Crop75";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import MyImage from "./assets/MyImage.webp";
import Code from "./assets/code.webp";

import { PRIMARY, SECONDARY, TEXTSECONDARY } from "./Constants/COLORS";
import { PLUSJAKARTA } from "./Constants/FONTS";

import Header from "./Components/Header";
import DefaultTheme from "./Components/DefaultTheme";
import ContactMe from "./Components/ContactMe";
import TypoH2Secondary800 from "./Components/TypoH2Secondary800";
import LinearProgressWithLabel from "./Components/LinearProgressWithLabel";
import CircularProgressWithLabel from "./Components/CircularProgressWithLabel";
import IconLink from "./Components/IconLink";
import ContactMeSocialMedia from "./Components/ContactMeSocialMedia";
import SwiperNav from "./Components/SwiperNav";
import CusCard from "./Components/CusCard";

import "swiper/css";
import "swiper/css/pagination";

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
  boxShadow: `inset 0 0 2px 10px rgb(${PRIMARY}/.1),0 0 2px 10px rgb(${PRIMARY}/.1)`,
  objectFit: "cover",
  objectPosition: "top",
  width: "300px",
});

const App = () => {
  // const animationBox1 = useRef<HTMLDivElement>(null!);

  const [focusIconColor, setFocusIconColor] = useState<"primary" | "info">(
    "info"
  );

  const canvasRef = useRef<HTMLCanvasElement>(null!);

  const [state, handleSubmit] = useForm("mrgdzkkp");
  const [progressType, setProgressType] = useState<"Linear" | "Circular">(
    "Linear"
  );

  const Component =
    progressType === "Linear"
      ? LinearProgressWithLabel
      : CircularProgressWithLabel;

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
    const ctx = canvas.getContext("2d");
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
    <Box sx={{ scrollSnapType: "y mandatory", overflowY: "auto" }}>
      <ThemeProvider theme={DefaultTheme}>
        <header>
          <Header />
        </header>

        <main>
          <Stack>
            <Grid2
              container
              alignItems="center"
              boxSizing="border-box"
              justifyContent="space-between"
              px={7}
            >
              <Grid2
                lg={6}
                xs={12}
                className="item1-home"
                rowSpacing={{ xs: 4 }}
              >
                <TypoH2Secondary800 zIndex="100">
                  I'm Fasal Mohammadh,a
                  <div style={{ color: PRIMARY }}>Web Developer</div>
                </TypoH2Secondary800>
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

            <Box
              boxSizing="border-box"
              px={7}
              sx={{ scrollSnapAlign: "start", height: "100vh" }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <TypoH2Secondary800 mb={3}>My Expertise</TypoH2Secondary800>
                <Stack gap={2} direction="row">
                  <IconButton
                    sx={{ fontSize: "3em", aspectRatio: 1 }}
                    onClick={() => setProgressType("Circular")}
                  >
                    <DataUsageIcon
                      fontSize="inherit"
                      color={`${
                        progressType === "Circular" ? "primary" : "secondary"
                      }`}
                    />
                  </IconButton>
                  <IconButton
                    sx={{ fontSize: "3em" }}
                    onClick={() => setProgressType("Linear")}
                  >
                    <RectangleIcon
                      fontSize="inherit"
                      color={`${
                        progressType === "Linear" ? "primary" : "secondary"
                      }`}
                    />
                  </IconButton>
                </Stack>
              </Stack>

              <Grid2 container spacing={10}>
                <Grid2 lg={6}>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    color="primary"
                    mb={2}
                  >
                    FrontEnd
                  </Typography>
                  <Stack gap={4}>
                    <Component label="React" value={50} />
                    <Component label="HTML" value={90} />
                    <Component label="CSS" value={75} />
                    <Component label="JavaScript" value={50} />
                  </Stack>
                </Grid2>
                <Grid2 lg={6}>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    color="primary"
                    mb={2}
                  >
                    BackEnd
                  </Typography>
                  <Stack gap={4}>
                    <Component label="Node Js" value={50} />
                    <Component label="Express" value={50} />
                    <Component label="Java" value={60} />
                    <Component label="MYSQL" value={70} />
                  </Stack>
                </Grid2>
              </Grid2>
            </Box>

            <Box px={7} sx={{ scrollSnapAlign: "start", height: "100vh" }}>
              <TypoH2Secondary800>Projects</TypoH2Secondary800>
              <Box maxHeight="100%" overflow="hidden">
                <Swiper slidesPerView={3} spaceBetween={32}>
                  <SwiperSlide>
                    <CusCard
                      title="My Virtual Shop"
                      desc="Is the final semester Individual project created by
                        utilizing technologies like ReactJs, NodeJs, ExpressJs, Mysql, Css, HTML, Bootstrap"
                      imgSrcs={[
                        "https://picsum.photos/id/1/400/250.webp",
                        "https://picsum.photos/id/7/400/250.webp",
                        "https://picsum.photos/id/7/400/250.webp",
                      ]}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CusCard
                      title="PostIt"
                      desc="A Social Media Web Application which is a Group Project created in the 3rd Semester by utilizing technologies like PHP,JavaScript,HTML,CSS,SASS,Ajax,Mysql"
                      imgSrcs={[
                        "https://picsum.photos/id/2/400/250.webp",
                        "https://picsum.photos/id/4/400/250.webp",
                        "https://picsum.photos/id/6/400/250.webp",
                      ]}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CusCard
                      title="Rent Portal"
                      desc="An Advertisement Website which is a Group Project created in the 3rd Semester by utilizing technologies like Java,JavaScript,HTML,CSS,Ajax,Mysql"
                      imgSrcs={[
                        "https://picsum.photos/id/2/400/250.webp",
                        "https://picsum.photos/id/4/400/250.webp",
                        "https://picsum.photos/id/6/400/250.webp",
                      ]}
                    />
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Box>

            <Box px={7} sx={{ scrollSnapAlign: "start", height: "100vh" }}>
              <Grid2 container alignItems="center">
                <Grid2 lg={6}>
                  <TypoH2Secondary800>let's work together</TypoH2Secondary800>
                  <Typography color={TEXTSECONDARY} variant="h6" mb={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Turpis scelerisque purus eu quis lacus, nibh pharetra elit.
                  </Typography>

                  <Stack gap={2}>
                    <IconLink
                      icon={
                        <EmailOutlinedIcon color="primary" fontSize="large" />
                      }
                      link="mailto:FazalMohamed9367@gmail.com"
                      linkText="FazalMohamed9367@gmail.com"
                    />
                    <IconLink
                      icon={
                        <SmartphoneOutlinedIcon
                          color="primary"
                          fontSize="large"
                        />
                      }
                      link="tel:+94778178500"
                      linkText="+94778178500"
                    />
                  </Stack>
                </Grid2>
                <Grid2
                  lg={5}
                  ml="auto"
                  component="form"
                  onSubmit={handleSubmit}
                  display="flex"
                  flexDirection="column"
                  boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
                  p={4}
                  borderRadius="40px"
                  gap={3}
                  alignItems="center"
                  my={2}
                >
                  <FormControl fullWidth>
                    <TextField
                      label="Email Address"
                      id="email"
                      type="email"
                      name="email"
                      onFocus={() => setFocusIconColor("primary")}
                      onBlur={() => setFocusIconColor("info")}
                      InputLabelProps={{
                        sx: { fontFamily: PLUSJAKARTA, fontWeight: 500 },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailOutlinedIcon color={focusIconColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </FormHelperText>
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      id="message"
                      name="message"
                      multiline
                      rows={3}
                      label="Message"
                      InputLabelProps={{
                        sx: { fontFamily: PLUSJAKARTA, fontWeight: 500 },
                      }}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    sx={{ px: 6 }}
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                  <Divider variant="middle" flexItem />
                  <Typography>Follow Me On Social Media:</Typography>
                  <ContactMeSocialMedia maxWidth="300px" />
                </Grid2>
              </Grid2>
            </Box>
          </Stack>
        </main>

        <footer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4100727503137!2d80.4369519143389!3d7.307742815577671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f8808d3ee6c69c0!2s6MV28C5Q%2B3MR!5e0!3m2!1sen!2slk!4v1661699086851!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </footer>
      </ThemeProvider>
    </Box>
  );
};

export default App;
