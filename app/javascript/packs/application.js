import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import reducers from '../reducers'

import services from '../services'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContainer from '../containers/HomeContainer'

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
          <Header />
          <Route exact path="/" component={HomeContainer}/>
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