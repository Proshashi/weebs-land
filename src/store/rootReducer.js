import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import asyncReducers from "../app/async/asyncReducers";
import AuthReducers from "../components/Auth/AuthReducers";
import StatusReducers from "../components/Home/Status/StatusReducers";
import PostsReducers from "../components/Home/Posts/PostsReducers";

export default combineReducers({
  async: asyncReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: AuthReducers,
  status: StatusReducers,
  posts: PostsReducers
});
