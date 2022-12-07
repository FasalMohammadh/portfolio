import React, { useRef, useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SendIcon from '@mui/icons-material/Send';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import TypoH2Secondary800 from './TypoH2Secondary800';
import ContactMeSocialMedia from './ContactMeSocialMedia';

import useIsMobile from '../Hooks/useIsMobile';

const Section4 = React.forwardRef(
  (_props, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    const [state, handleSubmit] = useForm('mrgdzkkp');
    const [focusIconColor, setFocusIconColor] = useState<
      'primary' | 'disabled'
    >('disabled');

    const emailInputRef = useRef<HTMLInputElement>(null);

    const theme = useTheme();
    const isMobile = useIsMobile();

    return (
      <Box id='contact-me' sx={{ scrollMarginTop: '100px' }} ref={ref}>
        <Stack
          alignItems='center'
          gap={4}
          justifyContent='center'
          flexDirection='row'
          flexWrap='wrap'
        >
          <Box flex='1 1 0'>
            <TypoH2Secondary800>let&rsquo;s work together</TypoH2Secondary800>
            <Typography variant='h6' mb={3}>
              Hi there! Would you like to speak with me in person, please email
              me or call me at the number below.
            </Typography>

            <Button
              variant='text'
              style={{ transform: 'none ', width: 'fit-content' }}
              startIcon={
                <EmailOutlinedIcon
                  color='primary'
                  fontSize={isMobile ? undefined : 'large'}
                />
              }
              onClick={() => {
                emailInputRef.current !== null && emailInputRef.current.focus();
              }}
            >
              <Typography variant={isMobile ? 'body2' : 'body1'}>
                FazalMohamed9367@gmail.com
              </Typography>
            </Button>

            <Button
              variant='text'
              href='tel:+94778178500'
              startIcon={
                <SmartphoneOutlinedIcon
                  color='primary'
                  fontSize={isMobile ? undefined : 'large'}
                />
              }
              style={{ transform: 'none', width: 'fit-content' }}
            >
              <Typography variant={isMobile ? 'body2' : 'body1'}>
                +94778178500
              </Typography>
            </Button>
          </Box>

          <Stack
            minWidth={{ md: '400px' }}
            width='fit-content'
            ml={{ md: 'auto' }}
            mr={{ xs: 'auto', md: 'unset' }}
            component='form'
            onSubmit={handleSubmit}
            boxShadow={`0 0 2px 0 ${theme.palette.primary.main}`}
            p={4}
            borderRadius={{ xs: '20px', md: '40px' }}
            gap={3}
            alignItems='center'
          >
            <FormControl fullWidth>
              <TextField
                inputRef={emailInputRef}
                spellCheck='false'
                autoComplete='email'
                label='Email Address'
                id='email'
                type='email'
                name='email'
                onFocus={(): void => {
                  setFocusIconColor('primary');
                }}
                onBlur={(): void => {
                  setFocusIconColor('disabled');
                }}
                InputLabelProps={{
                  sx: { fontFamily: PLUS_JAKARTA, fontWeight: 500 },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <EmailOutlinedIcon color={focusIconColor} />
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText>
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id='message'
                name='message'
                multiline
                rows={3}
                label='Message'
                InputLabelProps={{
                  sx: { fontFamily: PLUS_JAKARTA, fontWeight: 500 },
                }}
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </FormControl>
            <Button
              type='submit'
              disabled={state.submitting}
              sx={{ px: { md: 6 } }}
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>
            <Divider variant='middle' flexItem />
            <Typography variant={isMobile ? 'body2' : undefined}>
              Find me on
            </Typography>
            <ContactMeSocialMedia maxWidth='280px' />
          </Stack>
        </Stack>
      </Box>
    );
  }
);

Section4.displayName = 'section4';

export default React.memo(Section4);
