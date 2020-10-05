import styled from 'styled-components';
import { SocialsLink } from '../../components/socials/SocialsStyled';
import { colorVariables, sizeVariables, device } from '../../theme/variables';

export const ContactStyled = styled.div`
  border-bottom: 2px solid ${colorVariables.black};
  padding: 1rem;
  line-height: 1.5;
  color: ${colorVariables.black};
  & ${SocialsLink} {
    color: ${colorVariables.black};
    &:hover {
      color: ${colorVariables.accent};
    }
  }
`;

export const ContactTitle = styled.h1`
  font-size: ${sizeVariables.xxl.size};
  ${device.mobileL} {
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const ContactSubTitle = styled.h2`
  font-size: ${sizeVariables.xl.size};
  margin-right: 15px;
  ${device.mobileL} {
    margin-right: 0;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  ${device.mobileL} {
    flex-direction: column;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`;

export const ContactLink = styled.a`
  display: block;
  font-size: ${sizeVariables.xl.size};
  color: ${colorVariables.black};
  &:hover {
    color: ${colorVariables.accent};
  }
`;

export const ContactSocials = styled.div`
  display: flex;
  font-size: ${sizeVariables.xl.size};
  color: ${colorVariables.black};
  &:hover {
    color: ${colorVariables.accent};
  }d
`;