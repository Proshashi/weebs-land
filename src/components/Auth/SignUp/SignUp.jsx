import React from "react";
import SignUpImage from "./SignUpImage/SignUpImage";
import SignUpForm from "./SignUpForm/SignUpForm";
import AuthHeader from "../Header/AuthHeader";

const SignUp = () => {
  return (
    <div className="__otaku_auth">
      <AuthHeader />
      <div className="__otaku_auth-signup">
        <SignUpImage />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
