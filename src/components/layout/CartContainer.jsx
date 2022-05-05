import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/cartcontainer/cartcontainer.css";
import UserContext from '../userContext';
import CartItemLayout from "../layout/CartItemLayout";


const CartContainer = ({ inactive, actionBtn }) => {
    const { cartSwitch, orderedNum } = useContext(UserContext);
    const navigate = useNavigate()

    return (
      <div className='cart'>
        <h2 className="cart_header">
          {orderedNum < 1 ? `Your cart is empty!` : `Cart (${orderedNum})`}
        </h2>

        {orderedNum < 1 ? (
          <div className="ifempty">
            <p>Browse our categories and discover our best deals!</p>
            <button
              className="cart_btn gotohome"
              onClick={() => {
                navigate("/");
                cartSwitch();
              }}
            >
              Start shopping
            </button>
          </div>
        ) : (
          <CartItemLayout
          inactive={inactive}
          actionBtn={actionBtn}
          />
        )}
      </div>
    );
};

export default CartContainer;