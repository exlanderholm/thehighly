import { combineReducers } from 'redux';

import highlyRecommended from './highly-recommended';
import highlyConversations from './highly-conversations';

import { routerReducer as router } from 'react-router-redux'


// Combine reducers from adjacent files here
const rootReducer = combineReducers({
  highlyRecommended,
  highlyConversations,
  router
});

export default rootReducer;