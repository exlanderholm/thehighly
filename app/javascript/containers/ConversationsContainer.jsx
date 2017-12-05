import React from 'react'
import { connect } from 'react-redux'
import Conversations from '../components/Conversations'

import {
  getHighlyConversations,
} from '../actions'

class ConversationsContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyConversations()
  }

  render() {
    return <Conversations {...this.props} />
  }
}

const mapStateToProps = ({ highlyConversations }) => {
  const { posts, intro } = highlyConversations

  // const postsByIssue = {}
  // posts.forEach(post => {
  //   postByIssue[post.issue.id].posts[] = post
  // });
  // console.log(postsByIssue)

  return { posts, intro }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyConversations: () => {
      dispatch(getHighlyConversations())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsContainer)