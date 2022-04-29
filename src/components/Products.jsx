import React, { useContext, useEffect } from 'react';
import ProductsLayout from './layout/ProductsLayout';
import UserContext from './userContext';
import LandingPageLayout from './layout/LandingPageLayout';

const Products = ({ products }) => {
    const { onSelect } = useContext(UserContext)

    useEffect(()=> {
        onSelect("Home")
    }, [])
    return (
      <div>
        {/* {products.length > 0 && <LandingPageLayout />} */}
        <ProductsLayout allProducts={products} homePage />
      </div>
    );
};

export default Products;