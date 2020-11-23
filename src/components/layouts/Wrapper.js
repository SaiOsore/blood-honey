import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme/variables';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <WrapperStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </WrapperStyled>
  );
};

export default Wrapper;
