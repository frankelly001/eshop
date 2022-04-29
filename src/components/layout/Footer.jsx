import Joi from 'joi';
import React, { useState } from 'react';
import "../../styles/footer/footer.css"
import "../../styles/form/form.css"
import { FormButton, FormInput, onHandleChange, validate } from './Form';
import { getFooter } from '../../services/footer';
import { Link } from 'react-router-dom';
import { FlutterwaveIcon, MastercardIcon, PaymentOnDeliveryIcon, UssdIcon, VerveIcon, VisaIcon } from '../icons/PaymentIcons';
import { ApplestoreIcon, GoogleplayIcon } from '../icons/appStoreIcons';
import { EShopAppIcon, EShopLogo } from "../icons/EShopIcons"
// import { Visa } from '../icons/paymentIcon';


const Footer = () => {
    const [email, setEmail] = useState({ email: "" })
    const [emailError, setEmailError] = useState({})

    const schema = {
        email: Joi.string().email({ minDomainSegments: 2, tlds: false }).label("Email")
    }

    const handleChange = (inputEvent) => {
        const [data, dataError] = onHandleChange(inputEvent, schema, email)
        setEmail(data)
        setEmailError(dataError)
    }

    return (
      <div className="footer">
        <div className="footer-1">
          {/* <h1>eShop</h1> */}
          <div className="eshop_logo"><EShopLogo /></div>
          <div className="newsletter">
            <h4>New to eShop?</h4>
            <p>
              Subscribe to our newsletter to get Updates on our latest offers!
            </p>
            {/* <div className="form-body"></div> */}
            <div className="form-body_details">
              <FormInput
                name="email"
                w="68%"
                ph="Email"
                textInput={email}
                errors={emailError}
                onHandleChange={handleChange}
                iconClasses={"fa-solid fa-envelope"}
              />
              <FormButton
                label="male"
                w="15%"
                validate={validate(schema, email)}
              />
              <FormButton
                label="female"
                w="15%"
                validate={validate(schema, email)}
              />
            </div>
            <div className="form_action-btn form_action-btns">
           
            </div>
          </div>
          <div className="app">
            <div className="app-1">
              {/* <i className="fa-solid fa-cart-shopping" /> */}
              <EShopAppIcon />
              <div className="app-1_header">
                <h4>DOWNLOAD ESHOP APP</h4>
                <p>Get access to exclusive offers!</p>
              </div>
            </div>
            <div className="app-2">
              <div className="store">
                <GoogleplayIcon />
              </div>
              <div className="store">
                <ApplestoreIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          {getFooter().map((el) => (
            <div key={el._id} className="footer-2_list">
              <h3>{el.title}</h3>
              <div className="list">
                {el.list.map((el, i) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="footer-2_list">
            <h3>JOIN US ON</h3>
            <div className="list social">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>

          <div className="footer-2_list">
            <h3>PAYMENT METHODS & DELIVERY PARTNERS</h3>
            <div className="list payment">
              <PaymentOnDeliveryIcon />
              <UssdIcon />
              <FlutterwaveIcon />
              <VisaIcon />
              <VerveIcon />
              <MastercardIcon />
            </div>
          </div>
        </div>
        <div className="footer_copyright">
        {/* <hr style={{height: "1px"}} /> */}
            <p>
              Built by<Link to="/">FRANKELLY</Link> for his <Link to="/">REACT JS PRACTICE PROJECT</Link>. Copyright © by Frankelly. You are 100% allowed to
              use this webpage for both personal and commercial use, but NOT to
              claim it as your own design. A credit to the original author,
              Frankelly, is of course highly appreciated!
            </p>
            {/* <Visa /> */}
        </div>
      </div>
    );
};

export default Footer;