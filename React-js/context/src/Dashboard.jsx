import React, { useContext } from "react";
import AppContext from "./Context";

const Dashboard = () => {
  const { authState, logout } = useContext(AppContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your token: {authState.token}</p>
      <button onClick={logout} data-testid="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
