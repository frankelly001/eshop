import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/productslayout/productslayout.css";
import UserContext from "../userContext";
import { formatToCurrency } from "../../utilities/formatToCurr";
import LikeBtn from "./LikeBtn";
import { formatStr } from "../../utilities/formatString";
import LandingPageLayout from "./LandingPageLayout";

const ProductsLayout = ({ allProducts, homePage }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  return (
    <div>
      {homePage && <LandingPageLayout />}
      <section className="eshop_body">
        <div className="eshop_body-content">
          {homePage && <h2 className="eshop_body-header">New Arrivals</h2>}
          {allProducts.map((product) => (
            <div key={product.id} className="eshop_product">
              <div className="eshop_product-img">
                <LikeBtn product={product} />
                <img
                  onClick={() =>
                    navigate(`/products/${formatStr(product.title)}`)
                  }
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="eshop_product-details">
                <h3>{product.title}</h3>
                <p>{formatToCurrency(product.price)}</p>
                <button
                  className="addtocart"
                  onClick={() =>
                    dispatch({ type: "addToCart", id: product.id })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsLayout;
