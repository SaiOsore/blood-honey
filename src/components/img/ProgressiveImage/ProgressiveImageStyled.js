import styled from 'styled-components';
//import { device } from '../../../theme/variables';

export const ProgressiveImageContainer= styled.div`
  position: relative;
`;

export const ProgressiveImageStyled = styled.img`
  max-width: 100%;
`;

export const ProgressiveImageOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(1px);
  transition: opacity ease-in 1000ms;
  clipPath: inset(0);
  width: 100%;
  height: 100%;
`;