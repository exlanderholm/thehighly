import React from 'react'
import { connect } from 'react-redux'
import Conversations from '../components/Conversations'

import {
  getHighlyConversations,
} from '../actions'

class ConversationsDetailContainer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getHighlyConversations()
  }

  render() {
    return <Conversations {...this.props} />
  }
}

const mapStateToProps = ({highlyConversations}) => {
  const { posts } = highlyConversations
  return posts
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyConversationsDetail: ({id}) => {
      dispatch(getHighlyConversations)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsDetailContainer)