import styled from 'styled-components';
import Link from '../../components/links/Link/Link';
import { colorVariables } from '../../theme/variables';

export const SocialsStyled = styled.div`
  
`;

export const SocialsLink = styled(Link)`
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