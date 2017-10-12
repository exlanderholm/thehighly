import React from 'react'
import styles from './footer.css'
import { Link } from 'react-router-dom'

const Footer = () =>
  <footer className="footer">
    <nav className="main-menu">
      <Link to="/list">List</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <div className="bottom">
      <span>&copy; 2017 The Highly Media Inc.</span>
      <a href="mailto:hello@thehighly.co" target="_blank">Email</a>
      <a href="https://instagram.com/thehighly_" target="_blank">Instagram</a>
    </div>
  </footer>

export default Footer