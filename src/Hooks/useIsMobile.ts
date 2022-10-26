import { useMediaQuery } from '@mui/material';

import theme from '../Themes/DefaultTheme';

const useIsMobile = (): boolean => useMediaQuery(theme.breakpoints.down('md'));

export default useIsMobile;
