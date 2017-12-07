import React from 'react'
import styles from './popup.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Popup = ({ isOpen, closePopup, backgroundImage, title, copy }) => {
  const popupClassNames = {
    popup: true,
    isOpen
  }

  const popupStyles = {
    backgroundImage: `url(${backgroundImage.url})`
  }

  return (
    <div className={cx(popupClassNames)} onClick={closePopup}>
      <div className="popup__inner" style={popupStyles}>
        <button className="close caps" onClick={closePopup}>Close</button>
        <div className="popup__copy" dangerouslySetInnerHTML={createMarkupObject(copy)} />
      </div>
    </div>
  )
}

const createMarkupObject = __html => ({ __html });

export default Popup