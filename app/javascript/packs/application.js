import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import reducers from '../reducers'

import services from '../services'

import AboutContainer from '../containers/AboutContainer'
import ConversationsDetailContainer from '../containers/ConversationsDetailContainer'
import ContactContainer from '../containers/ContactContainer'
import Footer from '../components/Footer'
import HeaderContainer from '../containers/HeaderContainer'
import HomeContainer from '../containers/HomeContainer'
import NavigationContainer from '../containers/NavigationContainer'
import RecommendedDetailContainer from '../containers/RecommendedDetailContainer'
import PrivacyPolicyContainer from '../containers/PrivacyPolicyContainer'
import TermsAndConditionsContainer from '../containers/TermsAndConditionsContainer'
import WelcomeContainer from '../containers/WelcomeContainer'

import My404Component from '../components/My404Component'
import styles from '../styles/layout'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

import { closeNavigation } from '../actions'


// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Close the menu when going to new route
history.listen(() => {
  store.dispatch(closeNavigation())
})

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(middleware, services)
  )
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <HeaderContainer />
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/conversations/:id" component={ConversationsDetailContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/recommended/:id" component={RecommendedDetailContainer} />
            <Route path="/privacy-policy" component={PrivacyPolicyContainer} />
            <Route path="/terms-conditions" component={TermsAndConditionsContainer} />
            <Route component={My404Component} />
          </Switch>
          <Footer />
          <NavigationContainer />
          <WelcomeContainer />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
})

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <div>
//       <Header />
//       <PostContainer />
//       <Footer />
//     </div>,
//     document.body.appendChild(document.createElement('div'))
//   )
// })