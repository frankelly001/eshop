import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formatStr } from '../utilities/formatString';
import ProductLayout from './layout/ProductLayout';
import RenderLoader from './layout/RenderLoader';

const ProductDetails = ({ products }) => {
    let [product, setProduct] = useState({})
    let { title } = useParams()
    const navigate = useNavigate()
    
    useEffect(()=> {
        // let productObj = products.length > 0 ? products.filter(product => product.title.replace(/[^A-Z0-9]/ig, "") == title.replace(/[^A-Z0-9]/ig, ""))[0] : {}

        let productObj = products.length > 0 ? products.filter(product => formatStr(product.title) == title)[0] : {}

        // let productObj = products.length > 0 ? products.filter(product => product.id == title)[0] : {}

        // let productObj = products.length > 0 ? products.filter(product => product.title.toLowerCase().startsWith(title.toLowerCase()))[0] : {}
        if (!productObj) navigate("*")
        // console.log(productObj, title)
        setProduct(productObj)
        return function cleanUp() {}
    }, [products, title, navigate])

    // console.log(window.pageYOffset);
    // if (Object.entries(product).length > 0) {
    //     console.log('uploaded')
    //     // console.log(product)
    // } else {
    //     console.log('not yet uploaded')
    // }
    // console.log(title)

    return (
        <div>
            <RenderLoader allData={products}/>
            <ProductLayout product={product} />
        </div>
        
    );
};

export default ProductDetails;