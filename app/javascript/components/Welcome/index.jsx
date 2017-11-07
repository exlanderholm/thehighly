import React from 'react'
import Logo from '../Logo'
import styles from './welcome.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const Welcome = ({isActive, respondToYes, respondToNo}) => {

  return (
    <div className={cx('welcome', { isActive })}>
      <Logo />
      <div className="image">Are you 21?</div>
      <div className="buttons">
        <button className="caps yes" onClick={respondToYes}>Yes</button>
        <button className="caps no" onClick={respondToNo}>No</button>
      </div>
      <div className="note">By using this website, you are agreeing to our Terms &amp; Conditions and Privacy Policy.</div>
    </div>
  )
}

export default Welcome


