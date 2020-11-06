import styled from 'styled-components';
import { device } from '../../theme/variables';

export const ShopStyled = styled.div`
  display: flex;
  padding-top: 50px;
  ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ShopAside = styled.aside`
  width: 30%;
  padding: 0 10px;
  ${device.tablet} {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const ShopProductsContainer = styled.div`
  width: 70%;
  ${device.tablet} {
    width: 100%;
  }
`;