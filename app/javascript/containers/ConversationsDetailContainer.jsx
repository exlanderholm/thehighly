import React from 'react'
import { connect } from 'react-redux'
import ConversationsDetail from '../components/ConversationsDetail'

import {
  getHighlyConversationsDetail,
} from '../actions'

class ConversationsDetailContainer extends React.Component {
  componentDidMount() {

    this.props.getHighlyConversationsDetail({slug: this.props.slug});

    console.log('time for ajax!')



    const credentials = 'same-origin'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    fetch('/api/posts/steve-deangelo', { credentials }).then(response => response.json()).then(json => {
      // dispatch(receivedCart(json))
      console.log(json);
      const post = json.post
      this.setState({...post})
    }).catch(error => {
      console.error(error);
    })


  }

  render() {
    return <ConversationsDetail {...this.props} />
  }
}

const mapStateToProps = (state) => {
  console.log({state})

  return { slug: 'steve-deangelo' }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyConversationsDetail: ({slug}) => { dispatch(getHighlyConversationsDetail({slug})) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsDetailContainer);