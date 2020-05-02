import { combineReducers } from "redux";
import { blog } from "./blog";
import { header } from "./ui";

export default combineReducers({
  blog,
  header,
});
