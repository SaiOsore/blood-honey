import styled from 'styled-components';
import { device } from '../../theme/variables';

export const ShopStyled = styled.div`
  display: flex;
`;

export const ShopAside = styled.aside`
  width: 30%;
  ${device.tablet} {
    display: none;
  }
`;

export const ShopProductsContainer = styled.div`
  width: 70%;
  ${device.tablet} {
    width: 100%;
  }
`;