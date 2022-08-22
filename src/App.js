import React from "react";
import './style/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import pages
import Product from "./components/products";
import ProductPage from "./components/productPage";
import Form from "./components/form";
import NotFound from "./components/notFound";
// import Home from "./components/home";
// import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { CartProvider } from "./context";
//
// import * as bsIcons from "react-icons/bs";
// import * as faIcons from "react-icons/fa";
// import * as aiIcons from "react-icons/ai";
// import * as mdIcons from "react-icons/md";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        {/* <Home /> */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" />
          <Route path="products" element={<Product />} />
          <Route path="productPage" element={<ProductPage />} />
          <Route path="form" element={<Form />} />
        </Routes>
        {/* <Footer /> */}
      </CartProvider>
    </BrowserRouter>
  );
}
//
export default App;
