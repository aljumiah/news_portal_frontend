import * as actionTypes from "./actionTypes";

// AC
// import { setErrors } from "./errors";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getProfile = async => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await instance.get(`profile/`);
      // to get data from object reponse
      let profile = response.data;
      console.log("profile::", profile);
      //to send to reducer
      dispatch({
        type: actionTypes.GET_PROFILE,
        payload: profile
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error getting the profile");
    }
  };
};
