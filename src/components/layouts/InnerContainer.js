import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/variables';

const InnerContainerStyled = styled.div`
  padding: 3em;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  ${device.tabletL} {
    padding: 1em;
  }
`;

const InnerContainer = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <InnerContainerStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </InnerContainerStyled>
  );
};

export default InnerContainer;
