import styled from 'styled-components';
import Link from '../../../components/links/Link/Link';
import Button from '../../../components/buttons/Button';
import { colorVariables } from '../../../theme/variables';

export const ShopNavStyled = styled.div`
  display: block;
`;

export const ShopNavBlock = styled.div`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ShopNavTitle = styled.h2`
  display: inline-block;
  padding: 7px 0;
  margin-bottom: 30px;
  color: ${colorVariables.black};
  border-bottom: 2px solid ${colorVariables.black};
`;

export const ShopNavList = styled.ul`
  
`;

export const ShopNavItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ShopNavLink = styled(Link)`
  color: ${colorVariables.black};
  background: none;
  border: none;
  &:hover {
    color: ${colorVariables.accent};
  }
`;

export const ShopNavBtn = styled(Button)`
  color: ${colorVariables.black};
  border: 2px solid ${colorVariables.black};
  &:hover {
    border: 2px solid ${colorVariables.accent};
    color: ${colorVariables.accent};
  }
`;

export const ShopNavInput = styled.input`
  color: ${colorVariables.black};
  border-bottom: 2px solid ${colorVariables.black};
  padding: 5px;
  &:hover {
    border-bottom: 2px solid ${colorVariables.accent};
  }
`;