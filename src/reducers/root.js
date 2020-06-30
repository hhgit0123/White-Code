import { combineReducers } from "redux";
import newsReducer from "./newsReducer.js";
import authReducer from "./authReducer.js";
export default combineReducers({
  auth: authReducer,
  news: newsReducer,
});
