import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo'
import styles from './header.css'

const Header = ({openNavigation}) => (
  <header className="header">
    <Link className="mainLink about-link caps" to="/about">About</Link>

    <div className="logo-area">
      <Logo />
    </div>

    <Link className="mainLink caps" to="/recommended">The Highly Recommended</Link>

    <div className="menu-button-area">
      <button className="menu-button"onClick={openNavigation}>Menu</button>
    </div>
  </header>
)

export default Header