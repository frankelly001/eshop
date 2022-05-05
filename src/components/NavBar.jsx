import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/navbar/navbar.css'
import Nav from "./layout/Nav";
import SubNav from "./layout/SubNav";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <section className="eshop_header">
      <Nav />
      {pathname !== "/login" &&
        pathname !== "/signup" &&
        pathname !== "/checkout" &&
        pathname !== "/checkout/information" &&
        pathname !== "/checkout/payment" && <SubNav />}
    </section>
  );
};

export default NavBar;
