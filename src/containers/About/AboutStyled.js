import styled from 'styled-components';
import { colorVariables, sizeVariables } from '../../theme/variables';

export const AboutStyled = styled.div`

`;

const textStyles = `
  border: 2px solid ${colorVariables.black};
  padding: 1rem;
  line-height: 1.5;
  color: ${colorVariables.black};
`;


export const AboutTitle = styled.h1`
  margin-bottom: 3rem;
  ${textStyles};
  font-size: ${sizeVariables.xxl.size};
`;

export const AboutText= styled.div`
  ${textStyles};
`;

export const AboutDescr = styled.p`
  margin-bottom: 1.5rem;
  font-size: ${sizeVariables.xl.size};
`;