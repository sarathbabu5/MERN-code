import React from "react";
import { Route, Routes } from "react-router";

import Newsletter from "./components/Newsletter";
import Home from "./components/Home";
import About from "./components/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  );
};

export default AllRoutes;
