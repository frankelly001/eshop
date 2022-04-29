import React from "react";
import { FormButton, FormInput } from "./Form";
import "../../styles/form/form.css";

const Signup1 = ({ onNext, onHandleChange, textInput, errors }) => {
  
  return (
    <>
        <div className="form-body_details">
          <FormInput
            type="text"
            name="firstname"
            w="100%"
            ph={"firstname"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput
            type="text"
            name="lastname"
            w="100%"
            ph={"lastname"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput
            type="text"
            name="username"
            w="100%"
            ph={"username"}
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
        </div>
        <div className="form_action-btn">
           <FormButton label="Next" w="50%" onNext={onNext} disabled={false} type={'submit'}/>
        </div>
    </>
  );
};

export default Signup1;
