import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.css'

const Footer = () =>
  <footer className="footer">

    <div className="footer__inner">

      <blockquote className="tagline">
        <p>A guide to the good good.</p>
      </blockquote>

      <ul className="nav caps">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="https://instagram.com/thehighly_" target="_blank">Instagram</a></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/terms-conditions">Terms of use</Link></li>
      </ul>

      <form action="mailto:mailto:hello@thehighly.co" className="subscribe-form">
        <input placeholder="email" type="email" /> <button className="caps">Subscribe</button>
        <p>We won&rsquo;t sell you out</p>
      </form>

      <div className="copyright">
        <span>&copy; 2017 The Highly</span>
        <span>Please don&rsquo;t steal our stuff.</span>
      </div>

    </div>

  </footer>

export default Footer