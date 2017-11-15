import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

// import { openNavigation, closeNavigation } from '../actions'

const NavigationContainer = (props) => <Navigation {...props} />

const mapStateToProps = ({navigation}) => {
  const { isOpen } = navigation
  return {
    isOpen
  }
}

export default connect(mapStateToProps)(NavigationContainer)