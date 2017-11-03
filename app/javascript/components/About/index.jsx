import React from 'react'
import styles from './about.css'

const About = ({ title, intro, featuredImage, content }) => (
  <div className="about">
    <h1 className="caps">{title}</h1>
    <div className="intro" dangerouslySetInnerHTML={createMarkupObject(intro)} />
    <div className="content">
      <div className="cartoon">
        <img src={feauredImageUrl(featuredImage.url)} />
      </div>
      <div className="before-about" dangerouslySetInnerHTML={createMarkupObject(content)} />
    </div>
  </div>
)

const feauredImageUrl = (url) => `${url}?w=1200&h=1200`

const createMarkupObject = __html => ({ __html });

export default About