import React, { useContext, useEffect, useState } from "react";
import "../styles/checkoutinfo/checkoutinfo.css";
import CartContainer from "./layout/CartContainer";
import "../styles/form/form.css";
import { FormButton, FormInput, validate, onHandleChange } from "./layout/Form";
import Joi from "joi";
import UserContext from "./userContext";
import { useNavigate } from "react-router-dom";

const CheckoutInfo = () => {
  const { orderedNum, userDelivery, setUserDelivey } = useContext(UserContext);
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  useEffect(()=> {
    if (orderedNum<1) navigate("/")
  }, [orderedNum])


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
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: false })
      .label("Email"),
    phone1: Joi.string().max(15).required().label("Phone"),
    phone2: Joi.string().min(0).required().label("Phone"),
    city: Joi.string().alphanum().min(3).max(30).required().label("City"),
    number: Joi.number().min(1).required().label("Street number"),
    street: Joi.string().min(1).max(50).required().label("Street address"),
    zipcode: Joi.string().min(3).max(11).required().label("ZIP code"),
  };

  // const schemaValidation = Joi.object(schema)
  // validate(schemaValidation, userInfo)

  const handleChange = (inputEvent) => {
    const [userDetails, errors] = onHandleChange(inputEvent, schema, userDelivery)
    // setUserInfo(userDetails)
    setUserDelivey(userDetails)
    setErrors(errors)
  };

  const handleNext = () => {
    navigate("/checkout/payment")
  };

  return (
    <div className="checkout_info">
      <div className="checkout_info_container">
        <div className="checkout_info_container-1">
          <h3 className="info_header">Customer delivery details</h3>
          {/* <Login disAbleWelcome loginLabel="Existing Customer?" /> */}
          <div className="form">
            <h6 className="form_warning">
              Please make sure your delivery details is correct
            </h6>
            <div className="form-body">
              <div className="form-body_details">
                <FormInput
                  name="firstname"
                  w="49.5%"
                  ph="Firstname"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  name="lastname"
                  w="49.5%"
                  ph="Lastname"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  name="email"
                  w="100%"
                  ph="Email"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  type="number"
                  name="phone1"
                  w="100%"
                  ph="Phone"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  type="number"
                  name="phone2"
                  w="100%"
                  ph="Additional phone (optional)"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  name="city"
                  w="100%"
                  ph="City"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  type="number"
                  name="number"
                  w="30%"
                  ph="Street no"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  name="street"
                  w="69%"
                  ph="Street"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
                <FormInput
                  name="zipcode"
                  w="100%"
                  ph="Zipcode"
                  textInput={userDelivery}
                  errors={errors}
                  onHandleChange={handleChange}
                />
              </div>
              <div className="form_action-btn">
                <FormButton
                  label="Proceed Payment"
                  w="60%"
                  validate={validate(schema, userDelivery)}
                  onNext={handleNext}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout_info_container-2">
          <CartContainer inactive actionBtn/>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
