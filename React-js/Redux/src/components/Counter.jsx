import React from "react";
import CounterValue from "./CounterValue";
import Theme from "./Theme";
import CounterButtons from "../components/CounterButtons";
import { useSelector } from "react-redux";
import "./Counter.css";
const Counter = () => {
  const theme = useSelector((state) => {
    return state.themeReducer.theme;
  });
  const themeClass = theme === "light" ? "light_theme" : "dark_theme";

  return (
    <>
      <div>
        <Theme />
      </div>
      <div className={themeClass}>
        <CounterValue />
        <CounterButtons />
      </div>
    </>
  );
};

export default Counter;
