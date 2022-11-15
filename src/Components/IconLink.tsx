import React from 'react';

import { Link, Stack } from '@mui/material';

import { MONTSERRAT } from './../Constants/FONTS';

import useIsMobile from '../Hooks/useIsMobile';

type IconLinkProps = {
  icon: JSX.Element;
  link: string;
  linkText: string;
};

const IconLink = ({ icon, link, linkText }: IconLinkProps) => {
  const isMobile = useIsMobile();

  return (
    <Link
      sx={{ textDecoration: 'none' }}
      color='secondary'
      href={link}
      fontWeight={500}
      fontFamily={MONTSERRAT}
      variant={isMobile ? 'body2' : undefined}
    >
      <Stack direction='row' gap={2} alignItems='center'>
        {icon}
        {linkText}
      </Stack>
    </Link>
  );
};

export default IconLink;
