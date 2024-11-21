import { createContext, useState, useContext } from "react";

const AppContext = createContext();

const intialState = {
  isAuth: false,
  userDetails: null,
};
export const AppProvider = ({ children }) => {
  const [authState, setAuthState] = useState(intialState);
  console.log(authState);
  const loginUser = (userDetails) => {
    setAuthState({
      isAuth: true,
      userDetails,
    });
  };

  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      userDetails: null,
    });
  };
  // const providerState = {
  //   authState,
  //   loginUser,
  //   logoutUser,
  // };

  return (
    <AppContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
