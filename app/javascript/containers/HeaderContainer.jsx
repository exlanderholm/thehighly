import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

import { openNavigation } from '../actions'

const HeaderContainer = (props) => <Header {...props} />

const mapStateToProps = ({navigation}) => {
  const { isOpen } = navigation
  return {
    isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openNavigation: () => dispatch(openNavigation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)