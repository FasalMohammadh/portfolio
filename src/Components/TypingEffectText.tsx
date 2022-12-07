import React, { useState, useEffect } from 'react';

import { keyframes, SxProps, Theme } from '@mui/material';

type TypingEffectTextProps = {
  textToAnimate: string;
  typingSpeed: number;
  renderText: (text: string, props: { sx: SxProps<Theme> }) => JSX.Element;
};

const blinkCursorAnimation = keyframes`
  50% {
    border-color: transparent;
  }
`;

const TypingEffectText = ({
  textToAnimate,
  typingSpeed,
  renderText,
}: TypingEffectTextProps): JSX.Element => {
  const [text, setText] = useState('');

  useEffect((): void => {
    if (textToAnimate === text) return undefined;
    setTimeout((): void => {
      setText(textToAnimate.slice(0, text.length + 1));
    }, typingSpeed);
  }, [text]);

  return renderText(text, {
    sx: theme => ({
      borderRight:
        text.slice(-1) === ' '
          ? undefined
          : `4px solid ${theme.palette.secondary.main}`,
      animation: `${blinkCursorAnimation} 750ms infinite ease ${
        textToAnimate.length * typingSpeed
      }ms`,
      display: 'inline',
    }),
  });
};

export default React.memo(TypingEffectText);
