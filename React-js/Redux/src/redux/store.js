import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducerFunction as counterReducer } from "./counter/reducer";
import { themeReducer } from "./theme/reducer";
const rootReducer = combineReducers({ counterReducer, themeReducer });
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
