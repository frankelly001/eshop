import React, { useContext, useEffect, useState } from "react";
import "../styles/sidebar/sidebar.css";
import UserContext from "./userContext";
import CartContainer from "./layout/CartContainer";
import SlideContainer from "./SlideContainer";
import { useLocation } from "react-router-dom";
import ModalOverlay from "./layout/ModalOverlay";

const SideBar = () => {
  const { sidebar, cartSwitch, products, curScreenWidth } =
    useContext(UserContext);

  const likedProducts = products.filter((el) => el.like === true);

  // if (sidebar === true) document.body.style.overflow = 'hidden';
  // else document.body.style.overflow = 'unset';

  // document.body.style.overflow = sidebar ? 'hidden' : 'unset';

  const { pathname } = useLocation();
  const [actionBtn, setActionBtn] = useState(true);

  useEffect(() => {
    if (pathname === "/checkout/payment") setActionBtn(false);
    else setActionBtn(true);
  }, [pathname]);

  // const sideBarwidth = window.outerWidth > 999 ? "50%" : "90%";

  let sideBarwidth = () => {
    let width;
    if (curScreenWidth >= 1200) {
      width = "55%";
    } else if (curScreenWidth >= 1000) {
      width = "65%";
    } else if (curScreenWidth >= 800) {
      width = "75%";
    } else if (curScreenWidth >= 600) {
      width = "85%";
    } else {
      width = "95%";
    }

    return width;
  };

  return (
    <div style={{ width: sidebar && sideBarwidth() }} className="sidebar">
      <ModalOverlay
        onHandleDisplay={cartSwitch}
        onDisplay={sidebar}
        switchCrtl
      />
      <div className="sidebar_container">
        <div className="sidebar_container-closebtn">
          <button onClick={() => cartSwitch()}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <CartContainer actionBtn={actionBtn} />
        {likedProducts.length > 0 && (
          <div className="saved">
            <h3 className="saved_header">
              Saved item
              {likedProducts.length > 1 && `s (${likedProducts.length})`}
            </h3>
            {actionBtn && (
              <SlideContainer
                products={likedProducts}
                check={sidebar}
                turnOffSideBar
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;

// function slide(direction) {
//   var container = document.getElementById("container");
//   // var scrollCompleted = 0;
//     if (direction == "left") {
//       container.scrollLeft -= 10;
//     } else {
//       container.scrollLeft += 10;
//     }
//     console.log(direction)
//     // scrollCompleted += 10;
//     // if (scrollCompleted >= 100) {
//     //   window.clearInterval(slideVar);
//     // }
// }
