import createReducer from "../../../store/createReducer";
import { FETCH_POSTS_SUCESS, FETCH_POSTS_ERROR } from "./PostsConstants";

const initState = {
  posts: [],
  error: false,
  errorMessage: ""
};

export const fetchPostsSucess = (state = initState, { posts }) => {
  return {
    ...state,
    posts
  };
};

export const fetchPostsError = (state = initState, { err }) => {
  return {
    ...state,
    error: true,
    errorMessage: err
  };
};

export default createReducer(initState, {
  [FETCH_POSTS_SUCESS]: fetchPostsSucess,
  [FETCH_POSTS_ERROR]: fetchPostsError
});
