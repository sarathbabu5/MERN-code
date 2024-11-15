import { SWITCH_THEME } from "../actionType";

export const handleTheme = (payload) => ({
  type: SWITCH_THEME,
  payload,
});
