import { SET_ACTIVE_NAV_ITEM } from "../../types";
import { AnyAction } from "redux";

export const header = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_ACTIVE_NAV_ITEM:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
