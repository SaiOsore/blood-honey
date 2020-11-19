import styled from 'styled-components';
import Link from '../../components/links/Link/Link';
import { SocialsStyled } from '../socials/SocialsStyled';
import { device, colorVariables, sizeVariables } from '../../theme/variables';

export const FooterStyled = styled.footer`
  width: 100%;
  flex: 0 0 auto;
  padding: 20px 0;
  align-items: center;
  text-align: center;
  background-color: ${colorVariables.black};
  color: ${colorVariables.white};
  ${device.mobileL} {
    margin: 0;
  }
`;

export const FooterContainer = styled.div`
  height: 100%;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: grid;
  grid-template-columns: max-content auto auto auto auto;
  grid-gap: 45px;
  align-items: center;
  color: ${colorVariables.white};
  text-transform: uppercase;
  font-size: ${sizeVariables.l.size};
  ${device.tabletL} {
    padding: 20px 15px;
    font-size: ${sizeVariables.m.size};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & ${SocialsStyled} {
      flex-wrap: wrap;
    }
  }
`;

export const FooterCopyright = styled.div`
  & div {
    margin-bottom: 15px;
  }
  & a {
    color: ${colorVariables.white};
    &:hover, &:focus {
      color: ${colorVariables.accent};
    }
  }
`;

export const FooterNav = styled.nav`
  
`;

export const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const FooterLink = styled(Link)`
  text-transform: uppercase;
  padding: 5px 0;
`;