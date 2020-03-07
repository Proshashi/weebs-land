import React, { useState } from "react";
import { connect } from "react-redux";
import validator from "validator";

import {
  LogInWithEmailPassword,
  LoginWithFacebook,
  LoginWithGoogle,
  LogOut
} from "../../AuthActions";
import { Link } from "react-router-dom";

const LoginForm = props => {
  const { loading, auth, firebase } = props;
  const { isEmail, isEmpty } = validator;
  const { authError, errorMessage } = auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const isEmail = validator.isEmail(email);
    const isPassword = validator.isEmpty(password);

    try {
      if (!isEmail) {
        throw new Error("Please enter a valid email");
      }
      if (isPassword) {
        throw new Error("Please enter password");
      }
      props.LogInWithEmailPassword(email.trim(), password.trim());
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="__otaku_auth-login-section">
      <div className="__otaku_auth-login--form">
        <div className="__otaku_auth-login--title">
          Welcome to weeb community
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Username"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />

          {authError || error ? (
            <div className="__otaku_auth-login--form__error">
              {errorMessage || error}
            </div>
          ) : null}

          <button type="submit">
            <span>Sign In</span>
            <i className={loading ? "fas fa-fan fa-spin" : "fas fa-asd"}></i>
          </button>
        </form>
        <div className="__otaku_auth-login--form__forgot">Forgot password?</div>
        <div className="__otaku_auth-login--form__or">OR</div>
        {/* <div className="__otaku_auth-login--form__buttonGroup">
        <button
          className="__otaku_auth-login--form__buttonGroup-buttonFacebook"
          onClick={props.LoginWithFacebook}
        >
          Facebook
        </button>
        <button
          className="__otaku_auth-login--form__buttonGroup-buttonGoogle"
          onClick={props.LoginWithGoogle}
        >
          Google
        </button>
      </div> */}
        <Link to="/signup" className="__otaku_auth-login--form__signUp">
          Don't have an account?
        </Link>
      </div>
    </div>
  );
};

const mapState = state => ({
  firebase: state.firebase,
  loading: state.async.loading,
  auth: state.auth
});

const mapDispatch = {
  LogInWithEmailPassword,
  LoginWithFacebook,
  LoginWithGoogle,
  LogOut
};

export default connect(mapState, mapDispatch)(LoginForm);
