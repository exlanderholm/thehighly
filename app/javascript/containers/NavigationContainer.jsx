import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

import { openNavigation, closeNavigation } from '../actions'

const NavigationContainer = (props) => <Navigation {...props} />

const mapStateToProps = ({navigation}) => {
  const { isOpen } = navigation
  return {
    isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openNavigation: () => dispatch(openNavigation()),
    closeNavigation: () => dispatch(closeNavigation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);