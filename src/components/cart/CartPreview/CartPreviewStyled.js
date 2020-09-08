import styled from 'styled-components';
import Button from '../../../components/buttons/Button';
import { device, colorVariables, sizeVariables } from '../../../theme/variables';

export const CartPreviewStyled = styled.div`
  width: 300px;
`;

export const CartPreviewList = styled.ul`

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