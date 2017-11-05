import { combineReducers } from 'redux'

import navigation from './navigation'
import highlyRecommended from './highly-recommended'
import highlyConversations from './highly-conversations'
import aboutPage from './about-page'
import contactPage from './contact-page'
import privacyPolicy from './privacy-policy'
import termsAndConditions from './terms-and-conditions'

import { routerReducer as router } from 'react-router-redux'

// Combine reducers from adjacent files here
const rootReducer = combineReducers({
  navigation,
  highlyRecommended,
  highlyConversations,
  aboutPage,
  contactPage,
  privacyPolicy,
  termsAndConditions,
  router
})

export default rootReducer