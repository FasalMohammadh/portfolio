import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CodeLogo from '../assets/code.webp';

import { Black } from '../Constants/COLORS';

import ContactMe from './ContactMe';

import useIsMobile from '../Hooks/useIsMobile';

const Header = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <AppBar sx={{ boxShadow: 'none', bgcolor: 'white' }} position='fixed'>
      <Toolbar>
        <Stack direction='row' gap={4} p={2} alignItems='center' width={1}>
          <img
            src={CodeLogo}
            alt='braces logo'
            style={{ width: isMobile ? '40px' : '80px', objectFit: 'cover' }}
          />
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight={600}
            color={Black[100]}
          >
            Web Developer
          </Typography>

          <ContactMe BtnProps={{ sx: { display: 'table', ml: 'auto' } }} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
