import {
  asyncActionStart,
  asyncActionEnd,
  asyncActionError
} from "../../app/async/asyncActions";
import {
  LOGIN_ERROR,
  LOGIN_SUCESS,
  LOGOUT_SUCESS,
  LOGOUT_ERROR,
  SIGNUP_SUCESS,
  SIGNUP_ERROR
} from "./AuthConstants";
import history from "../../app/utils/history";

export const LogInWithEmailPassword = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(asyncActionStart());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_SUCESS
        });
        history.push("/");
      })
      .catch(err => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            err: err.message
          }
        });
      });
  };
};

export const LoginWithFacebook = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.FacebookAuthProvider();
    dispatch(asyncActionStart());
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_SUCESS
        });
        history.push("/");
      })
      .catch(err => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            err: err.message
          }
        });
      });
  };
};

export const LoginWithGoogle = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_SUCESS
        });
        history.push("/");
      })
      .catch(err => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            err: err.message
          }
        });
      });
  };
};

export const LogOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(res => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_SUCESS
        });
        history.push("/login");
      })
      .catch(err => {
        dispatch(asyncActionEnd());
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            err: err.message
          }
        });
      });
  };
};

export const signUp = (name, email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { users } = require("../../app/db/db");
    dispatch(asyncActionStart());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        users
          .doc(uid)
          .set({
            id: uid,
            name,
            email,
            posts: [],
            comments: [],
            reacts: []
          })
          .then(() => {
            dispatch({
              type: SIGNUP_SUCESS
            });
            dispatch(asyncActionEnd());
            history.push("/");
          })
          .catch(err => {
            dispatch({
              type: SIGNUP_ERROR,
              payload: { err: err.message }
            });
            dispatch(asyncActionEnd());
          });
      })
      .catch(err => {
        dispatch({
          type: SIGNUP_ERROR,
          payload: { err: err.message }
        });
        dispatch(asyncActionEnd());
      });
  };
};
