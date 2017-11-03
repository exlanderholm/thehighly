import React from 'react'

import styles from'./contact.css'

const Contact = ({id, title, body}) =>
  <div className="contact">
    <h1>{title}</h1>
    <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
  </div>

const createMarkupObject = __html => ({ __html })

export default Contact