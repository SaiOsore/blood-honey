import styled from 'styled-components';
import { colorVariables, device } from '../../theme/variables';

export const MiniLogoStyled = styled.div`

`;

export const MiniLogoWrapper = styled.div`
  width: 20vw;
  height: 20vw;
  ${device.tablet} {
    width: 40vw;
    height: 40vw;
  }
`;

export const MiniLogoImg = styled.img`
  max-width: 100%;
`;