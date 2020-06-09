import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const HomeStyled = styled.div`
  position: relative;
  height: 100vh;
`;

export const HomeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colorVariables.black};
  z-index: 3;
  opacity: .5;
`;