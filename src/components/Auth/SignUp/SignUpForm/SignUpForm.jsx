import React, { useState } from "react";
import { connect } from "react-redux";
import validator from "validator";
import { signUp } from "../../AuthActions";

const SignUpForm = props => {
  const { loading, auth, firebase } = props;
  const { isEmail, isEmpty } = validator;
  const { authError, errorMessage } = auth;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const isEmail = validator.isEmail(email);
    const isPassword = validator.isEmpty(password);
    const isName = validator.isEmpty(name.trim());
    try {
      if (isName) {
        throw new Error("Please provide valid name");
      }
      if (!isEmail) {
        throw new Error("Please enter a valid email");
      }
      if (isPassword) {
        throw new Error("Password cannot be empty");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords doesnot match");
      }
      props.signUp(name, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="__otaku_auth-signup--form">
      <div className="__otaku_auth-signup--form__title">
        Join the weeb community
      </div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Weeb name"
          onChange={e => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        {authError || error ? (
          <div className="__otaku_auth-login--form__error">
            {errorMessage || error}
          </div>
        ) : null}

        <button type="submit">
          <span>Sign Up</span>
          <i className={loading ? "fas fa-fan fa-spin" : "fas fa-asd"}></i>
        </button>
      </form>
    </div>
  );
};

const mapState = state => ({
  firebase: state.firebase,
  loading: state.async.loading,
  auth: state.auth
});

const mapDispatch = { signUp };

export default connect(mapState, mapDispatch)(SignUpForm);
