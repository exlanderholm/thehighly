import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

import styles from './header.css'

const Header = ({ highlyRecommendedLinks, highlyConversationsLinks, toggleNavigation, isOpen, isHomePage }) => (
  <header className="header">
    <div className="header__inner">
      <div className="menu-button-area"></div>
        {!isHomePage && <ConversationsLinks highlyConversationsLinks={highlyConversationsLinks} />}

      <div className="logo-area">
        <Logo />
      </div>
        {!isHomePage && <RecommendedLinks highlyRecommendedLinks={highlyRecommendedLinks} />}
      <div className="menu-button-area">
        <button className={`menu-button ${isOpen ? 'isOpen' : ''}`} onClick={toggleNavigation}>Menu</button>
      </div>
    </div>
  </header>
)

const RecommendedLinks = ({highlyRecommendedLinks}) => (
  <div className="nav-item recommended">
    <NavLink activeClassName="active" to="/recommended" className="caps">Highly Recommended</NavLink>
    <ul className="dropdown">
      {highlyRecommendedLinks.map(link => <li key={link.id}><NavLink activeClassName="active" to={`/recommended/${link.slug}`}>{link.name}</NavLink></li>)}
    </ul>
  </div>
)

const ConversationsLinks = ({highlyConversationsLinks}) => (
  <div className="nav-item">
    <NavLink activeClassName="active"  to="/conversations" className="caps">Conversations</NavLink>
    <ul className="dropdown">
      {highlyConversationsLinks.map(link => <li key={link.id}><NavLink activeClassName="active" to={`/conversations/${link.slug}`}>{link.title}</NavLink></li>)}
    </ul>
  </div>
)

export default Header