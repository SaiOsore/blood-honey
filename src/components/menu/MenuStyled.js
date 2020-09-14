import styled from 'styled-components';
import Link from '../links/Link/Link';
import Button from '../buttons/Button';
import { LogoStyled } from '../logo/LogoStyled';
import { colorVariables, device } from '../../theme/variables';

export const MenuStyled = styled.div`
  display: none;
  ${device.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    background: ${colorVariables.black};
    width: 100%;
    display: flex;
    color: white;
    z-index: 20;
    min-height: 100vh;
    & ${LogoStyled} {
      margin-bottom: 50px;
    }
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const MenuItem = styled.li`
  text-align: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 0;
`;

export const MenuClose = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;