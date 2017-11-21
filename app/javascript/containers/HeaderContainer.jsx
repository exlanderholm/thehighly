import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

import { getHighlyRecommended, getHighlyConversations, toggleNavigation } from '../actions'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyRecommended()
    this.props.getHighlyConversations()
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = ({highlyRecommended, highlyConversations, navigation, router}) => {

  const { isOpen } = navigation

  const isHomePage = (router.location.pathname === "/")

  const highlyRecommendedLinks = highlyRecommended.destinationsPresentPast.map(({ name, slug, id }) => {
    return { name, slug, id }
  })

  const highlyConversationsLinks = highlyConversations.posts.map(({ title, slug, id }) => {
    return { title, slug, id }
  })

  return {
    isOpen,
    isHomePage,
    highlyRecommendedLinks,
    highlyConversationsLinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyRecommended: () => dispatch(getHighlyRecommended()),
    getHighlyConversations: () => dispatch(getHighlyConversations()),
    toggleNavigation: () => dispatch(toggleNavigation())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)