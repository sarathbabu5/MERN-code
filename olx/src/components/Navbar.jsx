import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AuthContext";

const Navbar = () => {
  const { authState, logoutUser } = useContext(AppContext);
  console.log(authState);
  const navigate = useNavigate();

  return (
    <nav>
      <div className="name" onClick={() => navigate("/")}>
        React-OLX
      </div>
      <div>
        {authState.isAuth ? (
          <>
            <span>Welcome, {authState.userDetails.email}!</span>
            <button className="logout" onClick={logoutUser}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
