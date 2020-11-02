import styled from 'styled-components';
import { ButtonStyled } from '../../components/buttons/ButtonStyled';
import { colorVariables, device } from '../../theme/variables';

export const AuthStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
  ${device.tabletL} {
    display: block;
    padding: 1rem 2rem;
  }
`;

export const AuthBg = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  ${device.tabletL} {
    display: none;
  }
`;

export const AuthFrontBgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${device.tabletL} {
    display: none;
  }
`;

export const AuthFrontBg = styled.img`
  width: 400px;
`;

export const AuthContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  ${device.tabletL} {
    justify-content: center;
  }
`;

export const AuthForm = styled.form`
  width: 320px;
  ${device.tabletL} {
    width: 100%;
    max-width: 300px;
  }
`;

export const AuthFormBlock = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
  &:before, &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #38d39f;
    transition: .4s;
  }
  &:before {
    right: 50%;
  }
  &:after {
    left: 50%;
  }
  ${device.laptopL} {
    margin: 10px 0;
  }

  &.focus {
    &:after, &:before {
      width: 50%;
    }
  }
  &.focus > div > h5 {
    top: -5px;
    font-size: 15px;
  }
`;

export const Avatar = styled.img`
  height: 100px;
  margin-bottom: 10px;
`;

export const AuthTitle = styled.h2`
  margin: 15px 0;
  color: #333;
  text-transform: uppercase;
  font-size: 2.9rem;
  ${device.laptopL} {
    font-size: 2.4rem;
  }
  ${device.tabletL} {
    font-size: 2rem;
    margin: 10px 0;
  }
`;

export const AuthInputBlock = styled.div`
  position: relative;
  height: 45px;
`;

export const AuthInputName = styled.h5`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: .3s;
`;

export const AuthInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
`;

export const AuthLink = styled.a`
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: .3s;
  &:hover {
    color: #38d39f;
  }
`;

export const AuthButton = styled(ButtonStyled)`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: .5s;
  &:hover, &:focus {
    background-position: right;
    border: 1px solid;
    border-color: #999;
  }
`;

export const AuthError = styled.p`
  position: absolute;
  top: 125%;
  right: 0;
  display: block;
  color: red;
`;