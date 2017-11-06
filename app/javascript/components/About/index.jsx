import React from 'react'
import styles from './about.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)


const About = ({ title, intro, featuredImage, content }) => (
  <div className={cx("about")}>
    <h2 className="caps">{title}</h2>
    <div className={cx("intro")} dangerouslySetInnerHTML={createMarkupObject(intro)} />
    <div className={cx("content")}>
      <div className="cartoon">
        <img src={feauredImageUrl(featuredImage.url)} />
      </div>
      <div className="before-about" dangerouslySetInnerHTML={createMarkupObject(content)} />
    </div>
  </div>
)

const feauredImageUrl = (url) => `${url}?w=1200&h=1200`

const createMarkupObject = __html => ({ __html })

export default About