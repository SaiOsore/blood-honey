import styled from 'styled-components';
import { device, colorVariables } from '../../theme/variables';

export const ShopStyled = styled.div`
  display: flex;
  padding: 50px 0;
  padding-left: 5px;
  ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ShopAside = styled.aside`
  position: sticky;
  top: 82px;
  height: 100%;
  width: 30%;
  padding: 20px 10px;
  border: 1px solid ${colorVariables.black};;
  ${device.tablet} {
    position: static;
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