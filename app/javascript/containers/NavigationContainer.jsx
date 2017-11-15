import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

import { toggleNavigation } from '../actions'

const NavigationContainer = (props) => <Navigation {...props} />

const mapStateToProps = ({navigation}) => {
  const { isOpen } = navigation
  return {
    isOpen
  }
}
const mapDispatchToProps = (dispatch) => {
  return {			
    toggleNavigation: () => dispatch(toggleNavigation())		
  }		
}		
    
export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer); 