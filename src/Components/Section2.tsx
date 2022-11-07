import { useState } from 'react';

import { Box, IconButton, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import DataUsageIcon from '@mui/icons-material/DataUsage';
import RectangleIcon from '@mui/icons-material/Crop75';

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
import LinearProgressWithLabel from './LinearProgressWithLabel';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import LinearProgressBar from './LinearProgressBar';
import CircularProgresses from './CircularProgresses';

export type Expertise = {
  label: string;
  value: number;
  iconURL: string;
};

const expertises: Expertise[] = [
  { label: 'React', value: 50, iconURL: ReactIcon },
  { label: 'HTML', value: 90, iconURL: HTMLIcon },
  { label: 'CSS', value: 75, iconURL: CSSIcon },
  { label: 'JavaScript', value: 60, iconURL: JavascriptIcon },
  { label: 'TypeScript', value: 50, iconURL: TypescriptIcon },
  { label: 'Node Js + Express', value: 65, iconURL: NodeJSIcon },
  { label: 'Java', value: 55, iconURL: JavaIcon },
  { label: 'MYSQL', value: 70, iconURL: MysqlIcon },
  { label: 'MUI', value: 70, iconURL: MUIIcon },
];

const Section2 = () => {
  const [progressType, setProgressType] = useState<'Linear' | 'Circular'>(
    'Linear'
  );

  return (
    <Box boxSizing='border-box' minWidth={{ md: 'calc(100vh - 100px)' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <TypoH2Secondary800>My Expertise</TypoH2Secondary800>
        <Stack gap={2} direction='row'>
          <IconButton
            sx={{ fontSize: '3em', aspectRatio: 1 }}
            onClick={() => setProgressType('Circular')}
          >
            <DataUsageIcon
              fontSize='inherit'
              color={`${progressType === 'Circular' ? 'primary' : 'secondary'}`}
            />
          </IconButton>
          <IconButton
            sx={{ fontSize: '3em' }}
            onClick={() => setProgressType('Linear')}
          >
            <RectangleIcon
              fontSize='inherit'
              color={`${progressType === 'Linear' ? 'primary' : 'secondary'}`}
            />
          </IconButton>
        </Stack>
      </Stack>

      {progressType === 'Linear' ? (
        <Grid2 container columns={3} columnSpacing={4} rowSpacing={1}>
          {expertises.map((props: Expertise) => (
            <Grid2 md={1} key={props.label}>
              <LinearProgressBar {...props} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Box
          sx={{
            aspectRatio: '1',
            height: { md: '600px' },
            marginInline: 'auto',
          }}
        >
          <CircularProgresses progresses={expertises} />
        </Box>
      )}

      {/* <Grid2 container columnSpacing={10} mt={3}>
        <Grid2 lg={6}>
          <Typography variant='h4' fontWeight={500} color='primary' mb={2}>
            FrontEnd
          </Typography>
          <Stack gap={4}>
            <LinearProgressBar value={50} iconURL={ReactIcon} label='React' />
            <Component label='React' value={50} />
            <Component label='HTML' value={90} />
            <Component label='CSS' value={75} />
            <Component label='JavaScript' value={50} />
          </Stack>
        </Grid2>
        <Grid2 lg={6}>
          <Typography variant='h4' fontWeight={500} color='primary' mb={2}>
            BackEnd
          </Typography>
          <Stack gap={4}>
            <Component label='Node Js' value={50} />
            <Component label='Express' value={50} />
            <Component label='Java' value={60} />
            <Component label='MYSQL' value={70} />
          </Stack>
        </Grid2>
      </Grid2> */}
    </Box>
  );
};

export default Section2;
