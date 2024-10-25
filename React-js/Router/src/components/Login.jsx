// src/components/Login.jsx

import React, { useState } from "react";
import { useGlobalContext } from "../context/AuthContextProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { login, authState, logout } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = authState.isAuth;
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          // data-testid="email-input"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          // data-testid="password-input"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
