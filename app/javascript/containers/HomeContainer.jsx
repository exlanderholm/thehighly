import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

import {
  getHighlyRecommended,
  getHighlyConversations,
  getHomePage
} from '../actions'

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyRecommended()
    this.props.getHighlyConversations()
    this.props.getHomePage()
  }

  render() {
    return <Home {...this.props} />
  }
}

const mapStateToProps = (state) => {

  const { highlyRecommended, highlyConversations, home } = state

  return {
    highlyRecommended,
    highlyConversations,
    home
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyConversations: () => dispatch(getHighlyConversations()),
    getHighlyRecommended: () => dispatch(getHighlyRecommended()),
    getHomePage: () => dispatch(getHomePage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);