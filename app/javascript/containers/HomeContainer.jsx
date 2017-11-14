import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

import {
  getHighlyRecommended,
  getHighlyConversations
} from '../actions'

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyRecommended();
    this.props.getHighlyConversations();
  }

  render() {
    return <Home {...this.props} />
  }
}

const mapStateToProps = (state) => {

  const { highlyRecommended, highlyConversations, highlyReports } = state

  return {
    highlyRecommended,
    highlyConversations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyRecommended: () => dispatch(getHighlyRecommended()),
    getHighlyConversations: () => dispatch(getHighlyConversations()),
    getHighlyReports: () =>  dispatch(getHighlyReports())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);