import { useState } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import DataUsageIcon from "@mui/icons-material/DataUsage";
import RectangleIcon from "@mui/icons-material/Crop75";

import TypoH2Secondary800 from "./TypoH2Secondary800";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

const Section2 = () => {
  const [progressType, setProgressType] = useState<"Linear" | "Circular">(
    "Linear"
  );
  const Component =
    progressType === "Linear"
      ? LinearProgressWithLabel
      : CircularProgressWithLabel;

  return (
    <Box boxSizing="border-box" px={7}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TypoH2Secondary800 mb={3}>My Expertise</TypoH2Secondary800>
        <Stack gap={2} direction="row">
          <IconButton
            sx={{ fontSize: "3em", aspectRatio: 1 }}
            onClick={() => setProgressType("Circular")}
          >
            <DataUsageIcon
              fontSize="inherit"
              color={`${progressType === "Circular" ? "primary" : "secondary"}`}
            />
          </IconButton>
          <IconButton
            sx={{ fontSize: "3em" }}
            onClick={() => setProgressType("Linear")}
          >
            <RectangleIcon
              fontSize="inherit"
              color={`${progressType === "Linear" ? "primary" : "secondary"}`}
            />
          </IconButton>
        </Stack>
      </Stack>

      <Grid2 container spacing={10}>
        <Grid2 lg={6}>
          <Typography variant="h3" fontWeight={700} color="primary" mb={2}>
            FrontEnd
          </Typography>
          <Stack gap={4}>
            <Component label="React" value={50} />
            <Component label="HTML" value={90} />
            <Component label="CSS" value={75} />
            <Component label="JavaScript" value={50} />
          </Stack>
        </Grid2>
        <Grid2 lg={6}>
          <Typography variant="h3" fontWeight={700} color="primary" mb={2}>
            BackEnd
          </Typography>
          <Stack gap={4}>
            <Component label="Node Js" value={50} />
            <Component label="Express" value={50} />
            <Component label="Java" value={60} />
            <Component label="MYSQL" value={70} />
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section2;
