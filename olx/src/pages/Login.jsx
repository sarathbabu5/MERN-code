import React, { useContext, useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AuthContext";
import Loading from "../components/Loading";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(AppContext);
  const navigate = useNavigate();
  //   const loginUser = providerState.loginUser;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        form
      );
      setLoading(false);
      if (loginUser) {
        loginUser({ email: form.email, token: res.data.token });
      }
      console.log(loginUser);

      navigate("/");
      //   if (res.data.token) {
      //     loginUser({ email: form.email, token: res.data.token });
      //     navigate("/");
      //   } else {
      //     alert(res.data.error || "Login failed!");
      //   }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  if (loading) return <Loading />;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        autoComplete="on"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
      <div data-cy="go-to-home-page">
        <Link to="/">Home Page</Link>
      </div>
    </form>
  );
};

export default Login;
