import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "./components/footer";
import Home from "./pages/home";

import Category from "./pages/category";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./components/hooks/useApi";
import { setCategories } from "./redux/categorySlice";
import { setTokenValue } from "./redux/cartSlice";

function App() {
  const authState = useSelector((state) => state.authState);
  const cartState = useSelector((state) => state.cartState);
  const api = useApi();
  const dispatch = useDispatch();
  const categoriyState = useSelector((state) => state.categoriyState);
  //console.log(">>>APP CATEGORY STATE", categoriyState);

  if (!cartState.tokenValue) {
    const postData = {
      localeCode: "en_US",
    };

    api
      .post("shop/orders", postData)
      .then((response) => {
        console.log(">>shop/order response", response);
        dispatch(
          setTokenValue({
            tokenValue: response.data.tokenValue,
          })
        );
      })
      .catch((err) => {
        console.log(">> shop/order err", err);
      });
  }

  // if (authState.token && authState.customerId && !authState.customerDetails) {
  //   api
  //     .get("shop/customers/" + authState.customerId)
  //     .then((response) => {
  //       console.log(">>APP CUSTOMER DETAIL", response);
  //     })
  //     .catch((err) => {
  //       console.log(">> CUSTOMER DETAIL ERR", err);
  //     });
  // }

  if (categoriyState.categories === null) {
    api
      .get("shop/taxons")
      .then((response) => {
        console.log(">>>APP CATEGORY RESPONSE", response);
        dispatch(
          setCategories({
            categories: response.data,
          })
        );
      })
      .catch((err) => {
        console.log(">>>APP CATEGORY ERR", err);
      });
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="category/:taxon_code" element={<Category />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
