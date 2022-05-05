import React, { useContext } from "react";
import "../../styles/RenderLoader/renderloader.css";
import UserContext from "../userContext";

const RenderLoader = () => {
  const { products } = useContext(UserContext);

  return (
    <>
      {products.length > 0 ? (
        <div></div>
      ) : (
        <div className="loader">
          <div className="loader_icon">
            <i className="fa-solid fa-spinner" />
          </div>
        </div>
      )}
    </>
  );
};

export default RenderLoader;
