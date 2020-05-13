import { FETCH_POSTS_SUCESS, FETCH_POSTS_ERROR } from "./PostsConstants";
import {
  asyncActionStart,
  asyncActionEnd
} from "../../../app/async/asyncActions";

export const fetchPosts = () => {
  return async dispatch => {
    const { posts } = require("../../../app/db/db");
    dispatch(asyncActionStart());
    try {
      let ps = [];
      const Posts = await posts.orderBy("postedAt").get();
      Posts.forEach(post => {
        ps.push(post.data());
      });
      dispatch({
        type: FETCH_POSTS_SUCESS,
        payload: { posts: ps }
      });
      dispatch(asyncActionEnd());
    } catch (err) {
      dispatch({
        type: FETCH_POSTS_ERROR,
        payload: {
          err: err.message
        }
      });
      dispatch(asyncActionEnd());
    }
  };
};
