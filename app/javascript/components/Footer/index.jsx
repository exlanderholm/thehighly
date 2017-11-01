import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.css'

const Footer = () =>
  <footer className="footer">

    <div className="footer__inner">
      <form action="mailto:mailto:hello@thehighly.co" className="subscribe-form">
        <input placeholder="email" type="email" /> <button className="caps">Subscribe</button>
        <p>We won't sell you out</p>
      </form>

      <ul className="nav caps">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="https://instagram.com/thehighly_" target="_blank">Instagram</a></li>
      </ul>

      <div className="copyright">
        <span>&copy; 2017 The Highly</span>
        <span>Please don't steal our stuff.</span>
      </div>
    </div>

  </footer>

export default Footer