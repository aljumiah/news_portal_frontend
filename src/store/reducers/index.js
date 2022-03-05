import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import articlesReducer from "./articles";
import profileReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  articlesReducer: articlesReducer,
  profileReducer: profileReducer,
});
