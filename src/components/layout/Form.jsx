import React, { useState } from 'react';
import '../../styles/form/form.css'
import Joi from "joi";

export const FormInput = ({ textInput, type="text", w, ph, onHandleChange, name, errors, iconClasses }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handlePassword = () => {
      setShowPassword(!showPassword)
    }
    
    const inputType = showPassword ? "text" : "password"
    const classes = `fa fa-eye${showPassword ? "" : "-slash"}`

    return (
      <div className="form_input" style={{ minWidth: w, maxWidth: w }}>
        <input
          className="form_input-field"
          name={name}
          type={type !== "password" ? type : inputType}
          value={textInput[name]}
          placeholder={ph}
          onChange={(e) => onHandleChange(e.currentTarget)}
        />
        {type === "password" && <i onClick={handlePassword} className={classes} />}
        {iconClasses && type !== "password" && <i className={iconClasses} />}
        {errors[name] && <div className='alert_error'>{errors[name]}</div>}
      </div>
    );
};

export const FormButton = ({ w, label, onNext, onPrev, validate, type='button', submit}) => {
    // const navigate = useNavigate()
    return (
      <button
        type={type}
        className={validate ? "form_btn disable" : "form_btn"}
        style={{ minWidth: w, maxWidth: w }}
        onClick={() => {
          if (onNext) {
            onNext();
          } else if (onPrev) {
            onPrev();
          } else if (submit) {
            submit()
          }
        }}
        disabled={validate}
      >
        {label}
      </button>
    );
}

export const validate = (schema, data) => {
  // const schemaValidation = Joi.object(schema)
  const options = {abortEarly: false}
  const { error } = Joi.object(schema).validate(data, options)
  if (!error) return null;

  const errors = {};
  error.details.map(el => {
    return errors[el.path[0]] = el.message
  })
  return errors
}

export const validateProperty = ({ name, value }, schema, data) => {
  const obj = {[name]: value};
  const schemaObj = Joi.object({[name]: schema[name]})
  let { error } = schemaObj.validate(obj)
  if (!error) return null;
  if (name !== "confirmPassword") {
    return error.details[0].message;
  } else {
    if (value !== data.password) {
      return "\"Confirm Password\" must match \"Password\""
    } else {
      return null
    }
  }
}

export const onHandleChange = (inputEvent, schema, userData) => {
  const account = { ...userData };
  account[inputEvent.name] = inputEvent.value;

  // const allErrors = {...errors}
  const allErrors = {}
  let errorMessage = validateProperty(inputEvent, schema, userData)
  if (errorMessage) allErrors[inputEvent.name] = errorMessage;
  else delete allErrors[inputEvent.name];

  return [account, allErrors]
};