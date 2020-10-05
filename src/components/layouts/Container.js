import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  flex: 1 0 auto;
  margin-top: 75px;
  &.home {
    margin-top: 0;
  }
`;

const Container = (props) => {
  const {
    className,
    onClick,
    tag,
    children,
  } = props;

  return (
    <ContainerStyled
      {...props}
      className={className}
      onClick={onClick}
      as={tag}
    >
      {' '}
      {children}
    </ContainerStyled>
  );
};

export default Container;
