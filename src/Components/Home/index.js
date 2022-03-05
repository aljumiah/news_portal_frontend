import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import userImage from "../../assets/images/user.jpg";
import FavoriteList from "./FavoriteList";
import * as actionCreators from "../../store/actions";

class Home extends Component {
  async componentDidMount() {
    await this.props.fetchFavoriteArticles();
  }

  render() {
    const favorites = this.props.favoriteArticles.map(
      article =>
      article.id && (
          <FavoriteList article={article} user={this.props.user}  key={article.id} />
        )
    );
    return this.props.user && this.props.profile? (
      <div className="container">
        <div className="col-sm-12 ">
          <div className="col-sm-12 d-flex justify-content-center">
            <img
              alt="profile-image"
              className="rounded-circle rounded-circle_border border"
              src={userImage}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                textAlign: "center",
                margin: 5,
                display: "block",
                marginLeft: 5,
                padding: 2
              }}
            />
          </div>
          <div
            className="col-sm-12 d-flex justify-content-center"
            style={{ fontWeight: 700 }}
          >
            {this.props.user.username}
          </div>
          <div className="col-sm-12">
            <ul className="list-group">
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>Email: {this.props.profile.email}</span>
              </li>
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>National ID: {this.props.profile.national_id}</span>
              </li>
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>Name: {this.props.profile.first_name} {this.props.profile.last_name}</span>
              </li>
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>Phone Number: {this.props.profile.phone_number}</span>
              </li>
              <li
                style={{ background: "#f1f7ff" }}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>Birth of Date: {this.props.profile.birth_date}</span>
              </li>
            </ul>
          </div>
        </div>
          Favorite List:
        <div className="card" style={{ width: "100%", border: "none" }}>
          <ul className="list-group list-group-flush">
            
            {favorites}
          </ul>
        </div>
      </div>

    ) : (
      <div> Not Authorized</div>
      // <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    profile: state.profileReducer.profile,
    favoriteArticles: state.articlesReducer.favoriteArticles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(actionCreators.getProfile()),
    fetchFavoriteArticles: () => dispatch(actionCreators.fetchFavoriteArticles())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
