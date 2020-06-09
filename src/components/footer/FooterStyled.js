import styled from 'styled-components';
import { device } from '../../theme/variables';

const FooterStyled = styled.footer`
  width: 100%;
  flex: 0 0 auto;
  height: 50px;
  display: ${(props) => props.display || 'flex'};
  align-items: center;
  margin: 0 0 20px 0;
  text-align: center;
  @media screen and ${device.mobileL} {
    margin: 0;
  }
`;

export default FooterStyled;
