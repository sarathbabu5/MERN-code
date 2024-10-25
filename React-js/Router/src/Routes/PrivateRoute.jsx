import React from "react";
import { Navigate } from "react-router";
import { useGlobalContext } from "../context/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const { authState } = useGlobalContext();
  const auth = authState.isAuth;
  // console.log(authState.isAuth);
  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
