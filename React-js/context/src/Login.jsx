import React, { useContext, useState } from "react";
import AppContext from "./Context";

const Login = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          data-testid="password-input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          autoComplete="on"
        />
        <button type="submit" data-testid="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
