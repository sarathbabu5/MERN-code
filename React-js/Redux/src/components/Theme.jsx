import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../redux/theme/action";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.themeReducer.theme;
  });
  //   console.log(theme);
  const addLight = () => {
    dispatch(handleTheme("light"));
  };
  const addDark = () => {
    dispatch(handleTheme("dark"));
  };
  return (
    <div>
      <button onClick={addLight} disabled={theme === "light"}>
        Switch to Light
      </button>
      <button onClick={addDark} disabled={theme === "dark"}>
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
