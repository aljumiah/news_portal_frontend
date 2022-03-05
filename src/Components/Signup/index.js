import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { withRouter, Redirect } from "react-router-dom";

class Signup extends Component {
  render() {
    return !this.props.user ? (
      <div className="container">
        <SignupForm />
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
  )(Signup)
);
