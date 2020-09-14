import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';
import { MiniLogoStyled } from '../../components/logo/MiniLogoStyled';

export const HomeStyled = styled.div`
  position: relative;
  height: 100vh;

  & ${MiniLogoStyled} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
    z-index: 10;
    color: ${colorVariables.white};
  }
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