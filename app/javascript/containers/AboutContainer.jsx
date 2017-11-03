import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../components/About'

import {
  getAboutPage
} from '../actions'

class AboutContainer extends React.Component {
  componentDidMount() {
    this.props.getAboutPage()
  }

  render() {
    return <About {...this.props} />
  }
}

const mapStateToProps = (state) => {
  const { aboutPage } = state

  return {
    ...aboutPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAboutPage: () => dispatch(getAboutPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);