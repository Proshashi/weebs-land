import { START, END, ERROR } from "./asyncConstants";
import createReducer from "../../store/createReducer";

const initState = {
  loading: false,
  error: false,
  errorMessage: null
};

const asyncActionStart = (state = initState) => {
  return {
    ...state,
    loading: true
  };
};

const asyncActionEnd = (state = initState) => {
  return {
    ...state,
    loading: false
  };
};

const asyncActionError = (state = initState, { errorMessage }) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage
  };
};

export default createReducer(initState, {
  [START]: asyncActionStart,
  [END]: asyncActionEnd,
  [ERROR]: asyncActionError
});
