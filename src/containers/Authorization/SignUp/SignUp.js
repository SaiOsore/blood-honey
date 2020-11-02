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


const SignUp = () => {

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
          <Avatar src="img/login/reg.svg" alt="reg" />
          <AuthTitle>Registration</AuthTitle>
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
              <i className="fas fa-user"></i>
            </div>
            <AuthInputBlock>
              <AuthError>{errors.repeatEmail}</AuthError>
              <AuthInputName>Repeat email</AuthInputName>
              <AuthInput 
                type="email" 
                name="repeatEmail" 
                onChange={handleChange} 
                value={values.repeatEmail || ''} 
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
          <AuthFormBlock>
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <AuthInputBlock>
              <AuthError>{errors.repeatPassword}</AuthError>
              <AuthInputName>Repeat password</AuthInputName>
              <AuthInput 
                type="password" 
                name="repeatPassword" 
                onChange={handleChange} 
                value={values.repeatPassword || ''} 
                required
                onBlur={removeClassName}
                onFocus={addClassName}
              />
            </AuthInputBlock>
          </AuthFormBlock>
          <AuthButton type="submit">
            Sign Up
          </AuthButton>
        </AuthForm>
      </AuthContent>
    </AuthStyled>
  );
}

export default SignUp;