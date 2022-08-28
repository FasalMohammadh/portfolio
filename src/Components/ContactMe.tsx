import { useRef, useState } from "react";

import { Button, ButtonProps, Popover } from "@mui/material";

import ContactMeSocialMedia from "./ContactMeSocialMedia";

interface ContactMeProps {
  BtnProps?: ButtonProps;
}

const ContactMe = ({ BtnProps }: ContactMeProps): JSX.Element => {
  const [isPopOverVisible, setIsPopOverVisible] = useState<boolean>(false);

  const ButtonRef = useRef<HTMLButtonElement>(null!);

  const handleClick = () => setIsPopOverVisible(true);

  return (
    <>
      <Button
        {...BtnProps}
        color="primary"
        ref={ButtonRef}
        onClick={handleClick}
      >
        Contact Me
      </Button>
      <Popover
        anchorEl={ButtonRef.current}
        open={isPopOverVisible}
        PaperProps={{ sx: { borderRadius: "40px", p: 1 } }}
        onClose={(): void => {
          setIsPopOverVisible(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ContactMeSocialMedia maxWidth="200px" />
      </Popover>
    </>
  );
};

export default ContactMe;
