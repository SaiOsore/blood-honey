import styled from 'styled-components';
import { colorVariables, sizeVariables } from '../../theme/variables';
import Button from '../../components/buttons/Button';

export const LangStyled = styled.div`
  
`;

export const LangForm = styled.form`
  
`;

export const LangButton = styled(Button)`
  padding: 10px 0;
  font-size: inherit;
  text-transform: uppercase;
  &:first-child {
    margin-right: 10px;
  }
`;