import React, { useContext, useEffect, useState } from 'react';
import EshopCarousel from '../EshopCarousel';
import "../../styles/landingpagelayout/landingpagelayout.css"
import { getFlyoutMenu } from '../../services/flyoutMenuService';
import { getlandingPage } from '../../services/LandingPageService';
import ModalOverlay from './ModalOverlay';
import UserContext from '../userContext';

const LandingPageLayout = () => {
    const [showMenuId, setShowMenuId] = useState("")
    const { flyoutMenu, setFlyoutMenu, curScreenWidth } = useContext(UserContext)

    if (flyoutMenu === true) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    useEffect(()=> {
      if (!flyoutMenu) setShowMenuId("")
    }, [flyoutMenu])

    return (
      <div className='landing_page'>
        <ModalOverlay onHandleDisplay={setFlyoutMenu} onDisplay={flyoutMenu} switchCrtl={false}/>
        <div className="landing_page-1">
          <div className="flyout" style={{width: flyoutMenu && curScreenWidth <= 800 && "45%"}}>
          <div className="our_cat">
            <h2 className='brand_name'>eShop</h2>
            {flyoutMenu && <i className="fa-solid fa-times close_menu" onClick={()=>{setFlyoutMenu(!flyoutMenu)}} />}
            <h3>Our Categories</h3>  
          </div>
            <ul className="flyout_menu">
              {getFlyoutMenu().map((flyoutMenu) => (
                <li key={flyoutMenu._id} className="menu_item">
                  <p className="menu_title" onClick={()=>setShowMenuId(flyoutMenu._id)}>
                    <span>
                      <i className={flyoutMenu.fontAwesome_icon} />
                    </span>
                    {flyoutMenu.title}
                  </p>
                  <div className="menu" style={{width: showMenuId == flyoutMenu._id && curScreenWidth <= 800 && "50%"}}>
                    <div className="fo_header">
                       <h3 className='fo_title'>{flyoutMenu.title}</h3>
                       {showMenuId && <i className="fa-solid fa-3x fa-times" onClick={()=>setShowMenuId("")}/>}
                    </div>
                    <div className="menu_col">
                      {flyoutMenu.menu.map((el) => (
                        <div key={el._id} className="menu_col-content">
                          <h3>{el.categoryTitle}</h3>

                          {el.categoryItems.map((items, i) => (
                            <p key={i} >{items}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="image-slide">
            <EshopCarousel />
          </div>
        </div>

        <div className="landing_page-2">
          {getlandingPage().map((page) => (
            <div key={page._id} className="card">
              <div className="card_img">
                <img src={page.image} alt="" />
              </div>
              <p>{page.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default LandingPageLayout;