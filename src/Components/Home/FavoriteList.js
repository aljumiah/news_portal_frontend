import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from 'react-router-dom';

class FavoriteList extends Component {
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
    console.log("article: " + article.title)
    return (
      <>
        {
           <Link to={`/news/${article.article.id}`}>
          <li
            data-toggle="modal"
            data-target={`#exampleModalCenter${article.id}`}
            style={{
              marginTop: 10,
              border: "1px solid #00000020",
              borderRadius: 10
            }}
            className="list-group-item "
          >
            <div className="card ">
         
         <div className="card-body">
           <h5 className="card-title">{article.article.title}</h5>
           <p className="card-text">{article.article.author}</p>
         </div>
         <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => this.props.deleteMyFavorite(article.id)}
                >
                  Delete From Favorate
                </button>
        </div>
         <div className="card-footer">
           <small className="text-muted">{article.article.publishedAt}</small>
         </div>

       </div>

          </li>
          </Link>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: article => dispatch(actionCreators.addToFavorite(article)),
    deleteMyFavorite: id => dispatch(actionCreators.deleteMyFavorite(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteList);
