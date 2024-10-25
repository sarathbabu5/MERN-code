import React from "react";
import { NavLink } from "react-router-dom";

import { useGlobalContext } from "../context/AuthContextProvider";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
  {
    path: "/products",
    text: "Products",
  },
  // {
  //   path: "/login",
  //   text: "Login",
  // },
];

const Navbar = () => {
  const { authState, login, logout } = useGlobalContext();
  // console.log(styles);
  const auth = authState.isAuth;
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {links.map((link) => {
        return (
          <NavLink to={link.path} key={link.path}>
            {link.text}
          </NavLink>
        );
      })}
      {auth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button>
          <NavLink to="/login">Login</NavLink>
        </button>
      )}
    </div>
  );
};

export default Navbar;
