import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from 'react-router-dom';

class ArticleList extends Component {
  state = {
    user: "",
    article: ""
  };
  async componentDidMount() {
    await this.setState({ article: this.props.article.id, user: this.props.user.user_id });
  }
  changeHandlerReplay = e => {
    this.setState({ replay_content: e.target.value });
  };
  submitHandler = async e => {
    e.preventDefault();
    
  };

  render() {
    const article = this.props.article;
    const user = this.props.user
    
    return (
      <>
        {
          <Link to={`/news/${article.id}`}>
          
          <div className="card ">
         
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.author}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{article.publishedAt}</small>
          </div>
        </div>
          </Link>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {

    deleteMyFavorite: id => dispatch(actionCreators.deleteMyFavorite(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
