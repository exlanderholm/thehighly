import { combineReducers } from 'redux'

import navigation from './navigation'
import highlyRecommended from './highly-recommended'
import highlyConversations from './highly-conversations'
import aboutPage from './about-page'

import { routerReducer as router } from 'react-router-redux'


// Combine reducers from adjacent files here
const rootReducer = combineReducers({
  navigation,
  highlyRecommended,
  highlyConversations,
  aboutPage,
  router
})

export default rootReducer