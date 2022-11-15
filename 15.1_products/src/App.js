import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [storeData, setStoreData] = useState(null);
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Home />} />
          <Route path="./Products" element={<Products />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
