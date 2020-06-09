import styled from 'styled-components';
//import { device } from '../../../theme/variables';

export const VideoHeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export const VideoHeroStyled = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;