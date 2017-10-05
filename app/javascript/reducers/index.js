import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import posts from "./posts";

// Combine reducers from adjacent files here
const rootReducer = combineReducers({
  router: routerReducer,
  posts
});

export default rootReducer;