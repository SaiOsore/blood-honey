import styled from 'styled-components';
import Link from '../../../components/links/Link/Link';
//import { sizeVariables } from '../../../theme/variables';

export const ProductPreviewStyled = styled.div`
  width: 100%;
  padding: 5%;
  break-inside: avoid;
`;

export const ProductPreviewLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const ProductPreviewImgWrapper = styled.div`
  width: 100%;
`;

export const ProductPreviewImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;