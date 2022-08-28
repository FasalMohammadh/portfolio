import { GlobalStyles, Grid, GridProps, IconButton } from "@mui/material";

import FacebookIcon from "../assets/SocialMediaLogos/FBLogo.webp";
import LinkedInIcon from "../assets/SocialMediaLogos/linkedinLogo.webp";
import InstagramIcon from "../assets/SocialMediaLogos/instagramLogo.webp";
import WhatsappIcon from "../assets/SocialMediaLogos/whatsappLogo.webp";

const ContactMeSocialMedia = (props: GridProps) => {
  return (
    <Grid container {...props}>
      <GlobalStyles styles={{ img: { minWidth: "0", width: "100%" } }} />
      <Grid item xs={3}>
        <IconButton
          href="https://www.linkedin.com/in/fazal-mohamed-99211b235"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="" />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton
          href="https://www.instagram.com/fasalmohammadh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="" />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton
          href="https://www.facebook.com/fazal.mohamed.125323"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="" />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton
          href="https://wa.me/94778178500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={WhatsappIcon} alt="" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ContactMeSocialMedia;
