import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../components/About'

import {
  getHighlyRecommended,
  getHighlyConversations,
  getHighlyReports
} from '../actions'

class AboutContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyRecommended();
    this.props.getHighlyConversations();
    this.props.getHighlyReports();
  }

  render() {
    return <About {...this.props} />
  }
}

const mapStateToProps = (state) => {

  const { highlyRecommended, highlyConversations, highlyReports } = state

  return {
    highlyRecommended,
    highlyConversations,
    highlyReports
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyRecommended: () => dispatch(getHighlyRecommended()),
    getHighlyConversations: () => dispatch(getHighlyConversations()),
    getHighlyReports: () =>  dispatch(getHighlyReports())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);