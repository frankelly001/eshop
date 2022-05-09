import React, { useContext, useEffect, useRef, useState } from "react";
import { formatToCurrency } from "../utilities/formatToCurr";
import "../styles/slidecontainer/slidecontainer.css";
import UserContext from "./userContext";
import { useNavigate } from "react-router-dom";
import { formatStr } from "../utilities/formatString";
import { usePathnameCheck } from "./usePathnameCheck";

const SlideContainer = ({ products, check, turnOffSideBar }) => {
  // const [scrollWidth, setScrollWidth] = useState();
  const [scrollBtn, setScrollBtn] = useState({
    // both: false,
    left: false,
    right: false,
  });
  const { dispatch, onLike, cartSwitch, allAddToCart } =
    useContext(UserContext);
  const ref = useRef(null);
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(0);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const ifCheckoutPay = usePathnameCheck("/checkout/payment")

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        const minScrollLeft = 0;
        const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
        let uptScrollBtn = { ...scrollBtn };

        uptScrollBtn.left = scrolling === minScrollLeft ? false : true;
        uptScrollBtn.right = scrolling === maxScrollLeft ? false : true;
        // uptScrollBtn.both = ref.current.scrollWidth > ref.current.clientWidth
        // console.log(ref.current.scrollWidth, ref.current.clientWidth);
        setScrollBtn(uptScrollBtn);
      }
    }, 150);

    const onScroll = () => {
      setScrolling(ref.current.scrollLeft);
    };
    ref.current.addEventListener("scroll", onScroll);

    return () => {
      // ref.current.removeEventListener("scroll", onScroll)
    };
  }, [scrolling, scrollBtn, check, allAddToCart]);

  const addSavetoCart = (product) => {
    dispatch({ type: "addToCart", id: product.id });
    onLike(product);
  };

  return (
    <div className="slide_container">
      <ul className="slide_container-content" ref={ref}>
        {products.map((product) => (
          <li key={product.id} className="slide_product">
            <div className="slide_product-img">
              <img
                onClick={() => {
                  navigate(`/products/${formatStr(product.title)}`);
                  turnOffSideBar && cartSwitch();
                }}
                src={product.image}
                alt={product.title}
              />
              <div
                onDoubleClick={() => {
                  navigate(`/products/${formatStr(product.title)}`);
                  turnOffSideBar && cartSwitch();
                }}
                className="doubletab"
              >
                <p className="doubletab_label">Double tab to view</p>
                <i className="fa-solid fa-hand-pointer" />
              </div>
            </div>
            <div className="slide_product-details">
              <h3>{product.title}</h3>
              <p>{formatToCurrency(product.price)}</p>
              {!ifCheckoutPay && <button className="add" onClick={() => addSavetoCart(product)}>
                add to cart
              </button>}
            </div>
          </li>
        ))}
      </ul>

      <div className="scroll_btn">
        {scrollBtn.left && (
          <button
            className="direction direction-left"
            onClick={() => scroll(-133)}
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
        )}
        {scrollBtn.right && (
          <button
            className="direction direction-right"
            onClick={() => scroll(133)}
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SlideContainer;
