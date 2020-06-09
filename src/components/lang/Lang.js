import React from 'react';
import { LangStyled, LangForm, LangButton } from './LangStyled';

const Lang = () => {
  return (
    <LangStyled>
      <LangForm action="" method="post">
        <LangButton className="active" tabindex="0">En</LangButton>
        <LangButton tabindex="0">Ru</LangButton>
      </LangForm>
    </LangStyled>
  );
}

export default Lang;