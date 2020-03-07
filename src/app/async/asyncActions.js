import { START, END, ERROR } from "./asyncConstants";

export const asyncActionStart = () => {
  return {
    type: START
  };
};

export const asyncActionEnd = () => {
  return {
    type: END
  };
};

export const asyncActionError = err => {
  return {
    type: ERROR,
    payload: {
      errorMessage: err.message
    }
  };
};
