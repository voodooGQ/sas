import axios from "axios";
import { Dispatch } from "redux";
import blogData from "../../../views/blog/blog.json";
import { FETCH_BLOG_ARTICLE, SET_BLOG_ARTICLE_DATA } from "../../types";

export const setBlogArticleData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_BLOG_ARTICLE_DATA, payload: blogData });
  };
};

export const fetchBlogArticle = (article: any) => {
  return async (dispatch: Dispatch) => {
    const location =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      article.location;
    const response = await axios.get(location);
    dispatch({ type: FETCH_BLOG_ARTICLE, payload: response.data });
  };
};
