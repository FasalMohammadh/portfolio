import React from "react";

import Box from "@mui/material/Box";

import ReactIcon from "./../assets/Technologies/React.webp";
import HTMLIcon from "./../assets/Technologies/HTML.webp";
import CSSIcon from "./../assets/Technologies/CSS.webp";
import JavascriptIcon from "./../assets/Technologies/Javascript.webp";
import TypescriptIcon from "./../assets/Technologies/Typescript.webp";
import JavaIcon from "./../assets/Technologies/Java.webp";
import NodeJSIcon from "./../assets/Technologies/NodeJS.webp";
import MysqlIcon from "./../assets/Technologies/Mysql.webp";
import MUIIcon from "./../assets/Technologies/MUI.webp";
import TailwindCssIcon from "./../assets/Technologies/tailwindcss.webp";
import GraphQLIcon from "./../assets/Technologies/graphql.webp";
import PostgreSqlIcon from "./../assets/Technologies/postgresql.webp";

import TypoH2Secondary800 from "./TypoH2Secondary800";
import LinearProgressBar from "./LinearProgressBar";

export type Expertise = {
  label: string;
  value: number;
  iconURL: string;
};

const Section2 = React.forwardRef(
  (_props, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Box
      flex="0 0 100%"
      boxSizing="border-box"
      sx={{ scrollSnapAlign: "center" }}
      ref={ref}
    >
      <TypoH2Secondary800>My Expertise</TypoH2Secondary800>

      <Box
        display="grid"
        gridTemplateColumns={{ md: "repeat(2,1fr)" }}
        maxWidth="100%"
        sx={{ marginInline: "auto" }}
        rowGap={2}
        columnGap={4}
      >
        <LinearProgressBar label="React" value={90} iconURL={ReactIcon} />
        <LinearProgressBar label="HTML" value={95} iconURL={HTMLIcon} />
        <LinearProgressBar label="CSS" value={85} iconURL={CSSIcon} />
        <LinearProgressBar
          label="JavaScript"
          value={85}
          iconURL={JavascriptIcon}
        />
        <LinearProgressBar
          label="TypeScript"
          value={85}
          iconURL={TypescriptIcon}
        />
        <LinearProgressBar
          label="Node Js (Express)"
          value={85}
          iconURL={NodeJSIcon}
        />
        <LinearProgressBar
          label="GraphQL (Server+Client)"
          value={80}
          iconURL={GraphQLIcon}
        />
        <LinearProgressBar label="MYSQL" value={75} iconURL={MysqlIcon} />
        <LinearProgressBar
          label="PostgreSQL"
          value={75}
          iconURL={PostgreSqlIcon}
        />
        <LinearProgressBar label="MUI" value={90} iconURL={MUIIcon} />
        <LinearProgressBar
          label="Tailwind Css"
          value={90}
          iconURL={TailwindCssIcon}
        />
        <LinearProgressBar label="Java" value={65} iconURL={JavaIcon} />
      </Box>
    </Box>
  )
);

Section2.displayName = "section2";

export default React.memo(Section2);
