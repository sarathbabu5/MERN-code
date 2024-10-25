import React from "react";
import { Route, Routes } from "react-router";

import Home from "../components/Home ";

import About from "../components/About";
import Login from "../components/Login";
import Products from "../components/Products";
import Contact from "../components/Contact";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
