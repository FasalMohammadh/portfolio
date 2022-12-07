import React from 'react';

import Box from '@mui/material/Box';

import ReactIcon from './../assets/Technologies/React.webp';
import HTMLIcon from './../assets/Technologies/HTML.webp';
import CSSIcon from './../assets/Technologies/CSS.webp';
import JavascriptIcon from './../assets/Technologies/Javascript.webp';
import TypescriptIcon from './../assets/Technologies/Typescript.webp';
import JavaIcon from './../assets/Technologies/Java.webp';
import NodeJSIcon from './../assets/Technologies/NodeJS.webp';
import MysqlIcon from './../assets/Technologies/Mysql.webp';
import MUIIcon from './../assets/Technologies/MUI.webp';

import TypoH2Secondary800 from './TypoH2Secondary800';
import LinearProgressBar from './LinearProgressBar';

export type Expertise = {
  label: string;
  value: number;
  iconURL: string;
};

const Section2 = React.forwardRef(
  (_props, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Box
      boxSizing='border-box'
      id='my-expertise'
      sx={{ scrollMarginTop: '100px' }}
      ref={ref}
    >
      <TypoH2Secondary800>My Expertise</TypoH2Secondary800>

      <Box
        display='grid'
        gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
        maxWidth='100%'
        sx={{ marginInline: 'auto' }}
        rowGap={2}
        columnGap={4}
      >
        <LinearProgressBar label='React' value={50} iconURL={ReactIcon} />
        <LinearProgressBar label='HTML' value={90} iconURL={HTMLIcon} />
        <LinearProgressBar label='CSS' value={75} iconURL={CSSIcon} />
        <LinearProgressBar
          label='JavaScript'
          value={60}
          iconURL={JavascriptIcon}
        />
        <LinearProgressBar
          label='TypeScript'
          value={50}
          iconURL={TypescriptIcon}
        />
        <LinearProgressBar
          label='Node Js + Express'
          value={65}
          iconURL={NodeJSIcon}
        />
        <LinearProgressBar label='Java' value={55} iconURL={JavaIcon} />
        <LinearProgressBar label='MYSQL' value={70} iconURL={MysqlIcon} />
        <LinearProgressBar label='MUI' value={70} iconURL={MUIIcon} />
      </Box>
    </Box>
  )
);

Section2.displayName = 'section2';

export default React.memo(Section2);
