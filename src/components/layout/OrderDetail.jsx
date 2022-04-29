import React, { useContext } from 'react';
import { formatToCurrency } from '../../utilities/formatToCurr';
import UserContext from '../userContext';

const OrderDetail = () => {
    const { ordered, subtotal, delivery, total} = useContext(UserContext)
    
    const orderSummary = [
        {detail: "SubTotal", value: subtotal},
        {detail: "Delivery", value: delivery},
        {detail: "Total", value: total}
    ]

    return (
      <>
        <div className="details">
          <h3 className="details_header">CART ITEMS</h3>
          <div className="details_container">
            {ordered.map((el) => (
              <div key={el.id} className="content">
                <div className="content_description-1">
                  <h4>{el.title}</h4>
                  <p>Price: {formatToCurrency(el.price)}</p>
                  <p>Quantity: {el.quantity}</p>
                </div>
                <div className="content_description-2">
                  <h3>TOTAL</h3>
                  {formatToCurrency(el.price * el.quantity)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sub_details">
          <h3 className="sub_details-header">PAYMENT SUMMARY</h3>
          {orderSummary.map((el, i) => (
            <div key={i} className="d-flex sub_total">
              <h4>{el.detail}</h4>
              <p>{formatToCurrency(el.value)}</p>
            </div>
          ))}
        </div>

        <div className="details_summary">
          <h3>TOTAL TO PAY</h3>
          <p>{formatToCurrency(total)}</p>
        </div>
      </>
    );
};

export default OrderDetail;