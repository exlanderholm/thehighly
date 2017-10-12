import React from 'react'
import { Link } from 'react-router-dom'

import styles from './home.css'

const Home = ({ highlyRecommended, highlyConversations, highlyReports }) =>
  <div className="home">
    <h2>Highly Recommended</h2>

    <h2>Highly Conversations</h2>
    <HighlyConversations {...highlyConversations} />
    <h2>Highly Reports</h2>

  </div>

const HighlyConversations = ({posts}) => {
  return posts.map(post => <HighlyConversation {...post} key={post.id} />)
}

const HighlyConversation = ({title, slug}) => (
  <Link to={`/highly-conversations/${slug}`}>{title}</Link>
)

export default Home