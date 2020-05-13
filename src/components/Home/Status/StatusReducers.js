import createReducer from "../../../store/createReducer";
import { STATUS_SUCESSFUL, STATUS_ERROR } from "./StatusConstants";

const initState = {
  statusError: false,
  statusErrorMessage: ""
};

export const createStatusSucess = (state = initState) => {
  return state;
};

export const createStatusError = (state = initState, { err }) => {
  return {
    ...state,
    statusError: true,
    statusErrorMessage: err
  };
};

export default createReducer(initState, {
  [STATUS_SUCESSFUL]: createStatusSucess,
  [STATUS_ERROR]: createStatusError
});
