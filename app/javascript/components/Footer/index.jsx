import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.css'

const Footer = ({ openPopup }) => (

  <footer className="footer">
    <div className="footer__inner">
      <blockquote className="tagline">
        <p>A guide to the good good.</p>
      </blockquote>

      <ul className="nav caps">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/terms-conditions">Terms</Link> & <Link to="/privacy-policy">Privacy</Link></li>
        <li><a href="https://instagram.com/thehighly_" target="_blank">Instagram</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <form action="https://itshighlyrecommended.us16.list-manage.com/subscribe/post?u=1b77c1d70c504ec82d801b47f&amp;id=05a8deb122" className="subscribe-form" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
        <input type="hidden" name="b_1b77c1d70c504ec82d801b47f_05a8deb122" tabIndex="-1" value="" />
        <input placeholder="email" type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <button className="caps">Subscribe</button>
        <p>Be in the know.</p>
      </form>

      <div className="copyright">
        <span>&copy; 2017 The Highly</span>
        <span>Please don&rsquo;t steal our stuff.</span>
      </div>

      <button className="splat__icon" onClick={openPopup}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.8 118.8">
          <path fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6908" d="M66.4 79.9c-.9 10.4-5 20.6-11.6 28.7-2 2.4-8 7.1-8.8 4.7-2-4.5 12-14.5 11-23-11.7 5-24.3 7.7-37 8-1.8 0-4.4-.6-4.2-2.5.1-.8.7-1.4 1.3-1.9 3.5-2.7 8.2-3.2 12.6-3.9 11.2-1.9 22.1-6 31.7-12.1-4.5-2.8-10.4-.6-15.6-1.2-3.9-.4-7.4-2.4-10.7-4.3C24.8 66.4 14.8 60 5.2 53c-.8-.6-1.7-1.4-1.6-2.4.1-.9 1-1.5 1.8-1.8 4.3-1.7 9.1.3 13.2 2.5 14.5 7.8 28.1 19 44.4 20.5-8.7-14.5-17.2-29.2-25.5-44-3.3-5.8-6.5-11.6-7.6-18-.1-.6-.2-1.3.1-1.9.6-1.5 2.8-1.3 4.2-.6 3.4 1.7 5.4 5.2 7.3 8.5 9.3 16.9 17.4 34.4 24.4 52.4 4.3-16.5 8.6-33 13-49.4.3-1.3.7-2.7 1.6-3.7.9-1 2.5-1.6 3.7-.9 1.8 1.1 1.3 3.8.5 5.7-6.5 17.1-11 34.9-13.6 53 4.7-.9 7.5-5.4 10.2-9.4 4.5-6.6 9.9-12.6 16.1-17.6 3.1-2.5 7.8-4.8 10.8-2.1C99.9 57.2 88.9 69 76 78.2c1.5 1.5 3.8 1.7 5.9 1.9 11.7 1 23.1 4.9 33.1 11.1-1.1 1.7-3.6 1.7-5.6 1.5-15.3-1.6-29.1-5.9-43-12.7"/>
        </svg>
      </button>
    </div>
  </footer>
)

export default Footer