import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
