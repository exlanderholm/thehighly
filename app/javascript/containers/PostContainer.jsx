import React, { Component } from 'react'

import Post from '../components/Post'

class PostContainer extends Component {
  componentDidMount() {
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
    return <Post {...this.state} />
  }
}

export default PostContainer