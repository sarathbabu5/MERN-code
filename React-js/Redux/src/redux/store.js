import { combineReducers, legacy_createStore } from "redux";
import { reducerFunction as counterReducer } from "./counter/reducer";
import { themeReducer } from "./theme/reducer";
const rootReducer = combineReducers({ counterReducer, themeReducer });
export const store = legacy_createStore(rootReducer);
