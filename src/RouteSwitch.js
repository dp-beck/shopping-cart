import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;
