import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.css'

const Footer = () =>
  <footer className="footer">
    <div className="copyright">
      <span>&copy; 2017 The Highly</span>
      <span>Please don't steal our stuff.</span>
    </div>

    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <a href="https://instagram.com/thehighly_" target="_blank">Instagram</a>

    <form action="mailto:mailto:hello@thehighly.co" className="subscribe-form">
      <input placeholder="email" type="email" /> <button>Subscribe</button>
      <p>We won't sell you out</p>
    </form>

  </footer>

export default Footer