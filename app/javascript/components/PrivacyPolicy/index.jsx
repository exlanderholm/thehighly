import React from 'react'

import styles from './privacy-policy'

const PrivacyPolicy = ({ title, body }) =>
  <div className="privacy-policy">
    <h1>{title}</h1>
    <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
  </div>

const createMarkupObject = __html => ({ __html })

export default PrivacyPolicy