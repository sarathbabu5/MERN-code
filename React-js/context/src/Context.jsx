import { createContext, useState } from "react";
import axios from "axios";

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

      //   const data = await response.json();
      console.log(response);
      setAuthState({
        isAuth: true,
        loading: false,
        error: null,
        token: response.data.token,
      });

      // if (response.ok) {
      //     setAuthState({
      //         isAuth: true,
      //         loading: false,
      //         error: null,
      //         token: data.token,
      //     });
      // } else {
      //     setAuthState({
      //         ...authState,
      //         loading: false,
      //         error: data.error,
      //     });
      // }
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
  };

  return (
    <AppContext.Provider value={{ authState, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
