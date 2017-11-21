import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.css'

const Navigation = ({ highlyRecommendedLinks, highlyConversationsLinks, closeNavigation, isOpen}) => (
  <div className={`navigation ${isOpen ? 'isOpen' : ''}`}>
    <nav className="main-navigation"> 

      <div className="nav-item">
        <span className="caps">Highly Recommended</span>
        <RecommendedLinks highlyRecommendedLinks={highlyRecommendedLinks} />
      </div>

      <div className="nav-item">
        <span className="caps">Conversations</span>
        <ConversationsLinks highlyConversationsLinks={highlyConversationsLinks} />
      </div>

    </nav>
  </div>
)
const RecommendedLinks = ({highlyRecommendedLinks}) => (
  <ul className="dropdown">
    {highlyRecommendedLinks.map(link => <li key={link.id}><Link to={`/recommended/${link.slug}`}>{link.name}</Link></li>)}
  </ul>
)
const ConversationsLinks = ({highlyConversationsLinks}) => (
  <ul className="dropdown">
    {highlyConversationsLinks.map(link => <li key={link.id}><Link to={`/conversations/${link.slug}`}>{link.title}</Link></li>)}
  </ul>
)


export default Navigation