import React from 'react'
import styles from './popup.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Popup = ({ isOpen, closePopup, backgroundImage, title }) => {
  const popupClassNames = {
    popup: true,
    isOpen
  }

  const popupStyles = {
    backgroundImage: `url(${backgroundImage.url})`
  }

  return (
    <div className={cx(popupClassNames)} style={popupStyles}>
      <p>The popup</p>

      <button className="close" onClick={closePopup}>Close</button>

      <div className="popup__copy">

      </div>
    </div>
  )
}

export default Popup