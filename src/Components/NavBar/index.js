import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";

class Messages extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {!this.props.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#" to={`/signup`}>
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#" to={`/login`}>
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <div className="nav-link" href="#">
                      {this.props.user.username} <span className="sr-only" />
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#" to={`/home`}>
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#" to={`/news`}>
                      News
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => this.props.logout(this.props.history)}
                      className="nav-link"
                    >
                      Logout
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    profile: state.profileReducer.profile,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: history => dispatch(actionCreators.logout(history))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Messages)
);
