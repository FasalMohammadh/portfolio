import React from 'react';

import {
  Card as MuiCard,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

interface CardProps {
  title: string;
  desc: string;

  icons: string[];
  href: string;
}

const Card = ({
  title,
  desc,

  icons,
  href,
}: CardProps): JSX.Element => {
  const theme = useTheme();

  return (
    <MuiCard
      color='primary'
      sx={{
        marginBlock: 1,
        height: 'calc(100% - 16px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ mb: 2 }}>
        <Typography gutterBottom fontWeight={500}>
          {title}
        </Typography>
        <Typography color='text.secondary' fontWeight={500} variant='body2'>
          {desc}
        </Typography>
      </CardContent>
      <Stack direction='row' gap={1} mt='auto' justifyContent='flex-end' px={2}>
        {icons.map(icon => (
          <img
            src={icon}
            alt='icon'
            key={icon}
            style={{ width: '24px', aspectRatio: '1', borderRadius: 99 }}
          />
        ))}
      </Stack>
      <CardActions>
        <IconButton
          size='small'
          sx={{ ml: 'auto' }}
          LinkComponent='a'
          href={href}
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Github'
        >
          <GitHubIcon
            htmlColor={theme.palette.mode === 'dark' ? 'white' : 'black'}
          />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

export default React.memo(Card);
