import React from 'react';
import { FormButton, FormInput } from './Form';
import "../../styles/form/form.css"


const Signup3 = ({ onPrev, onHandleChange, textInput, errors, onHandleSubmit, validate }) => {

    return (
      <>
        <div className="form-body_details">
          <FormInput
            type="text"
            name="phone"
            w="100%"
            ph={"Phone (e.g: 08099999999)"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput
            type="text"
            name="email"
            w="100%"
            ph={"Email"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput
            type="password"
            name="password"
            w="100%"
            ph={"Password"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            w="100%"
            ph={"Confirm Password"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
        </div>
        <div className="form_action-btn">
          <FormButton label="Back" w="49%" onPrev={onPrev} />
          <FormButton
            label="Done"
            w="49%"
            submit={onHandleSubmit}
            validate={validate}
          />
        </div>
      </>
    );
};

export default Signup3;