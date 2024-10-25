import { createContext, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });

  const login = async (email, password) => {
    setAuthState({ ...authState, loading: true });
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      // console.log(response);
      setAuthState({
        isAuth: true,
        loading: false,
        error: null,
        token: response.data.token,
      });
      toast("Login");
    } catch (error) {
      setAuthState({
        ...authState,
        loading: false,
        error: error.message,
      });
    }
  };

  const logout = () => {
    setAuthState({
      isAuth: false,
      loading: false,
      error: null,
      token: "",
    });
    toast("Logout");
  };

  return (
    <AppContext.Provider value={{ authState, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
