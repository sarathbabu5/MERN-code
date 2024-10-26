import React from "react";
import { NavLink } from "react-router-dom";

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
    path: "/newsletter",
    text: "Newsletter",
  },
];

const Navbar = () => {
  return (
    <div>
      {links.map((link) => {
        return (
          <NavLink to={link.path} key={link.path}>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
