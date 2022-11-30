import { useState, useEffect } from 'react';

import { keyframes, SxProps } from '@mui/material';

type TypingEffectTextProps = {
  textToAnimate: string;
  typingSpeed: number;
  renderText: (text: string, props: { sx: SxProps }) => JSX.Element;
};

const blinkCursorAnimation = keyframes`@keyframes{
  50% {
    borderColor: transparent;
  }
}`;

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
    sx: props => ({
      borderRight:
        text.slice(-1) === ' '
          ? undefined
          : `4px solid ${props.palette.secondary.main}`,
      animation: `blink-cursor 750ms infinite ease ${
        textToAnimate.length * typingSpeed
      }ms`,
      display: 'inline',
    }),
  });
};

export default TypingEffectText;
