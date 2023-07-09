import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
