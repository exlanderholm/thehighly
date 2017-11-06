import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from '../components/Welcome'

import { openNavigation } from '../actions'

const WelcomeContainer = (props) => <Welcome {...props} />

const mapStateToProps = ({navigation, router}) => {
  const { isOpen } = navigation
  const isHomePage = (router.location.pathname === "/")
  return {
    isOpen,
    isHomePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openNavigation: () => dispatch(openNavigation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)