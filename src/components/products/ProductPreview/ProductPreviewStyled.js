import styled from 'styled-components';
import Link from '../../../components/links/Link/Link';
import Button from '../../../components/buttons/Button';
import { colorVariables, sizeVariables } from '../../../theme/variables';

export const ProductPreviewStyled = styled.div`
  padding: 5%;
  break-inside: avoid;
  border: 1px solid ${colorVariables.black};
  margin: 0 0 10px 0;
  width: calc(100% - 10px);
`;

export const ProductPreviewButton = styled(Button)`
  display: block;
  border: 1px solid ${colorVariables.black};
  padding: 10px;
  width: 100%;
  &:hover, &:focus {
    border-color: ${colorVariables.accent};
  }
`;

export const ProductPreviewTitle = styled.h4`
  display: inline-block;
  margin-bottom: 10px;
  text-transform: uppercase;
  padding-bottom: 5px;
  font-size: ${sizeVariables.xxl.size};
  border-bottom: 1px solid ${colorVariables.black};
`;

export const ProductPreviewPrice = styled.p`
  font-size: ${sizeVariables.xl.size};
`;

export const ProductPreviewImgWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const ProductPreviewImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ProductPreviewLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: ${colorVariables.black};
  &:hover, &:focus {
    & ${ProductPreviewTitle} {
      color: ${colorVariables.accent};
      border-color: ${colorVariables.accent};
    }
  }
`;