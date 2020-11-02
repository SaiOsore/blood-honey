import React from 'react';
import { AuthorizationStyled, AuthorizationLink } from './AuthorizationStyled';

const Authorization = ({ direction }) => {
  return (
    <AuthorizationStyled direction={direction}>
      <AuthorizationLink href={'/login'}>
        Log In
      </AuthorizationLink>
      <AuthorizationLink href={'/signup'}>
        Sign Up
      </AuthorizationLink>
    </AuthorizationStyled>
  );
}

export default Authorization;