import React, { useEffect, useReducer, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Search from "./components/Search";
import { getCategories, getProducts } from "./services/products";
import SignupForm from "./components/SignupForm";
import UserContext from "./components/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reducerFunction from "./components/useReducer";
import { shuffle } from "./utilities/randomArr";
import Footer from "./components/layout/Footer";
import CheckoutInfo from "./components/CheckoutInfo";
import CheckoutPay from "./components/CheckoutPay";
import RenderLoader from "../src/components/layout/RenderLoader";
import PrivacyPolicy from "./components/PrivacyPolicy";

const initialState = {
  cartsCount: [],
};

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [allAddToCart, setAllAddToCart] = useState([]);
  const [allCounters, dispatch] = useReducer(reducerFunction, initialState);
  const [ordered, setOrdered] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [selected, setSelected] = useState("");
  const [flyoutMenu, setFlyoutMenu] = useState(false);
  const [userDelivery, setUserDelivey] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone1: "",
    phone2: "",
    city: "",
    number: "",
    street: "",
    zipcode: "",
  });
  const [curScreenWidth, setCurScreewidth] = useState();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sidebar) document.querySelector(".sidebar_container").scrollTo(0, 0);
  }, [pathname, sidebar]);

  const checkWidth = () => {
    setCurScreewidth(window.outerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return function cleanUp() {
      window.removeEventListener("resize", checkWidth);
    };
  }, [curScreenWidth]);

  const handleSelect = (selected) => {
    setSelected(selected);
  };

  const disableSelected = () => {
    setSelected("");
  };

  const cartSwitch = () => {
    setSidebar(!sidebar);
  };

  const allCategories = async () => {
    try {
      const { data } = await getCategories();
      const addCategory = ["Home", ...data];
      setCategories(addCategory);
    } catch (error) {
      // console.log(error);
    }
  };

  const allProducts = async () => {
    try {
      const { data } = await getProducts();
      const allData = shuffle(
        data.map((el) => ({ ...el, price: el.price * 430 }))
      );
      setProducts(allData);

      const allCartObj = data.map((pId) => {
        return { productId: pId.id, quantity: 0 };
      });
      dispatch({ type: "INITIALIZE", data: allCartObj });
      toast.success("welcome to eShop!");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      // toast.error(error.response?.data)
    }
  };
  // console.log(curScreenWidth)

  useEffect(() => {
    allCategories();
    allProducts();
    checkWidth();

    return function cleanUp() {};
  }, []);

  useEffect(() => {
    const added = allCounters.cartsCount.filter(
      (counters) => counters.quantity > 0
    );
    setAllAddToCart(added);
    return function cleanUp() {};
  }, [allCounters.cartsCount]);

  const handleQuery = ({ value }) => {
    setQuery(value);
  };

  const emptyQuery = () => {
    setQuery("");
  };

  useEffect(() => {
    const orderedID = allAddToCart.map((el) => el.productId);
    // am filtering to find if each element condition is true
    const orderdItems = products.filter((el) => {
      // this will return the element that is inside orderedID array
      // orderedID is an ARRAY, el.id is a string
      // itemsContainer.include(iten) which means
      // whereAmISearchingFrom.include(whatAmISearching)
      return orderedID.includes(el.id);
    });

    orderdItems.map((el) => {
      return allAddToCart.forEach((cart) => {
        if (el.id === cart.productId) {
          el.quantity = cart.quantity;
        }
        return el;
      });
    });

    setOrdered(orderdItems);
    return function cleanUp() {};
  }, [allAddToCart, products]);

  const handleLike = (product) => {
    const newState = [...products];
    const index = newState.indexOf(product);
    newState[index].like = !newState[index].like;
    setProducts(newState);
  };

  const orderedNum = allAddToCart
    .map((el) => el.quantity)
    .reduce((prev, cur) => prev + cur, 0);
  const subtotal =
    Math.round(
      ordered
        .map((el) => el.price * el.quantity)
        .reduce((prev, cur) => prev + cur, 0) * 10
    ) / 10;
  const delivery =
    allAddToCart.map((el) => el.quantity).reduce((prev, cur) => prev + cur, 0) *
    1000;
  const total = subtotal + delivery;

  return (
    <UserContext.Provider
      value={{
        products: products,
        categories: categories,
        query: query,
        onSearch: handleQuery,
        onEmptyQuery: emptyQuery,
        allCounters: allCounters,
        allAddToCart: allAddToCart,
        dispatch: dispatch,
        cartSwitch: cartSwitch,
        sidebar: sidebar,
        ordered: ordered,
        orderedNum: orderedNum,
        subtotal: subtotal,
        delivery: delivery,
        total: total,
        onLike: handleLike,
        onSelect: handleSelect,
        selected: selected,
        onDisableSelected: disableSelected,
        userDelivery,
        setUserDelivey,
        flyoutMenu,
        setFlyoutMenu,
        curScreenWidth,
      }}
    >
      <div className="eshop_app">
        <ToastContainer />
        <NavBar />
        <div className="eshop_app-content">
          <RenderLoader />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="products/:title" element={<ProductDetails />} />
            <Route path="allproducts/:search" element={<Search />} />
            <Route path="category/:category" element={<Category />} />
            <Route path="login" exact element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="checkout">
              <Route index element={<Navigate replace to="information" />} />
              <Route path="information" element={<CheckoutInfo />} />
              <Route path="payment" element={<CheckoutPay />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
