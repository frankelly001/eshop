import React, { useEffect, useState } from "react";
import Signup1 from "./layout/Signup1";
import Signup2 from "./layout/Signup2";
import Signup3 from "./layout/Signup3";
import Joi from "joi";
import passwordComplexity from 'joi-password-complexity'
import { validate, onHandleChange } from "./layout/Form";
import { signup } from "../services/authService";

const SignupFormOld = () => {
  const [step, setStep] = useState(1);
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
    long: "100101"
  })

  const [errors, setErrors] = useState({})

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
    firstname: Joi.string().alphanum().min(3).max(30).required().label("Firstname"),
    lastname: Joi.string().alphanum().min(3).max(30).required().label("Lastname"),
    username: Joi.string().alphanum().min(3).max(30).required().label("Username"),
    city: Joi.string().alphanum().min(3).max(30).required().label("City"),
    number: Joi.number().min(1).required().label("Street number"),
    street: Joi.string().min(1).max(50).required().label("Street address"),
    zipcode: Joi.string().min(3).max(11).required().label("ZIP code"),
    email: Joi.string().email({ minDomainSegments: 2, tlds: false }).label('Email'),
    phone: Joi.string().max(15).required().label("Phone"),
    password: passwordComplexity(complexityOptions).label('Password'),
    confirmPassword:Joi.string().required().label("Confirm Password").valid(Joi.ref('password')),
    lat: Joi.string().min(1).max(11).required().label("Lat"),
    long: Joi.string().min(1).max(11).required().label("Long"),
  }

  const handleChange = (inputEvent) => {
    const [userDetails, errors] = onHandleChange(inputEvent, schema, userData)
    setUserData(userDetails)
    setErrors(errors)
  };

  const mapToObjModel = (userInput) => {
    return {
      email: userInput.email,
      username: userInput.username,
      password: userInput.password,
      name: { 
        firstname: userInput.firstname, 
        lastname: userInput.lastname 
      },
      address: {
        city: userInput.city,
        street: userInput.street,
        number: parseInt(userInput.number),
        zipcode: userInput.zipcode,
        geolocation:{ 
          lat: userInput.lat, 
          long: userInput.long 
        },
      },
      phone: userInput.phone,
    }
  };
  
  const handleSubmit = async () => {
    const errors = validate(schema, userData);
    setErrors(errors || {} );
    try {
      const newUser = {...mapToObjModel(userData)}
      const { data } = await signup(newUser)
      console.log(data);
    } catch(error) {
      console.log(error.response.data)
    }

    // const newUser = mapToObjModel(userData)
    // console.log(newUser);
  }
  // console.log(user);

  switch (step) {
    case 1:
      return <Signup1 onNext={nextStep} onHandleChange={handleChange} textInput={userData} errors={errors}/>;

    case 2:
      return <Signup2 onNext={nextStep} onPrev={prevStep} onHandleChange={handleChange} textInput={userData} errors={errors}/>;

    case 3:
      return <Signup3 onPrev={prevStep} onHandleChange={handleChange} textInput={userData} errors={errors} onHandleSubmit={handleSubmit} validate={validate(schema, userData)}/>;
  }
};

export default SignupFormOld;

 // const [user, setUser] = useState({
  //   address: {
  //     city: "",
  //     geoloctaion: { lat: "", long: "" },
  //     number: "",
  //     street: "",
  //     zipcode: "",
  //   },
  //   email: "",
  //   id: "",
  //   name: { firstname: "", lastname: "" },
  //   password: "",
  //   phone: "",
  //   username: "",
  // });

  

  // const validate = () => {
  //   const options = {abortEarly: false}
  //   const { error } = schemaValidation.validate(userData, options)
  //   // console.log(error.details)
  //   if (!error) return null;

  //   const errors = {};
  //   error.details.map(el => {
  //     errors[el.path[0]] = el.message
  //   })
  //   setErrors(errors)
  //   console.log(errors);
  //   return errors
  // }

  // const validateProperty = ({ name, value }) => {
  //   const obj = {[name]: value};
  //   const schemaObj = Joi.object({[name]: schema[name]})
  //   let { error } = schemaObj.validate(obj)
  //   if (!error) return null;
  //   if (name !== "confirmPassword") {
  //     return error.details[0].message;
  //   } else {
  //     if (value !== userData.password) {
  //       return "\"Confirm Password\" must match \"Password\""
  //     } else {
  //       return null
  //     }
  //   }
  // }