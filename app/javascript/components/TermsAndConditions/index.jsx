import React from 'react'
import styles from './terms-and-conditions'

const TermsAndConditions = ({ title, body }) =>
  <div className="terms-and-conditions">
    <h2 className="caps">{title}</h2>
    <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
  </div>

const createMarkupObject = __html => ({ __html })

export default TermsAndConditions