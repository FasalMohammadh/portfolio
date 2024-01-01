import React from "react";

import { Stack, GlobalStyles, StackProps, IconButton } from "@mui/material";

import FacebookIcon from "../assets/SocialMediaLogos/FBLogo.webp";
import LinkedInIcon from "../assets/SocialMediaLogos/linkedinLogo.webp";
import InstagramIcon from "../assets/SocialMediaLogos/instagramLogo.webp";
import WhatsappIcon from "../assets/SocialMediaLogos/whatsappLogo.webp";
import GitHubIcon from "../assets/SocialMediaLogos/github.png";

const ContactMeSocialMedia = (props: StackProps) => {
  return (
    <Stack flexDirection="row" {...props}>
      <GlobalStyles styles={{ img: { minWidth: "0", width: "100%" } }} />

      <IconButton
        sx={{ flex: "1 1 0" }}
        href="https://www.linkedin.com/in/fazal-mohamed-99211b235"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linked In"
      >
        <img src={LinkedInIcon} alt="Linked In Icon" />
      </IconButton>

      <IconButton
        sx={{ flex: "1 1 0" }}
        href="https://www.instagram.com/fasalmohammadh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <img src={InstagramIcon} alt="Instagram Icon" />
      </IconButton>

      <IconButton
        sx={{ flex: "1 1 0" }}
        href="https://www.facebook.com/fazal.mohamed.125323"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img src={FacebookIcon} alt="Facebook Icon" />
      </IconButton>

      <IconButton
        sx={{ flex: "1 1 0" }}
        href="https://wa.me/94778178500"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <img src={WhatsappIcon} alt="Whatsapp Icon" />
      </IconButton>

      <IconButton
        sx={{ flex: "1 1 0" }}
        href="https://github.com/FasalMohammadh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <img src={GitHubIcon} alt="Github Icon" />
      </IconButton>
    </Stack>
  );
};

export default React.memo(ContactMeSocialMedia);
