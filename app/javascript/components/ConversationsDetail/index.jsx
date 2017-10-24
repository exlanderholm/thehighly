import React from 'react'
import styles from './post.css'

const ConversationsDetail = ({
  title,
  featuredImage,
  excerptBackgroundColor,
  excerpt,
  postBackgroundColor,
  body
}) => {
  const { url } = featuredImage
  const featuredImageUrl =  `${url}?w=1200&h=1200`



  const stylezz = `
    .featured-image::before {
      content: "";
      display: block;
      opacity: 0.25;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${excerptBackgroundColor};
      pointer-events: none;
      z-index: 1;
    }
  `

return (
    <div className="post" style={{backgroundColor: postBackgroundColor}}>
      <style type="text/css">
        {stylezz}
      </style>
      <div className="hero" style={{backgroundColor: excerptBackgroundColor}}>
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