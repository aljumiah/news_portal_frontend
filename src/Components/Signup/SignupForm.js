import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class SignupForm extends Component {
  state = {
    username:"",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    national_id: "",
    birth_date: ""
  };

  changeHandlerUsername = e => {
    this.setState({ username: e.target.value });
  };
  changeHandlerPassword = e => {
    this.setState({ password: e.target.value });
  };
  changeHandlerFirst = e => {
    this.setState({ first_name: e.target.value });
  };
  changeHandlerLast = e => {
    this.setState({ last_name: e.target.value });
  };
  changeHandlerEmail = e => {
    this.setState({ email: e.target.value });
  };
  changeHandlerPhone = e => {
    this.setState({ phone_number: e.target.value });
  };
  changeHandlerNationalId = e => {
    this.setState({ national_id: e.target.value });
  };
  changeHandlerBirthDate = e => {
    this.setState({ birth_date: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    var payload = {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      national_id: this.state.national_id,
      birth_date: this.state.birth_date
    };
    await this.props.signup(payload, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label>Username</label>
          <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="aljumiah"
            onChange={this.changeHandlerUsername}
          />
          </div>
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            aria-describedby="FirstNameHelp"
            placeholder="Mohammed"
            onChange={this.changeHandlerFirst}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="lastNameHelp"
            placeholder="Aljumiah"
            onChange={this.changeHandlerLast}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
            onChange={this.changeHandlerEmail}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            aria-describedby="phoneNumberHelp"
            placeholder="example@example.com"
            onChange={this.changeHandlerPhone}
          />
        </div>
        <div className="form-group">
          <label>National Id</label>
          <input
            type="text"
            className="form-control"
            id="nationalId"
            aria-describedby="nationalIdHelp"
            placeholder="1111111111"
            onChange={this.changeHandlerNationalId}
          />
        </div>
        <div className="form-group">
          <label>Birth of Date</label>
          <input
            type="date"
            className="form-control"
            id="birthDate"
            aria-describedby="birthDateHelp"
            placeholder="1992-01-02"
            onChange={this.changeHandlerBirthDate}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password@123"
            onChange={this.changeHandlerPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
