import React, { useContext } from "react";

import Dashboard from "./Dashboard";
import Login from "./login";
import AppContext from "./Context";

const App = () => {
  const { authState } = useContext(AppContext);
  return <div>{authState.isAuth ? <Dashboard /> : <Login />}</div>;
};

export default App;
