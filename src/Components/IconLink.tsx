import { Link, Stack } from "@mui/material";

import { MONTSERRAT } from "./../Constants/FONTS";

const IconLink = ({
  icon,
  link,
  linkText,
}: {
  icon: JSX.Element;
  link: string;
  linkText: string;
}) => (
  <Stack direction="row" gap={2} alignItems="center">
    {icon}
    <Link
      sx={{ textDecoration: "none" }}
      color="secondary"
      href={link}
      fontWeight={500}
      fontFamily={MONTSERRAT}
    >
      {linkText}
    </Link>
  </Stack>
);

export default IconLink;
