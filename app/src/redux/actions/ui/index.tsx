import { Dispatch } from "redux";

import { SET_ACTIVE_NAV_ITEM } from "../../types";

export const setActiveNavItem = (navItem: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_ACTIVE_NAV_ITEM, payload: navItem });
  };
};
