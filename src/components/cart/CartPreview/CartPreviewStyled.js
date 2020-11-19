import styled from 'styled-components';
import Button from '../../../components/buttons/Button';
import Link from '../../../components/links/Link/Link';
import { device, colorVariables, sizeVariables } from '../../../theme/variables';

export const CartPreviewStyled = styled.div`
  position: fixed;
  right: 0;
  top: 75px;
  border: 2px solid ${colorVariables.black};
  z-index: 100;
  min-width: 30vw;
  min-height: calc(100vh - 75px);
  overflow: auto;
  background: ${colorVariables.white};
  ${device.mobileL} {
    width: 100%;
  }
`;

export const CartPreviewContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem 1rem;
  top: 0;
  left: 0;
  text-align: right;
`;

export const CartPreviewClose = styled.button`
  position: absolute;
  top: .5rem;
  left: .5rem;
  background: none;
  border: 2px solid ${colorVariables.black};
  z-index: 2222;
  font-size: 1.5rem;
  &:hover, &:focus {
    background: ${colorVariables.black};
    color: ${colorVariables.white};
  }
`;

export const CartPreviewList = styled.ul`
  margin-bottom: 20px;
`;

export const CartPreviewItemStyled = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${colorVariables.black};
`;

export const CartPreviewItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CartPreviewItemContent = styled.div`

`;

export const CartPreviewTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const CartPreviewImgWrapper = styled.div`
  width: 40%;
  max-width: 100%;
`;

export const CartPreviewImg = styled.img`
  max-width: 100%;
`;

export const CartPreviewButton = styled(Button)`
  display: block;
  border: 1px solid ${colorVariables.black};
  padding: 10px;
  color: ${colorVariables.black};
  width: 100%;
  &:hover, &:focus {
    border-color: ${colorVariables.accent};
  }
`;

export const CartPreviewLink = styled(Link)`
  display: block;
  border: 1px solid ${colorVariables.black};
  padding: 10px;
  color: ${colorVariables.black};
  width: 100%;
  text-align: center;
  &:hover, &:focus {
    border-color: ${colorVariables.accent};
  }
`;

export const CartPreviewButtonQuantity = styled.button`
  display: inline-block;
  border: 1px solid ${colorVariables.black};
  background: none;
  padding: 10px;
  color: ${colorVariables.black};
  &:hover, &:focus {
    border-color: ${colorVariables.accent};
  }
  &:first-child {
    margin-right: 5px;
  }
  &:last-child {
    margin-left: 5px;
  }
`;

export const CartPreviewTotal = styled.div`
 margin-bottom: 18px;
 font-size: ${sizeVariables.xl.size};
`;