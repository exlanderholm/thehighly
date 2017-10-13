import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import reducers from '../reducers'

import services from '../services'

import HeaderContainer from '../containers/HeaderContainer'
import NavigationContainer from '../containers/NavigationContainer'
import Footer from '../components/Footer'
import HomeContainer from '../containers/HomeContainer'
import PostContainer from '../containers/PostContainer'
import My404Component from '../components/My404Component'
import styles from '../styles/layout'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  applyMiddleware(middleware, services)
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <HeaderContainer />
          <NavigationContainer />
          <Switch>
            <Route path="/" exact component={HomeContainer}/>
            <Route path="/highly-conversations/:id" component={PostContainer} />
            <Route component={My404Component} />
          </Switch>
          <Footer />
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