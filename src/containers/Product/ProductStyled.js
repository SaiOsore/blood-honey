import styled from 'styled-components';
import { sizeVariables } from '../../theme/variables';

export const ProductStyled = styled.div`

`;

export const ProductContainer = styled.div`
  display: flex;
`;

export const ProducBlock = styled.div`
  width: 50%;
`;

export const ImgWrapper = styled.div`
  max-width: 500px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: ${sizeVariables.xl.size};
`;