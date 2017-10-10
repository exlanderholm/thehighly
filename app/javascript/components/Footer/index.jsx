import React from 'react'
import styles from './footer.css'

const Footer = () =>
  <footer className="footer">
    <nav className="main-menu">
      <a href="/list">List</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>

    <div className="bottom">
      <span>&copy; 2017 The Highly Media Inc.</span>
      <a href="mailto:hello@thehighly.co" target="_blank">Email</a>
      <a href="https://instagram.com/thehighly_" target="_blank">Instagram</a>
    </div>
  </footer>

export default Footer