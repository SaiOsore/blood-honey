import styled from 'styled-components';
import { ButtonStyled } from '../../buttons/ButtonStyled';
//import { colorVariables, sizeVariables, device } from '../../../theme/variables';

export const Quantity = styled.span`
  position: absolute;
  right: -20%;
  top: -90%;
  color: black;
  background: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  line-height: 20px;
`;

export const CartButton = styled(ButtonStyled)`
  position: relative;
`;