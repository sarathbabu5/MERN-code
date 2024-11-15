import { SWITCH_THEME } from "../actionType";

// themeReducer.js
const initialState = {
  theme: "light",
};

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SWITCH_THEME:
      return { ...state, theme: payload };
    default:
      return state;
  }
};
