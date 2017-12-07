import React from 'react'
import styles from './post.css'



const ConversationsDetail = ({
  title,
  featuredImage,
  featuredImageBackgroundColor,
  excerptBackgroundColor,
  excerpt,
  postBackgroundColor,
  body
}) => {
  const { url } = featuredImage
  const featuredImageUrl =  `${url}?w=1200&h=1200`

  return (
    // <div className="post" style={{backgroundColor: postBackgroundColor}}>
    <div className="post">
      <div className="hero-wrapper" style={{backgroundColor: excerptBackgroundColor}}>
        <div className="hero">
          <div className="featured-image" style={{backgroundColor: excerptBackgroundColor}}>
            <img src={featuredImageUrl} alt="" />
          </div>
          <div className="intro-content" dangerouslySetInnerHTML={createMarkupObject(excerpt)} />
        </div>
      </div>
      <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
    </div>
  )
}

const createMarkupObject = __html => ({ __html });

export default ConversationsDetail