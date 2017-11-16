import React from 'react'

import styles from './privacy-policy'

const PrivacyPolicy = ({ title, body }) =>
  <div className="privacy-policy">
    <div className="privacy-policy__inner">
      <h2 className="caps">{title}</h2>
      <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
    </div>
  </div>

const createMarkupObject = __html => ({ __html })

export default PrivacyPolicy