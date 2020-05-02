import { Dispatch } from "redux";
import history from "../../../history";
import {
  SET_ACTIVE_NAV_ITEM,
  SET_ACTIVE_NAV_ITEM_FROM_STORAGE,
} from "../../types";

export const setActiveNavItem = (navItem: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_ACTIVE_NAV_ITEM, payload: navItem });
    localStorage.setItem("ui.header.active", navItem);
  };
};

export const setActiveNavItemFromStorage = () => {
  return async (dispatch: Dispatch) => {
    const navItem = localStorage.getItem("ui.header.active");
    if (navItem) {
      dispatch({ type: SET_ACTIVE_NAV_ITEM_FROM_STORAGE, payload: navItem });
    } else {
      // Nothing in Local Storage? Send em back to the homepage
      dispatch({ type: SET_ACTIVE_NAV_ITEM, payload: "home" });
      history.push("/");
    }
  };
};
