import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { withRouter, Redirect } from "react-router-dom";

class Login extends Component {
  render() {
    return !this.props.user ? (
      <div className="container">
        <LoginForm />
      </div>
    ) : (
      <Redirect to="/home" />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
