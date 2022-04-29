import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductsLayout from './layout/ProductsLayout';
import "../styles/search/search.css"
import RenderLoader from './layout/RenderLoader';
import UserContext from './userContext';

const Search = ({ products }) => {
    const [filteredProducts, setfilteredProducts] = useState([])
    const { onDisableSelected } = useContext(UserContext)
    const navigate = useNavigate()
    const { search } = useParams()

    let checkedSearch = search.split('=')[1]
    
    useEffect(() => {
        if (!checkedSearch) navigate("/not-found")
        let filtered = checkedSearch 
        ? products.filter(product => product.title.toLowerCase().startsWith(checkedSearch.toLowerCase()) 
        || product.category.toLowerCase().startsWith(checkedSearch.toLowerCase()))  
        : null;
        onDisableSelected()
        setfilteredProducts(filtered)

        return function cleanUp() {}
    }, [checkedSearch, products, navigate])

    return (
        <div className='search'>
            <RenderLoader allData={products} />
            <p className='search_results'>Search Results for:<strong>{checkedSearch}</strong></p>
                {filteredProducts && filteredProducts.length > 0 ? <ProductsLayout allProducts={filteredProducts}/> : <p className='notfound'>No products found</p>}
        </div>
    );
};

export default Search;