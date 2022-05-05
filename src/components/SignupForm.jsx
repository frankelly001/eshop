import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Signup1 from "./layout/Signup1";
import Signup2 from "./layout/Signup2";
import Signup3 from "./layout/Signup3";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import { validate, onHandleChange } from "./layout/Form";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    city: "",
    number: "",
    street: "",
    zipcode: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    lat: "10111",
    long: "100101",
  });

  const [errors, setErrors] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const complexityOptions = {
    min: 5,
    max: 1024,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 0,
    requirementCount: 4,
  };

  const schema = {
    firstname: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Lastname"),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),
    city: Joi.string().alphanum().min(3).max(30).required().label("City"),
    number: Joi.number().min(1).required().label("Street number"),
    street: Joi.string().min(1).max(50).required().label("Street address"),
    zipcode: Joi.string().min(3).max(11).required().label("ZIP code"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: false })
      .label("Email"),
    phone: Joi.string().max(15).required().label("Phone"),
    password: passwordComplexity(complexityOptions).label("Password"),
    confirmPassword: Joi.string()
      .required()
      .label("Confirm Password")
      .valid(Joi.ref("password")),
    lat: Joi.string().min(1).max(11).required().label("Lat"),
    long: Joi.string().min(1).max(11).required().label("Long"),
  };

  const handleChange = (inputEvent) => {
    const [userDetails, errors] = onHandleChange(inputEvent, schema, userData);
    setUserData(userDetails);
    setErrors(errors);
  };

  const mapToObjModel = (userInput) => {
    return {
      email: userInput.email,
      username: userInput.username,
      password: userInput.password,
      name: {
        firstname: userInput.firstname,
        lastname: userInput.lastname,
      },
      address: {
        city: userInput.city,
        street: userInput.street,
        number: parseInt(userInput.number),
        zipcode: userInput.zipcode,
        geolocation: {
          lat: userInput.lat,
          long: userInput.long,
        },
      },
      phone: userInput.phone,
    };
  };

  const handleSubmit = async () => {
    const errors = validate(schema, userData);
    setErrors(errors || {});
    try {
      const newUser = { ...mapToObjModel(userData) };
      const { data } = await signup(newUser);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }

    // const newUser = mapToObjModel(userData)
    // console.log(newUser);
  };

  const renderSignUpSwitch = (signupType) => {
    switch (signupType) {
      case 1:
        return (
          <Signup1
            onNext={nextStep}
            onHandleChange={handleChange}
            textInput={userData}
            errors={errors}
          />
        );

      case 2:
        return (
          <Signup2
            onNext={nextStep}
            onPrev={prevStep}
            onHandleChange={handleChange}
            textInput={userData}
            errors={errors}
          />
        );

      case 3:
        return (
          <Signup3
            onPrev={prevStep}
            onHandleChange={handleChange}
            textInput={userData}
            errors={errors}
            onHandleSubmit={handleSubmit}
            validate={validate(schema, userData)}
          />
        );
      default:
        navigate("/not-found");
    }
  };

  return (
    <AuthForm
      authLabel="Sign Up"
      authType="signup"
      welcomeMessage="Welcome to eShop"
    >
      {renderSignUpSwitch(step)}
    </AuthForm>
  );
};

export default SignupForm;
