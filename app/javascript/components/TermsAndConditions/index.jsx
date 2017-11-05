import React from 'react'
import styles from './terms-and-conditions'

const TermsAndConditions = ({ title, body }) =>
  <div className="terms-and-conditions">
    <h1>{title}</h1>
    <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
  </div>

const createMarkupObject = __html => ({ __html })

export default TermsAndConditions