import { Typography, TypographyProps } from "@mui/material";

import { SECONDARY } from "../Constants/COLORS";
import { PLUSJAKARTA } from "../Constants/FONTS";

const TypoH2Secondary800 = (props: TypographyProps) => (
  <Typography {...props} />
);

TypoH2Secondary800.defaultProps = {
  variant: "h2",
  fontFamily: PLUSJAKARTA,
  fontWeight: 800,
  color: SECONDARY,
  mb: 2,
  className: "typo",
};

export default TypoH2Secondary800;
