import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.css'

const Footer = ({ openPopup }) => (

  <footer className="footer">
    <div className="footer__inner">

      <blockquote className="group tagline">
        <p>A guide to the good good.</p>
      </blockquote>

      <nav className="group nav caps">
        <Link to="/about">About</Link>
        <br/>
        <Link to="/philosophy">Philosophy</Link>
        <br/>
        <Link to="/contact">Contact</Link>
        <br/>
        <a href="https://instagram.com/thehighly_" target="_blank">Instagram</a>
        <br/>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <br/>
        <Link to="/terms-conditions">Terms of Use</Link>
      </nav>

      <form className="group subscribe-form" action="https://itshighlyrecommended.us16.list-manage.com/subscribe/post?u=1b77c1d70c504ec82d801b47f&amp;id=05a8deb122" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
        <input type="hidden" name="b_1b77c1d70c504ec82d801b47f_05a8deb122" tabIndex="-1" value="" />
        <input placeholder="email" type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
        <button className="caps">Subscribe</button>
        <p>Be in the know.</p>
      </form>

      <div className="group copyright">
        <span>&copy; 2017 The Highly</span>
        <span>Please don&rsquo;t steal our stuff.</span>
      </div>

      <button className="splat" onClick={openPopup}>
        <svg width="97" height="111" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.95 60.897c-2.748 4.822-5.385 9.807-6.554 15.232-1.618 7.507-.226 15.619 3.802 22.157 1.927.319 2.966-2.192 3.114-4.139.526-6.914-.595-15.073 4.618-19.646l12.648 26.942c1.355 2.887 2.805 5.892 5.361 7.798 2.556 1.906 6.572 2.263 8.717-.095 1.855-2.038 1.662-5.179 1.083-7.872a41.04 41.04 0 0 0-9.636-18.8c-3.81-4.212-8.463-7.589-12.336-11.743-1.794-1.925-3.41-5.041-1.6-6.95 1.891-1.996 5.177-.328 7.387 1.309 13.647 10.116 30.073 17.427 47.054 16.965 1.171-.031 2.414-.124 3.367-.805 1.51-1.08 1.756-3.193 1.812-5.047.13-4.239-.206-8.93-3.194-11.939-2.725-2.744-6.889-3.314-10.733-3.737l-26.29-2.89c-3.47-.382-7.497-1.126-9.093-4.231 1.428-2.834 4.7-4.288 7.847-4.689 3.15-.399 6.344.033 9.513-.135 4.65-.248 9.123-1.777 13.513-3.33 6.741-2.382 13.932-5.228 17.757-11.27 1.121-1.772 1.911-3.844 1.726-5.934-.185-2.089-1.519-4.157-3.528-4.76-1.566-.47-3.245-.022-4.81.451A157.297 157.297 0 0 0 35.74 51.491c.707-6.195 5.034-11.248 8.551-16.396A73.17 73.17 0 0 0 55.251 9.864c.757-3.384.722-7.891-2.489-9.199-1.258-.512-2.678-.338-4.02-.13-4.71.728-10.006 2.24-12.054 6.544-1.11 2.331-1.01 5.027-.992 7.608a96.318 96.318 0 0 1-7.113 36.944c-2.296-4.031-1.77-8.987-1.749-13.626a56.466 56.466 0 0 0-4.404-22.09c-.637-1.514-1.7-3.238-3.342-3.189-.61.019-1.187.3-1.67.674-2.742 2.129-2.238 6.336-1.465 9.721l5.466 23.941c.24 1.051.48 2.155.188 3.193-.617 2.195-3.382 3.113-5.614 2.651-2.232-.463-4.123-1.881-6.132-2.958-2.009-1.076-4.465-1.823-6.533-.864C.292 50.49-.1 55.073 1.965 57.706c2.066 2.631 5.67 3.566 9.015 3.559 3.346-.007 6.652-.781 9.998-.829 3.345-.048 6.954.788 9.117 3.342" fill="#D74326" fillRule="evenodd"/>
        </svg>
      </button>
    </div>
  </footer>
)

export default Footer