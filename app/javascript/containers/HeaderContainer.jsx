import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

import { toggleNavigation, getNavigationLink } from '../actions'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getNavigationLink({slug: 'conversations'})
    this.props.getNavigationLink({slug: 'recommended'})
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = ({navigation, router}) => {
  const { isOpen, navigationLinks } = navigation
  const isHomePage = (router.location.pathname === "/")
  return {
    isOpen,
    isHomePage,
    navigationLinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavigation: () => dispatch(toggleNavigation()),
    getNavigationLink: ({slug}) => dispatch(getNavigationLink({slug}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)