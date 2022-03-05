import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandlerEmail = e => {
    this.setState({ email: e.target.value });
  };
  changeHandlerPassword = e => {
    this.setState({ password: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    console.log(this.state);
    await this.props.login(this.state, this.props.history);
  };

  render() {

    return (
      <div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            onChange={this.changeHandlerEmail}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={this.changeHandlerPassword}
          />
        </div>

        <button
          style={{ padding: 9 }}
          className="btn btn-success col-12"
          onClick={this.submitHandler}
        >
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error:state.errors.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
