import { combineReducers } from 'redux'

import aboutPage from './about-page'
import contactPage from './contact-page'
import highlyConversations from './highly-conversations'
import highlyRecommended from './highly-recommended'
import home from './home'
import navigation from './navigation'
import philosophy from './philosophy'
import popup from './popup'
import privacyPolicy from './privacy-policy'
import termsAndConditions from './terms-and-conditions'
import welcome from './welcome'

import { routerReducer as router } from 'react-router-redux'

// Combine reducers from adjacent files here
const rootReducer = combineReducers({
  aboutPage,
  contactPage,
  highlyConversations,
  highlyRecommended,
  home,
  navigation,
  philosophy,
  popup,
  privacyPolicy,
  router,
  termsAndConditions,
  welcome
})

export default rootReducer