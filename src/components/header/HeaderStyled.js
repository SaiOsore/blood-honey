import styled from 'styled-components';
import { device, colorVariables, sizeVariables } from '../../theme/variables';
import Link from '../../components/links/Link/Link';

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  height: 75px;
  left: 0;
  top: 0;
  z-index: 12;
  background-color: ${colorVariables.black};
  transition: all 2s;
  ${device.tabletL} {
    display: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &.home {
    top: calc(100% - 75px);
  }
`;

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: grid;
  grid-template-columns: max-content auto auto auto auto;
  grid-gap: 45px;
  color: ${colorVariables.white};
  text-transform: uppercase;
  font-size: ${sizeVariables.l.size};
  ${device.tabletL} {
    display: block;
    font-size: ${sizeVariables.m.size};
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${device.tabletL} {
    margin: 35px;
    text-align: center;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  ${device.tabletL} {
    align-items: center;
    justify-content: center;
  }
  ${device.mobileL} {
    flex-direction: column;
  }
`;

export const HeaderItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${device.mobileL} {
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const HeaderLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 0;
`;