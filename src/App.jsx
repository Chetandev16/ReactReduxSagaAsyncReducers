import "./styles.css";
import React from "react";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
