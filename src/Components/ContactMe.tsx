import { useRef, useState } from 'react';

import { ButtonProps } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import { PRIMARY } from '../Constants/COLORS';

import ContactMeSocialMedia from './ContactMeSocialMedia';

import useIsMobile from '../Hooks/useIsMobile';

interface ContactMeProps {
  BtnProps?: ButtonProps;
}

const ContactMe = ({ BtnProps }: ContactMeProps): JSX.Element => {
  const isMobile = useIsMobile();

  const [isPopOverVisible, setIsPopOverVisible] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null!);

  const handleClick = () => setIsPopOverVisible(true);

  return (
    <>
      {isMobile ? (
        <IconButton onClick={handleClick} ref={buttonRef}>
          <ContactSupportIcon fontSize='large' htmlColor={PRIMARY} />
        </IconButton>
      ) : (
        <Button
          color='primary'
          ref={buttonRef}
          onClick={handleClick}
          {...BtnProps}
        >
          <Typography variant={isMobile ? 'body2' : 'button'}>
            Contact Me
          </Typography>
        </Button>
      )}
      <Popover
        anchorEl={buttonRef.current}
        open={isPopOverVisible}
        PaperProps={{ sx: { borderRadius: '40px', p: 1 } }}
        onClose={(): void => {
          setIsPopOverVisible(false);
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ContactMeSocialMedia maxWidth='200px' />
      </Popover>
    </>
  );
};

export default ContactMe;
