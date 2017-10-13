import React from 'react'
import styles from './post.css'

const ConversationsDetail = ({
  title,
  featuredImage,
  excerpt,
  body
}) => {
  const { url } = featuredImage
  const featuredImageUrl =  `${url}?w=1200&h=1200`
return (
    <div className="post">
      <div className="hero">
        <div className="featured-image">
          <img src={featuredImageUrl} alt="Featured Image" />
        </div>
        <div className="intro-content" dangerouslySetInnerHTML={createMarkupObject(excerpt)} />
      </div>

      <div className="body" dangerouslySetInnerHTML={createMarkupObject(body)} />
    </div>
  )
}

ConversationsDetail.defaultProps = {
  title: 'Mike is cool diary',
  featuredImage: {
    id: "",
    url: ""
  }
}

const createMarkupObject = __html => ({ __html });

export default ConversationsDetail