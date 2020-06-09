import styled from 'styled-components';
import { device } from '../../../theme/variables';

export const ProductsPreviewStyled = styled.div`
  column-count: 4;
  column-gap: 0;
  ${device.tabletL} {
    column-count: 3;
  }
  ${device.tabletM} {
    column-count: 2;
  }
  ${device.mobileL} {
    column-count: 1;
  }
`;