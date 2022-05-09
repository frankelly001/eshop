import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductsLayout from './layout/ProductsLayout';
import UserContext from './userContext';

const Category = () => {
    const [allProducts, setAllProducts] = useState([])
    const { products , categories, onSelect } = useContext(UserContext)
    let { category } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        try{
            let checkCategories = categories.filter(el => el === category)
            if (categories.length > 0 && checkCategories.length === 0) navigate("/not-found")
            if (category === "Home") navigate("/")
            let newProducts = products.filter(product => product.category === category)
            onSelect(category)
            setAllProducts(newProducts)
        } catch(error) {
            console.log(error)
        }

    }, [category, products, categories, navigate])
    

    return (
        <ProductsLayout allProducts={allProducts} />
    );
};

export default Category;