import React from 'react'
import { Link } from 'react-router-dom'

import styles from './home.css'

const Home = ({ highlyRecommended, highlyConversations, highlyReports }) =>
  <div className="home">
    <h4>Highly Recommended</h4>

    <h4>Highly Conversations</h4>
    <HighlyConversations {...highlyConversations} />
    <h4>Highly Reports</h4>

  </div>

const HighlyConversations = ({posts}) => {
  return posts.map(post => <HighlyConversation {...post} key={post.id} />)
}

const HighlyConversation = ({title, slug}) => (
  <h2 className="conversation-link"><Link to={`/conversations/${slug}`}>{title}</Link></h2>
)

export default Home