import { createTheme } from "@mui/material";

import { PRIMARY, SECONDARY } from "../Constants/COLORS";
import { MONTSERRAT, PLUSJAKARTA } from "../Constants/FONTS";

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
  },
  typography: {
    allVariants: {
      fontFamily: MONTSERRAT,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: { fontFamily: PLUSJAKARTA },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "all 200ms ease-in-out",
          borderRadius: "20px",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
});

export default DefaultTheme;
