import React from 'react'
import Logo from '../Logo'
import styles from './welcome.css'

// const Welcome = ({ areyou21 }) => {
const Welcome = () => {
  
  // answerYes = () => {
  //   areyou21 = 'yes'
  // }
  // answerNo = () => {
  //   areyou21 = 'no'
  // }
  
  // if (areyou21 == '') {
    
    return (
      <div className="welcome">
        <Logo />
        <div className="image">Are you 21?</div>
        <div className="buttons">
          {/* <button className="caps yes" onClick={answerYes}>Yes</button> */}
          {/* <button className="caps no" onClick={answerNo}>No</button>     */}
          <button className="caps yes">Yes</button>
          <button className="caps no">No</button>    
        </div>
        <div className="note">By using this website, you are agreeing to our Terms &amp; Conditions and Privacy Policy.</div>
      </div>
    )
  // }
}

export default Welcome


