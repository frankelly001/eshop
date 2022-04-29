import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UserContext from '../userContext';
import { EShopCartIcon } from '../icons/EShopIcons';
import SideBar from '../SideBar';

const Nav = () => {
  const { orderedNum, cartSwitch, setFlyoutMenu, flyoutMenu } = useContext(UserContext)
  const [authContent, setAuthContent] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  

    return (
      <header className="eshop_header-1">
        <div className="side-1">
          {pathname === "/" && <button><i onClick={()=>setFlyoutMenu(!flyoutMenu)} className="fa-solid fa-bars" /></button>}
          <h1 className="header_name" onClick={()=>navigate("/")}>eShop</h1>
        </div>
        <ul className="header_nav">
          <li>
            <div className="dropdown" onMouseOver={()=>setAuthContent(true)} onMouseLeave={()=>setAuthContent(false)}>
              <button className="dropdown_btn">
                Account
                <span>
                  <i className="fa-solid fa-angle-down" />
                </span>
              </button>
              <div onClick={()=>setAuthContent(false)} className="dropdown_content" style={{maxHeight: authContent ? "100px" : "0"}}>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </li>
          <li onClick={()=>cartSwitch()}>
            <button className='cart-btn'><EShopCartIcon /></button>
            {orderedNum>0 && <div className='cart-notification'>{orderedNum}</div>}
          </li>
        </ul>
        <SideBar />
      </header>
    );
};

export default Nav;