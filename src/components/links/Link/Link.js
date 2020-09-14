import React from 'react';
import { LinkStyled } from './LinkStyled';

const Link = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
    hoverColor,
    color,
    pointerEvents,
    fontFamily,
    border,
  } = props;

  return (
    <LinkStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
      color={color}
      hovercolor={hoverColor}
      pointerEvents={pointerEvents}
      fontFamily={fontFamily}
      border={border}
    >
      {' '}
      {children}
    </LinkStyled>
  );
};

export default Link;