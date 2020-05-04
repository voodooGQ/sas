import { AnyAction } from "redux";
import { FETCH_BLOG_ARTICLE, SET_BLOG_ARTICLE_DATA } from "../../types";

export const blog = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_BLOG_ARTICLE_DATA:
      return { ...state, ...action.payload };
    case FETCH_BLOG_ARTICLE:
      return { ...state, currentArticleMarkdown: action.payload };
    default:
      return state;
  }
};
