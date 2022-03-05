import * as actionTypes from "../actions/actionTypes";

const initialState = {
  articles: [],
  favoriteArticles: [],
  article: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case actionTypes.FETCH_FAVORITE_ARTICLES:
      return {
        ...state,
        favoriteArticles: action.payload
      };
      case actionTypes.GET_ARTICLE:
        return {
          ...state,
          article: action.payload
        };
    default:
      return state;
  }
};

export default reducer;
