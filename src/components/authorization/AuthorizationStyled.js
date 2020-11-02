import styled, { css }from 'styled-components';
import Link from '../../components/links/Link/Link';
import { colorVariables } from '../../theme/variables';

export const AuthorizationLink = styled(Link)`
  color: ${colorVariables.white};
  text-transform: uppercase;
  transition: color .3s;
  &:first-child {
    margin-bottom: 10px;
  }
  &:hover, &:focus {
    color: ${colorVariables.accent};
  }
`;

export const AuthorizationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.direction && css`
    flex-direction: row;
    margin-bottom: 40px;
    ${AuthorizationLink} {
      &:first-child {
        margin-right: 20px;
        margin-bottom: 0;
      }
    }
  `};
`;