import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import LoginImage from "./LoginImage/LoginImage";
import AuthHeader from "../Header/AuthHeader";
import { Redirect } from "react-router-dom";

const LogIn = props => {
  return (
    <div className="__otaku_auth">
      <AuthHeader />
      <div className="__otaku_auth-login">
        <LoginForm />
        <LoginImage />
      </div>
    </div>
  );
};

export default LogIn;
