import React from 'react';
import {
  AuthStyled,
  AuthBg,
  AuthFrontBgContainer,
  AuthFrontBg,
  AuthContent,
  AuthForm,
  AuthFormBlock,
  Avatar,
  AuthTitle,
  AuthInputBlock,
  AuthInputName,
  AuthInput,
  AuthButton,
  AuthLink,
  AuthError,
} from '../AuthorizationStyled';
import useForm from '../../../hooks/useForm';
import { validate } from '../../../helpers/helpers';


const LogIn = () => {

  const login = () => {
    console.log('No errors, submit callback called!');
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  const addClassName = (e) => {
    let parent = e.target.parentNode.parentNode;
    parent.classList.add("focus");
  }

  const removeClassName = (e) => {
    let parent = e.target.parentNode.parentNode;
    if(e.target.value === ""){
      parent.classList.remove("focus");
    }
  }

  return (
    <AuthStyled>
      <AuthBg src="img/login/wave.png" alt="wave" />
      <AuthFrontBgContainer>
        <AuthFrontBg src="img/login/forest.svg" alt="forest" />
      </AuthFrontBgContainer>
      <AuthContent>
        <AuthForm onSubmit={handleSubmit} noValidate>
          <Avatar src="img/login/user.svg" alt="avatar" />
          <AuthTitle>Welcome</AuthTitle>
          <AuthFormBlock>
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <AuthInputBlock>
              <AuthError>{errors.email}</AuthError>
              <AuthInputName>Email</AuthInputName>
              <AuthInput 
                type="email" 
                name="email" 
                onChange={handleChange} 
                value={values.email || ''} 
                required 
                onBlur={removeClassName}
                onFocus={addClassName}
              />
            </AuthInputBlock>
          </AuthFormBlock>
          <AuthFormBlock>
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <AuthInputBlock>
              <AuthError>{errors.password}</AuthError>
              <AuthInputName>Password</AuthInputName>
              <AuthInput 
                type="password" 
                name="password" 
                onChange={handleChange} 
                value={values.password || ''} 
                required
                onBlur={removeClassName}
                onFocus={addClassName}
              />
            </AuthInputBlock>
          </AuthFormBlock>
          <AuthLink href="#">Forgot Password?</AuthLink>
          <AuthButton type="submit">
            Log In
          </AuthButton>
        </AuthForm>
      </AuthContent>
    </AuthStyled>
  );
}

export default LogIn;