import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import asyncReducers from "../app/async/asyncReducers";
import AuthReducers from "../components/Auth/AuthReducers";

export default combineReducers({
  async: asyncReducers,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: AuthReducers
});
