import React, { useState } from 'react';
import { FormButton, FormInput, validate } from './layout/Form';
import "../styles/form/form.css"
import { login } from '../services/authService';
// import { validate } from './layout/Form';
import Joi from 'joi';
import AuthForm from './AuthForm';


const Login = ({  disAbleWelcome, loginLabel="Login" }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    password: Joi.string().min(5).required().label("Phone")
  }

  const handleChange = ({name, value}) => {
    const account = {...userData}
    account[name] = value;
    setUserData(account)
  }

  const handleSubmitForm = async () => {
    try {
      const { data } = await login({...userData})
      localStorage.setItem('token', data.token)
      console.log(data)
    } catch(error) {
      if (error.response && error.response.status === 401) {
        const loginErr = { ...errors }
        loginErr.username = error.response.data;
        loginErr.password = error.response.data;
        setErrors(loginErr)
      }
    }
  }

  return (
    <AuthForm authLabel={loginLabel} authType="login" welcomeMessage="Welcome Back!" disAbleWelcome={disAbleWelcome}>
        <div className="form-body_details">
          <FormInput type="text" name="username" w="100%" ph={"username"} onHandleChange={handleChange} textInput={userData} errors={errors} />
          <FormInput type="password" name="password" w="100%"  ph={"password"} onHandleChange={handleChange} textInput={userData} errors={errors}/>
        </div>
        <div className="form_action-btn">
          <FormButton label="Log in" w="50%" path="/" submit={handleSubmitForm} validate={validate(schema, userData)} /> 
        </div>
    </AuthForm>
  );
};

export default Login;