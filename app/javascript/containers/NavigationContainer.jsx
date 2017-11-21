import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

import { getHighlyRecommended, getHighlyConversations, toggleNavigation } from '../actions'

class NavigationContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyRecommended()
    this.props.getHighlyConversations()
  }
  render () {
    return (
      <Navigation {...this.props} />
    )
  }
}

const mapStateToProps = ({highlyRecommended, highlyConversations, navigation}) => {

  const { isOpen } = navigation

  const highlyRecommendedLinks = highlyRecommended.destinationsPresentPast.map(({ name, slug, id }) => {
    return { name, slug, id }
  })

  const highlyConversationsLinks = highlyConversations.posts.map(({ title, slug, id }) => {
    return { title, slug, id }
  })

  return {
    isOpen,
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);