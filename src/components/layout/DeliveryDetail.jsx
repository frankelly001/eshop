import React, { useContext } from 'react';
import UserContext from '../userContext';

const DeliveryDetail = () => {
    const { userDelivery } = useContext(UserContext)
    const { firstname, lastname, email, phone1, phone2, city, number, street, zipcode } = userDelivery;
    
    const deliveryDetailArr = [
        {detail: "Firstname", value: firstname},
        {detail: "Lastname", value: lastname},
        {detail: "Email", value: email},
        {detail: "Phone", value: phone1},
        {detail: "Additional Phone", value: phone2},
        {detail: "City", value: city},
        {detail: "Street no", value: number},
        {detail: "Street", value: street},
        {detail: "Zipcode", value: zipcode}
    ]

    return (
      <div className="details">
        <h3 className="details_header">DELIVERY DETAIL</h3>

        <div className="details_container">
          {deliveryDetailArr.map((el, i) => (
            <div key={i} className="content">
              <div className="content_description-1">
                <h4>{el.detail}</h4>
                <p>{el.value ? el.value : "No Value"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default DeliveryDetail;