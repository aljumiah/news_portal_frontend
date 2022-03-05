import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleList from "./ArticleList";
import { Redirect } from "react-router-dom";
// Actions
import * as actionCreators from "../../store/actions";

class Articles extends Component {
  async componentDidMount() {
    await this.props.fetchArticles();
  }
  render() {
    const articles = this.props.articles.map(
      article =>
      article.id && (
          <ArticleList article={article} user={this.props.user}  key={article.id} />
        )
    );
    return this.props.user ? (
      
      <div className="container">
        <div className="col-12">
            <ul className="list-group list-group-flush">
            <div class="card-deck">
              {articles}
              </div>
            </ul>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    articles: state.articlesReducer.articles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => dispatch(actionCreators.fetchArticles())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
