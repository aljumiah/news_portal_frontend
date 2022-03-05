import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchArticles = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get("articles/");
      // to get data from object reponse
      let articles = response.data; 
      //to send to reducer
      dispatch({
        type: actionTypes.FETCH_ARTICLES,
        payload: articles
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the articles");
    }
  };
};

export const fetchFavoriteArticles = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get("my-favorite/");
      // to get data from object reponse
      let articles = response.data; 
      //to send to reducer
      dispatch({
        type: actionTypes.FETCH_FAVORITE_ARTICLES,
        payload: articles
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the favorite articles");
    }
  };
};

export const addToFavorite = (article,history) => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.post("favorites/", article);
      dispatch(fetchArticles());
      console.log("addToFavorite")
      history.push("/home");
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error adding the article to favorite list");
    }
  };
};
export const getArticle = id => {
  return async dispatch => {
    console.log("id: " + id);
    try {
      // to fetch from api
      let response = await instance.get(`articles/${id}`);
      // to get data from object reponse
      let articleObj = response.data;
      //to send to reducer
      dispatch({
        type: actionTypes.GET_ARTICLE,
        payload: articleObj
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error getting the profile");
    }
  };
};
export const deleteMyFavorite = id => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.delete(`my-favorite/${id}/delete`);
      // to get data from object reponse
      await dispatch(fetchFavoriteArticles());
      //to send to reducer
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error deleting the article");
    }
  };
};
