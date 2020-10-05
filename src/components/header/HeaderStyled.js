import styled, { css } from 'styled-components';
import { device, colorVariables, sizeVariables } from '../../theme/variables';
import Link from '../../components/links/Link/Link';
import { SocialsStyled } from '../socials/SocialsStyled';
import Button from '../buttons/Button';

export const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  height: 75px;
  left: 0;
  top: 0;
  z-index: 12;
  background-color: ${colorVariables.black};
  transition: all 2s;

  &.home {
    top: calc(100% - 75px);
  }

  & ${SocialsStyled} {
    ${device.tabletL} {
      display: none;
    }
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
    font-size: ${sizeVariables.m.size};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${device.tabletL} {
    margin: 0 35px;
    text-align: center;
  }
  ${device.tablet} {
    margin: 0;
  }

  ${(props) => props.hideForMobiles && css`
    ${device.tabletL} {
      display: none;
    }
  `};
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const HeaderLink = styled(Link)`
  text-transform: uppercase;
  padding: 5px 0;
`;

export const HeaderMenuBtn = styled(Button)`
  display: none;
  ${device.tabletL} {
    display: block;
    text-transform: uppercase;
    &:hover {
      color: ${colorVariables.accent};
    }
  }
`;