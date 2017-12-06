import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navigation.css'

const Navigation = ({ highlyRecommendedLinks, highlyConversationsLinks, closeNavigation, isOpen}) => (
  <div className={`navigation ${isOpen ? 'isOpen' : ''}`}>
    <nav className="main-navigation">
      <div className="nav-item">
        <NavLink activeClassName="active" to="/recommended" className="caps">Highly Recommended</NavLink>
        <RecommendedLinks highlyRecommendedLinks={highlyRecommendedLinks} />
      </div>

      <div className="nav-item">
        <NavLink activeClassName="active" to="/conversations" className="caps">Conversations</NavLink>
        <ConversationsLinks highlyConversationsLinks={highlyConversationsLinks} />
      </div>
    </nav>
  </div>
)

const RecommendedLinks = ({highlyRecommendedLinks}) => (
  <ul className="dropdown">
    {highlyRecommendedLinks.map(link => <li key={link.id}><NavLink activeClassName="active" to={`/recommended/${link.slug}`}>{link.name}</NavLink></li>)}
  </ul>
)

const ConversationsLinks = ({highlyConversationsLinks}) => (
  <ul className="dropdown">
    {highlyConversationsLinks.map(link => <li key={link.id}><NavLink activeClassName="active" to={`/conversations/${link.slug}`}>{link.title}</NavLink></li>)}
  </ul>
)

export default Navigation