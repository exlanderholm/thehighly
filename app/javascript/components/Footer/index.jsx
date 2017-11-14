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

      <form action="https://itshighlyrecommended.us16.list-manage.com/subscribe/post?u=1b77c1d70c504ec82d801b47f&amp;id=05a8deb122" className="subscribe-form" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
        <input type="hidden" name="b_1b77c1d70c504ec82d801b47f_05a8deb122" tabIndex="-1" value="" />
        <input placeholder="email" type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <button className="caps">Subscribe</button>
        <p>We won&rsquo;t sell you out</p>
      </form>

      <div className="copyright">
        <span>&copy; 2017 The Highly</span>
        <span>Please don&rsquo;t steal our stuff.</span>
      </div>
    </div>
  </footer>

export default Footer