import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'nuka-carousel'

import { LeftArrow, RightArrow } from './decorators'

import styles from './home.css'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const decorators = [
  {
    component: LeftArrow,
    position: 'CenterLeft'
  },
  {
    component: RightArrow,
    position: 'CenterRight'
  }
]

var settings = {
  wrapAround: true,
  decoratorz: Carousel.getDefaultProps().decorators.slice(0, 3),
  decorators
}

const Home = ({ highlyRecommended, highlyConversations }) =>
  <div className="home">
    <div className="recommended">
      <div className="top">
        <h4 className="caps"><Link to={`/recommended/the-bay`}>Highly Recommended</Link></h4>
      </div>
      <HighlyRecommended {...highlyRecommended} />
    </div>
    <div className="conversations">
      <div className="top">
        <h4 className="caps"><Link to={`/conversations/steve-deangelo`}>Conversations</Link></h4>
      </div>
      {highlyConversations && <HighlyConversations {...highlyConversations} />}
    </div>
  </div>


const HighlyRecommended = ({destinations}) => (
  <div className="content">
    <blockquote className="intro">
      Your guide to the good good.
      We&rsquo;ve done the research for you —
      here are the finest quality cannabis products of the now,
      and where to get them.
    </blockquote>
    <p className="destinations caps">
      { destinations.map(destination => <HighlyDestination {...destination} key={destination.id} />) }
    </p>
    <p className="small">
      Don't see your city? Contact us with your Highly Recommended.
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
        <span className="middot">•</span>
        <span className={cx({comingsoon: isComingSoon})} to={`/recommended/${slug}`}>{name}</span>
      </span>
    )
  } else {
    return (
      <span className="destination" >
        <span className="middot">•</span>
        <Link className={cx({comingsoon: isComingSoon})} to={`/recommended/${slug}`}>{name}</Link>
      </span>
    )
  }
}

const HighlyConversations = ({posts}) =>
  <div className="content">
    <Carousel {...settings}>
      {
        posts.map(post => <HighlyConversation {...post} key={post.id} />)
      }
    </Carousel>
  </div>

const HighlyConversation = ({tagline, featuredImage, slug, title}) => (
  <div className="conversation">
    <div className="image">
      <Link to={`/conversations/${slug}`}>
        <img src={featuredImage.url} />
      </Link>
    </div>
    <h2 className="title">
      <Link to={`/conversations/${slug}`}>
        {title}
      </Link>
    </h2>
    <div className="tagline excerpt" dangerouslySetInnerHTML={createMarkupObject(tagline)} />
  </div>
)

const createMarkupObject = __html => ({ __html });

export default Home