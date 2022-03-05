import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class ArticleDetail extends Component {
  state = {
    user: "",
    article: ""
  };
  changeHandlerMessage = e => {
    this.setState({ content: e.target.value });
  };
  handleClearForm = e => {
    this.setState({ content: "" });
  };
  submitHandler = async e => {
    e.preventDefault();
    await this.props.addToFavorite(this.state,this.props.history);
  };
  async componentDidMount() {
    const article = this.props.match.params.article;
    const user = this.props.user;
    this.setState({ user: user.user_id, article: article});
    await this.props.getArticle(article);
  }
  render() {
    const article = this.props.article;
    return this.props.article ? (
      <div className="container">
         <img className="card-img-top" src={article.urlToImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.content}</p>
        <p className="card-text">{article.description}</p>
        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={this.submitHandler} > Add To My Favorite </button>
      </div>
      </div>
    ) : (
      <div>this article does not exist</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    article: state.articlesReducer.article,
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getArticle: id => dispatch(actionCreators.getArticle(id)),
    addToFavorite: (article,history) => dispatch(actionCreators.addToFavorite(article,history)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
