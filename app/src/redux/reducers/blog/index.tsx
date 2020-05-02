import { AnyAction } from "redux";
import { SET_BLOG_ARTICLE_DATA } from "../../types";

export const blog = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_BLOG_ARTICLE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
