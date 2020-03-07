import {
  LOGIN_SUCESS,
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGOUT_SUCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCESS
} from "./AuthConstants";
import createReducer from "../../store/createReducer";

const initState = {
  authError: false,
  errorMessage: ""
};

const logInSucess = (state = initState) => ({ state });

const logInError = (state = initState, { err }) => {
  return {
    ...state,
    authError: true,
    errorMessage: err
  };
};

const logOutSucess = (state = initState) => ({ state });

const logOutError = (state = initState, { err }) => ({
  ...state,
  authError: true,
  errorMessage: err
});

const signUpSucess = (state = initState) => ({ state });

const signUpError = (state = initState, { err }) => ({
  ...state,
  authError: true,
  errorMessage: err
});

export default createReducer(initState, {
  [LOGIN_SUCESS]: logInSucess,
  [LOGIN_ERROR]: logInError,
  [LOGOUT_SUCESS]: logOutSucess,
  [LOGOUT_ERROR]: logOutError,
  [SIGNUP_ERROR]: signUpError,
  [SIGNUP_SUCESS]: signUpSucess
});
