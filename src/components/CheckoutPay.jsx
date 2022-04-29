import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/checkoutpayment/checkoutpayment.css"
import { formatToCurrency } from '../utilities/formatToCurr';
import { config } from "./payConfig";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import UserContext from './userContext';
import ViewDetails from './layout/ViewDetails';
import DeliveryDetail from './layout/DeliveryDetail';
import OrderDetail from './layout/OrderDetail';

const CheckoutPay = () => {
    const { total, userDelivery, orderedNum } = useContext(UserContext)
    const [viewDetails, setViewDetails] = useState({
      delivery: false,
      order: false,
    })
    const navigate = useNavigate()

    useEffect(()=> {
      if (orderedNum < 1) navigate("/")
    }, [orderedNum])

    const handleViewDetails = (id) => {
      const view = {...viewDetails}
      view[id] = !view[id]
      setViewDetails(view)
    }

  const handleFlutterPayment = useFlutterwave(config(userDelivery, total));

  const handleSubmit = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

    // console.log(ordered);
    
    // if (viewDetails.delivery === true || viewDetails.order === true) document.body.style.overflow = 'hidden';
    // else document.body.style.overflow = 'unset';

    const { firstname, lastname, email, phone1, phone2, city, number, street } = userDelivery

    return (
      <div className="checkout_pay">
        <div className="checkout_pay-container">

          <div className="checkout_pay-content">
            <div className="details-title">
              <h3>Customer Delivery details</h3>
              <p onClick={()=>handleViewDetails("delivery")} >see details {">"}</p>
            </div>
            <div className="details_content">
              <p>{`${firstname} ${lastname} - ${email}`}</p>
              <p>{`${city} - ${number} ${street}`}</p>
              <p>{`${phone1} ${phone2 && `/ ${phone2}`}`}</p>
              <Link to="/checkout/information" className="change">
                Change
              </Link>
            </div>

            <ViewDetails detailType="delivery" viewSwitch={viewDetails.delivery} onHandleView={handleViewDetails} label="Customer detail">
               <DeliveryDetail />
            </ViewDetails>

          </div>

          <div className="checkout_pay-content">
            <div className="details-title">
              <h3>Order Summary</h3>
              <p onClick={()=>handleViewDetails("order")}>see details {">"}</p>
            </div>
            <div className="details_content flex_row">
              <p className="total">Total to pay</p>
              <p className="price">{formatToCurrency(total)}</p>
            </div>

            <ViewDetails detailType="order" viewSwitch={viewDetails.order} onHandleView={handleViewDetails} label="Cart Detail">
                <OrderDetail />
            </ViewDetails>
          </div>

          <button onClick={handleSubmit} className="paynow">{`Pay now: ${formatToCurrency(
            total
          )}`}</button>

          <p className="policy">
            By tapping "PAY NOW" I accept eShop´s{" "}
            <span>Payment Terms & Conditions</span>,{" "}
            <span>General Terms and Conditions</span> , and{" "}
            <span>Privacy and Cookie Notice</span>{" "}
          </p>
        </div>
        <div className="pls_note">
          <p>
            Please note: eShop will never ask you for your password, PIN, CVV or
            full card details over the phone or via email. Need help? Contact us
            on <span>https://www.eShop.com.ng/contact/</span>.
          </p>
        </div>
      </div>
    );
};

export default CheckoutPay;