import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Switch,
  BrowserRouter,
  Route,
  Router,
  Redirect
} from "react-router-dom";
import "rodal/lib/rodal.css";

import { LogOut } from "./Auth/AuthActions";
import AuthLoading from "./Auth/Loading/AuthLoading";
import LogIn from "./Auth/LogIn/LogIn";
import SignUp from "./Auth/SignUp/SignUp";
import NavBar from "./NavBar/NavBar";
import history from "../app/utils/history";
import Home from "./Home/Home";

const no = () => {
  return <div>404</div>;
};

const App = props => {
  if (!props.auth.isLoaded) {
    return <AuthLoading />;
  }

  return (
    <BrowserRouter history={history}>
      <div className="App __otaku">
        {!props.auth.uid ? (
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={LogIn} />
          </Switch>
        ) : (
          <div className="__otaku_main">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={no} />
            </Switch>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

const mapDispatch = { LogOut };

const mapState = state => ({
  auth: state.firebase.auth,
  firebase: state.firebase
});

export default connect(mapState, mapDispatch)(App);
