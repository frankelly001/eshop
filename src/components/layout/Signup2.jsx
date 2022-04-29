import React from "react";
import { FormButton, FormInput } from "./Form";
import "../../styles/form/form.css";

const Signup2 = ({ onNext, onPrev, onHandleChange, textInput, errors }) => {
  return (
    <>
        <div className="form-body_details">
          <FormInput 
            type="text" 
            name="city" 
            w="100%" 
            ph={"City"} 
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput 
            type="number" 
            name="number" 
            w="30%" 
            ph={"Street no"} 
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput 
            type="text" 
            name="street" 
            w="68%" 
            ph={"Street Address"} 
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
          />
          <FormInput 
            type="text" 
            name="zipcode"
            w="100%" 
            ph={"Zip code"} 
            textInput={textInput}
            errors={errors}
            onHandleChange={onHandleChange}
            />
        </div>
        <div className="form_action-btn">
          <FormButton label="Back" w="49%" onPrev={onPrev} />
          <FormButton label="Next" w="49%" onNext={onNext} disabled={false} type={'submit'}/>
        </div>
    </>
  );
};

export default Signup2;
