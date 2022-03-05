import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import NavBar from "./Components/NavBar";
import { connect } from "react-redux";
import ArticleDetail from "./Components/Articles/ArticleDetail";

// Actions
import * as actionCreators from "./store/actions";

//CSS
import "./assets/css/GridSystem.css";

class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
    if (this.props.user) {
      await this.props.fetchArticles();
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/news" component={Articles} />
          <Route exact path="/news/:article" component={ArticleDetail} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchArticles: () => dispatch(actionCreators.fetchArticles())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
