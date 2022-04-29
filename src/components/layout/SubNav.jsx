import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../userContext';

const SubNav = () => {
    const navigate = useNavigate()
    const { categories, query, onSearch, onEmptyQuery, selected, onSelect } = useContext(UserContext)
    const [viewCat, setViewCat] = useState(false)

    const handleKeyPress = ({ key }) => {
        if(key === 'Enter' && query){
            navigate(`allproducts/search=${query}`)
            onEmptyQuery()
        }
    }

    return (
        <header className="eshop_header-2">
        <div className="search">

            <div className='dropdown' onClick={()=>setViewCat(!viewCat)}>{selected ? selected : "Select"} <i className="fa-solid fa-angle-down" /></div>

            <ul className="search_filter" style={{maxHeight: viewCat && "250px"}}>
                {categories.map(category => <li onClick={()=>setViewCat(!viewCat)} key={category}><NavLink onClick={()=>onSelect(category)} className={category === selected ? "category category_active" : "category"} to={`/category/${category}`}>{category}</NavLink></li>)}
            </ul>
            <div className="search_input">
                <input onKeyPress={(e)=>handleKeyPress(e)} type="text" placeholder="Search item" onChange={(e) => onSearch(e.currentTarget)} value={query} />
                <button onClick={()=>{query && navigate(`allproducts/search=${query}`); onEmptyQuery()}}><i className={"fa-solid fa-search"} /></button>
            </div>
        </div>
      </header>
    );
};

export default SubNav;