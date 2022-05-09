import React, { useContext } from "react";
import UserContext from "../userContext";
import PlusMinusBtn from "./PlusMinusBtn";
import { useNavigate } from "react-router-dom";
import { formatToCurrency } from "../../utilities/formatToCurr";
import { formatStr } from "../../utilities/formatString";
import { usePathnameCheck } from "../usePathnameCheck";

const CartItemLayout = ({ inActiveFunc }) => {
  const { dispatch, ordered, cartSwitch, subtotal, delivery, total } = useContext(UserContext);
  const navigate = useNavigate();

  const ifCheckoutPay = usePathnameCheck("/checkout/payment")
  const ifCheckoutInfo = usePathnameCheck("/checkout/information")

  return (
    <>
      <ul className="cart_items">
        {ordered.map((el) => (
          <li key={el.id} className="item_added">
            <div className="item_description">
              <div
                className="item-img"
                onClick={() => {
                  navigate(`/products/${formatStr(el.title)}`);
                  {
                    !inActiveFunc && cartSwitch();
                  }
                }}
              >
                <img src={el.image} alt="" />
              </div>
              <div className="description_content">
                <h3 className="product_name">{el.title}</h3>
                <span>
                  <p className="price">
                    {formatToCurrency(el.price * el.quantity)}
                  </p>
                  <p className="price_description">
                    (
                    {`${formatToCurrency(el.price)} by ${el.quantity} ${
                      el.quantity > 1 ? "items" : "item"
                    }`}
                    )
                  </p>
                </span>
                {!ifCheckoutPay && (
                  <PlusMinusBtn
                    size={"small"}
                    value={el.quantity}
                    dispatchInput={{ type: "mutateCart", id: el.id }}
                    dispatchAdd={{ type: "addToCart", id: el.id }}
                    dispatchSub={{ type: "subFromCart", id: el.id }}
                  />
                )}
              </div>
            </div>
            {!ifCheckoutPay && (
              <div
                className="delete_btn"
                onClick={() => dispatch({ type: "removeItem", id: el.id })}
              >
                <i className="fa-solid fa-trash-can"></i>
                <p>Remove</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="cart_summary">
        <h2 className="cart_summary-header">Cart summary</h2>

        <div className="cart_summary-detail subtotal">
          <p>Subtotal</p>
          <p>{formatToCurrency(subtotal)}</p>
        </div>

        <div className="cart_summary-detail delivery">
          <p>Delivery fee</p>
          <p>{formatToCurrency(delivery)}</p>
        </div>

        <div className="cart_summary-detail Total">
          <p>Total</p>
          <p>{formatToCurrency(total)}</p>
        </div>
      </div>
      {!ifCheckoutPay &&  (
        <div className="cart-decision">
          <button
            className="cart_btn empty_btn"
            onClick={() => dispatch({ type: "clearCart" })}
          >
            <i className="fa-solid fa-shopping-cart" />
            Empty cart
          </button>
          {!ifCheckoutInfo && <button
            className="cart_btn checkout_btn"
            onClick={() => {
              navigate("/checkout/information");
              cartSwitch();
            }}
          >
            Checkout
            <i className="fa-solid fa-credit-card-alt" />
          </button>}
        </div>
      )}
    </>
  );
};

export default CartItemLayout;