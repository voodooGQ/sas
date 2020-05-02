import { AnyAction } from "redux";
import {
  SET_ACTIVE_NAV_ITEM,
  SET_ACTIVE_NAV_ITEM_FROM_STORAGE,
} from "../../types";

export const header = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_ACTIVE_NAV_ITEM:
      return { ...state, active: action.payload };
    case SET_ACTIVE_NAV_ITEM_FROM_STORAGE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
