import React from 'react'
import styles from './about.css'

const About = ({ title, intro, featuredImage, content }) => (
  <div className="about">
    <h1>{title}</h1>
    <div className="intro" dangerouslySetInnerHTML={createMarkupObject(intro)} />
    <img src={feauredImageUrl(featuredImage.url)} />
    <div className="intro" dangerouslySetInnerHTML={createMarkupObject(content)} />
  </div>
)

const feauredImageUrl = (url) => `${url}?w=1200&h=1200`

const createMarkupObject = __html => ({ __html });

export default About