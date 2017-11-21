import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from '../components/Welcome'

import { deactivateWelcomeScreen } from '../actions'

const WelcomeContainer = (props) => <Welcome {...props} />

const mapStateToProps = ({welcome}) => {
  const { isActive } = welcome
  return {
    isActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    respondToYes: () => {
      dispatch(deactivateWelcomeScreen())
    },
    respondToNo: () => {
      window.location = "http://google.com/"
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)