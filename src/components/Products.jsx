import React, { useContext, useEffect } from "react";
import ProductsLayout from "./layout/ProductsLayout";
import UserContext from "./userContext";

const Products = ({ products }) => {
  const { onSelect } = useContext(UserContext);

  useEffect(() => {
    onSelect("Home");
  }, []);
  return <ProductsLayout allProducts={products} homePage />;
};

export default Products;
