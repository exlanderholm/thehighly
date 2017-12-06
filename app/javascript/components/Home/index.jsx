import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'nuka-carousel'

import { LeftArrow, RightArrow } from './decorators'

import styles from './home.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


var settings = {
  decorators: [
    {
      component: LeftArrow,
      position: 'CenterLeft',
      style: {
        marginTop: '-64px',
        padding: 20
      }
    },
    {
      component: RightArrow,
      position: 'CenterRight',
      style: {
        marginTop: '-64px',
        padding: 20
      }
    }
  ],
  wrapAround: true
}

const Home = ({ highlyRecommended, highlyConversations }) =>
  <div className="home">
    <div className="recommended">
      <div className="top">
        <h4 className="caps"><Link to={`/recommended`}>Highly Recommended</Link></h4>
      </div>
      <HighlyRecommended {...highlyRecommended} />
    </div>
    <div className="conversations">
      <div className="top">
        <h4 className="caps"><Link to={`/conversations`}>Conversations</Link></h4>
      </div>
      {highlyConversations && <HighlyConversations {...highlyConversations} />}
    </div>
  </div>


const HighlyRecommended = ({destinations, destinationsPresentPast, destinationsComingSoon}) => (
  <div className="content">
    <blockquote>
      Your guide to the good good.
      We&rsquo;ve done the research for you —
      here are the finest quality cannabis products of the now,
      and where to get them.
    </blockquote>
    <p className="destinations caps">
      { destinationsPresentPast.map(destination => <HighlyDestination {...destination} key={destination.id} />) }
      { destinationsComingSoon.map(destination => <HighlyDestination {...destination} key={destination.id} />) }
    </p>
    <p className="footnote small">
      Don't see your city? <Link to="/contact">Contact us</Link> with your Highly Recommended.
    </p>
  </div>
)

const HighlyDestination = ({name, slug, date}) => {
  const postDate = new Date(date);
  const today = new Date();
  const isComingSoon = postDate > today;

  if(isComingSoon) {
    return (
      <span className="destination" >
        <span className="middot">/</span>
        <span className={cx('comingsoon')} to={`/recommended/${slug}`}>{name}</span>
      </span>
    )
  } else {
    return (
      <span className="destination" >
        <span className="middot">/</span>
        <Link to={`/recommended/${slug}`}>{name}</Link>
      </span>
    )
  }
}

const HighlyConversations = ({posts}) =>
  <div className="content">
    {posts.length > 1 && <Carousel {...settings}>
      {
        posts.map(post => <HighlyConversation {...post} key={post.id} />)
      }
    </Carousel>}
  </div>

const HighlyConversation = ({tagline, featuredImage, slug, title}) => (
  <div className="conversation">
    <div className="image">
      <Link to={`/conversations/${slug}`}>
        <img src={`${featuredImage.url}?w=860&h=860`} />
      </Link>
    </div>
    <div className="excerpt">
      <h3 className="title caps">{title}</h3>
      <div className="tagline" dangerouslySetInnerHTML={createMarkupObject(tagline)} />
    </div>
  </div>
)

const createMarkupObject = __html => ({ __html });

export default Home