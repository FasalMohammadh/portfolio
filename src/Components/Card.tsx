import React from 'react';

import {
  Card as MuiCard,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
  CardProps as MuiCardProps,
  keyframes,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

interface CardProps extends MuiCardProps {
  data: {
    title: string;
    desc: string;
    icons: string[];
    href: string;
  };
}

const bubbleAnimation = keyframes`
0% {
  width:0;
  height:0;
}
100% {
  width:300%;
  height:300%;
}`;

function Card({
  data: { title, desc, icons, href },
  sx,
  ...props
}: CardProps): JSX.Element {
  const theme = useTheme();

  const handleBgPosition = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const left = `${
      event.pageX - event.currentTarget.getBoundingClientRect().left
    }px`;
    const top = `${
      event.pageY - Math.floor(event.currentTarget.getBoundingClientRect().top)
    }px`;

    event.currentTarget.style.setProperty('--bubble-top', top);
    event.currentTarget.style.setProperty('--bubble-left', left);
  };

  return (
    <MuiCard
      sx={{
        isolation: 'isolate',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        '&::before': ({ palette }) => ({
          content: '""',
          zIndex: -1,
          borderRadius: '999px',
          position: 'absolute',
          top: 'var(--bubble-top)',
          left: 'var(--bubble-left)',
          transform: 'translate(-50%,-50%)',
          bgcolor: palette.primary.main,
          willChange: 'width',
        }),
        '&:is(:hover,:focus)::before': {
          animation: `${bubbleAnimation} 300ms ease-in-out forwards`,
        },
        ...sx,
      }}
      color='primary'
      onMouseEnter={handleBgPosition}
      {...props}
    >
      <CardContent sx={{ mb: 2 }}>
        <Typography fontWeight={500} gutterBottom>
          {title}
        </Typography>
        <Typography fontWeight={500} variant='body2' color='text.secondary'>
          {desc}
        </Typography>
      </CardContent>
      <Stack gap={1} mt='auto' direction='row' justifyContent='flex-end' px={2}>
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
}

export default React.memo(Card);
