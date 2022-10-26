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
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';

import { TEXTSECONDARY } from '../Constants/COLORS';
import { PLUS_JAKARTA } from '../Constants/FONTS';

import IconLink from './IconLink';
import TypoH2Secondary800 from './TypoH2Secondary800';
import ContactMeSocialMedia from './ContactMeSocialMedia';

const Section4 = () => {
  const [state, handleSubmit] = useForm('mrgdzkkp');
  const [focusIconColor, setFocusIconColor] = useState<'primary' | 'disabled'>(
    'disabled'
  );

  return (
    <Box minHeight={{ md: 'calc(100vh - 100px)' }}>
      <Grid2 container alignItems='center' columns={2}>
        <Grid2 md={1}>
          <TypoH2Secondary800>let's work together</TypoH2Secondary800>
          <Typography color={TEXTSECONDARY} variant='h6' mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            scelerisque purus eu quis lacus, nibh pharetra elit.
          </Typography>

          <Stack gap={2}>
            <IconLink
              icon={<EmailOutlinedIcon color='primary' fontSize='large' />}
              link='mailto:FazalMohamed9367@gmail.com'
              linkText='FazalMohamed9367@gmail.com'
            />
            <IconLink
              icon={<SmartphoneOutlinedIcon color='primary' fontSize='large' />}
              link='tel:+94778178500'
              linkText='+94778178500'
            />
          </Stack>
        </Grid2>
        <Grid2 md={1}>
          <Box>
            <Stack
              component='form'
              onSubmit={handleSubmit}
              boxShadow='0 0 10px 0 rgba(0,0,0,0.2)'
              p={4}
              borderRadius='40px'
              gap={3}
              alignItems='center'
            >
              <FormControl fullWidth>
                <TextField
                  label='Email Address'
                  id='email'
                  type='email'
                  name='email'
                  onFocus={() => setFocusIconColor('primary')}
                  onBlur={() => setFocusIconColor('disabled')}
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
                sx={{ px: 6 }}
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
              <Divider variant='middle' flexItem />
              <Typography>Follow Me On Social Media:</Typography>
              <ContactMeSocialMedia maxWidth='300px' />
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section4;
