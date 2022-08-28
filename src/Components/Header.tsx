import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";

import CodeLogo from "../assets/code.webp";

import { PRIMARY } from "../Constants/COLORS";
import ContactMe from "./ContactMe";

const Header = (): JSX.Element => (
  <AppBar color="transparent" sx={{ boxShadow: "none" }} position="static">
    <Toolbar>
      <Stack direction="row" gap={4} p={4} alignItems="center" width={1}>
        <img
          src={CodeLogo}
          alt=""
          style={{ maxWidth: "80px", objectFit: "cover" }}
        />
        <Typography variant="h5" fontWeight={600}>
          Web Developer
          <Box
            bgcolor={PRIMARY}
            display="inline-block"
            borderRadius="100%"
            p={0.3}
            ml={0.2}
          />
        </Typography>

        <ContactMe BtnProps={{ sx: { display: "table", ml: "auto" } }} />
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Header;
