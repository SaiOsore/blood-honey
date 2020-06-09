import styled from 'styled-components';
import { colorVariables } from '../../theme/variables';

export const SocialsStyled = styled.div`
  
`;

export const SocialsLink = styled.a`
  color: ${colorVariables.white};
  text-transform: uppercase;
  transition: color .3s;
  &:first-child {
    margin-right: 20px;
  }
  &:hover, &:focus {
    color: ${colorVariables.accent};
  }
`;