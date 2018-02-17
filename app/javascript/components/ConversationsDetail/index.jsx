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
    <div className="post">

      <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
      <meta property="og:type"               content="article" />
      <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
      <meta property="og:description"        content="How much does culture influence creative thinking?" />
      <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />

      <div className="hero-wrapper">
        <div className="hero">
          <div className="featured-image">
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