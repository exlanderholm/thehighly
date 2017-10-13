import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.css'

const Navigation = ({closeNavigation, isOpen}) => (
  <div className={`navigation ${isOpen ? 'isOpen' : ''}`}>
    <div className="close-button-area">
      <button className="close-button" onClick={closeNavigation}>Close</button>
    </div>
    <nav className="main-navigation">
      <Link to="/post">Post page mockup</Link>
      <Link to="/recommended">The Highly Recommended</Link>
      <Link to="/conversations">Conversations</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
)

export default Navigation