import { usePath } from 'hookrouter';

export const PathLabel = (url, className = "active") => {
  const path = usePath();
  if(path === url) {
    return className;
  }
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const validate = (values) => {
  let errors = {};
  if(!values.email) {
    errors.email = 'Email address is required';
  } else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if(!values.repeatEmail) {
    errors.repeatEmail = 'Repeat email is required';
  } else if(values.email.toUpperCase() !== values.repeatEmail.toUpperCase()) {
    errors.repeatEmail = 'Email is not the same';
  }
  if(!values.password) {
    errors.password = 'Password is required';
  } else if(values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if(!values.repeatPassword) {
    errors.repeatPassword = 'Repeat password is required';
  } else if(values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Password is not the same';
  }
  return errors;
};