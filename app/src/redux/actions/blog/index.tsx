import { Dispatch } from "redux";
import blogData from "../../../components/blog/blog.json";
import { SET_BLOG_ARTICLE_DATA } from "../../types";

export const setBlogArticleData = () => {
  return async (dispatch: Dispatch, getState: any) => {
    dispatch({ type: SET_BLOG_ARTICLE_DATA, payload: blogData });
  };
};
