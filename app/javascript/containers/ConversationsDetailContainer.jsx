import React from 'react'
import { connect } from 'react-redux'
import ConversationsDetail from '../components/ConversationsDetail'

import {
  getHighlyConversationsDetail
} from '../actions'

class ConversationsDetailContainer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getHighlyConversationsDetail({id})
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.id && this.props.match.params.id !== nextProps.match.params.id) {
      const id = nextProps.match.params.id
      this.props.getHighlyConversationsDetail({id})
    }
  }

  render() {
    return <ConversationsDetail {...this.props} />
  }
}

const mapStateToProps = ({highlyConversations}) => {
  const { post } = highlyConversations
  return post
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyConversationsDetail: ({id}) => {
      dispatch(getHighlyConversationsDetail({id}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsDetailContainer)