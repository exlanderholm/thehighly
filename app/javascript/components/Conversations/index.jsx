import React from 'react'
import styles from './conversations.css'

const Conversations = ({posts, intro}) =>
  <div className="conversations">
    <div className="intro">
      <h1>{intro}</h1>
      <p className="issue caps">vol. 1 2017/2018</p>
    </div>
    <div className="posts">
      <div className="inner">
        {posts.map( (post) => <Post {...post} key={post.id} />)}
      </div>
    </div>
  </div>

const Post = ({featuredImage, slug, tagline, title}) =>
  <div className="post">
    <a href={`/conversations/${slug}`}>
      <img src={`${featuredImage.url}?w=550&h=550`} />
      <h2 className="title">{title} ⟶</h2>
    </a>
    <div className="tagline" dangerouslySetInnerHTML={createMarkupObject(tagline)} />
  </div>

const createMarkupObject = __html => ({ __html });

export default Conversations