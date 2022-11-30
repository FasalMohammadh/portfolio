import React, { useState } from 'react';

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
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SendIcon from '@mui/icons-material/Send';

import { PLUS_JAKARTA } from '../Constants/FONTS';

import IconLink from './IconLink';
import TypoH2Secondary800 from './TypoH2Secondary800';
import ContactMeSocialMedia from './ContactMeSocialMedia';

import useIsMobile from '../Hooks/useIsMobile';

const Section4 = React.forwardRef(
  (_props, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    const [state, handleSubmit] = useForm('mrgdzkkp');
    const [focusIconColor, setFocusIconColor] = useState<
      'primary' | 'disabled'
    >('disabled');

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              scelerisque purus eu quis lacus, nibh pharetra elit.
            </Typography>

            <Stack gap={2}>
              <IconLink
                icon={
                  <EmailOutlinedIcon
                    color='primary'
                    fontSize={isMobile ? undefined : 'large'}
                  />
                }
                link='mailto:FazalMohamed9367@gmail.com'
                linkText='FazalMohamed9367@gmail.com'
              />
              <IconLink
                icon={
                  <SmartphoneOutlinedIcon
                    color='primary'
                    fontSize={isMobile ? undefined : 'large'}
                  />
                }
                link='tel:+94778178500'
                linkText='+94778178500'
              />
            </Stack>
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
              Follow Me On Social Media
            </Typography>
            <ContactMeSocialMedia maxWidth='200px' />
          </Stack>
        </Stack>
      </Box>
    );
  }
);

Section4.displayName = 'section4';

export default React.memo(Section4);
