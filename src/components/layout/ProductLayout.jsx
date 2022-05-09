import React, { useContext, useState } from "react";
import "../../styles/productlayout/productlayout.css";
import UserContext from "../userContext";
import PlusMinusBtn from "./PlusMinusBtn";
import { formatToCurrency } from "../../utilities/formatToCurr";
import LikeBtn from "./LikeBtn";
import SlideContainer from "../SlideContainer";
import { starRating } from "../../utilities/starRating";
import ReactImageMagnify from "@blacklab/react-image-magnify";

const ProductLayout = ({ product }) => {
  const { dispatch, products, allAddToCart, curScreenWidth } = useContext(UserContext);
  const [value, setValue] = useState(1);
  const [resetVal, setResetVal] = useState(false);

  const getValue = (val) => {
    setValue(val);
  };

  const quantityOrdered = allAddToCart.filter(el => el.productId === product.id ?el.quantity : null)[0]?.quantity

  const productCategogies = products.filter(
    (el) => el.category === product.category && el.id !== product.id
  );

  return (
    <div key={product.id} className="product">
      <div className="product_description">
        <div className="product_description-1">
          <div className="product_description-1_img">
            {curScreenWidth <= 800 && (
              <img src={product.image} alt={product.title} />
            )}
            {curScreenWidth > 800 && (
              <ReactImageMagnify
                imageProps={{
                  alt: product.title,
                  src: product.image,
                  height: "36vw",
                  width: "36vw",
                }}
                magnifiedImageProps={{
                  height: 1000,
                  src: product.image,
                  width: 1000,
                }}
                magnifyContainerProps={{
                  height: "100%",
                  width: "120%",
                }}
                onActivationChanged={function noRefCheck() {}}
                onDetectedEnvironmentChanged={function noRefCheck() {}}
                onPositionChanged={function noRefCheck() {}}
                portalProps={{
                  horizontalOffset: 10,
                  id: "portal-test-id",
                }}
              />
            )}
          </div>

          {curScreenWidth > 800 && (
            <div className="product_categories">
              <h3 className="product_categories-header">Related products</h3>
              <SlideContainer products={productCategogies} />
            </div>
          )}
        </div>

        <div className="product_description-2">
          <div className="product_description-2_details">
            <h3 className="product_title">{product.title}</h3>
            <p className="product_price">{formatToCurrency(product.price)}</p>
            <div className="product_rating">
              <div className="rate_icon">
                {product.rating &&
                  starRating(product.rating.rate).map((el) => (
                    <i key={el.id} className={el.star} />
                  ))}
              </div>
              <p>({product.rating?.count} verified rating)</p>
            </div>
            <div className="watchlist">
              <LikeBtn product={product} />
              <p>Save for later</p>
            </div>
            <div className="order_quantity">
              <h3>
                Quantity{" "}
                {quantityOrdered && <span>(Ordered: {quantityOrdered})</span>}
              </h3>
              <PlusMinusBtn
                resetVal={resetVal}
                onSetResetVal={setResetVal}
                getValue={getValue}
              />
              <button
                className="add_cart"
                onClick={() => {
                  dispatch({
                    type: "addToCart",
                    id: product.id,
                    payload: value < 1 ? 1 : value,
                  });
                  setResetVal(true);
                }}
              >
                Add to cart
              </button>
            </div>
            <div className="description_details">
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      {curScreenWidth <= 800 && (
        <div className="product_categories">
          <h3 className="product_categories-header">Related products</h3>
          <SlideContainer products={productCategogies} />
        </div>
      )}
    </div>
  );
};

export default ProductLayout;
