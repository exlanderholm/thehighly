import React from 'react'
import Logo from '../Logo'
import styles from './header.css'

const Header = ({openNavigation}) => (
  <header className="header">
    <div className="logo-area">
      <Logo />
    </div>
    <div className="menu-button-area">
      <button className="menu-button"onClick={openNavigation}>Menu</button>
    </div>
  </header>
)

export default Header