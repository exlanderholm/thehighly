import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import styles from './home.css'
import "../../styles/slick/slick.css"

var settings = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

const Home = ({ highlyRecommended, highlyConversations }) =>

  <div className="home">
    <div className="conversations">
      <h4 className="caps"><Link to={`/conversations`}>Conversations</Link></h4>
      <HighlyConversations {...highlyConversations} />
    </div>
    <div className="recommended">
      <h4 className="caps"><Link to={`/Recommended`}>The Highly Recommended</Link></h4>
      {<HighlyRecommended {...highlyRecommended} />}
    </div>
  </div>


const HighlyRecommended = ({destinations}) => (
  <div className="content">
    <p className="intro">
      Your giude to the good-good.
      We've done the research for you —
      here are the finest quality
      cannabis products of the now,
      and where to get them 
    </p>
    <p className="caps">
      Bay Area・Seattle・Portland・Vancouver
    </p>
    <p className="small">
        Don't see your city? Contact us with your Highly Recommended.
      </p>
    {/*{ destinations.map(destination => <HighlyDestination {...destination} key={destination.id} />) } */}
  </div>
)

// const HighlyDestination = ({title, slug}) => (
//   <h2 className="blah">
//     <Link to={`/recommended/${slug}`}>{title}</Link>
//   </h2>
// )

const HighlyConversations = () => (
  <Slider  {...settings}>
    <div className="conversation">
      <div className="image"><img src="//images.contentful.com/pzkgcz3qicwx/2rIcx9kpLSke0WE6WQoWEO/182303b5ecb2783ca1a563d5fc44b6ae/Steve_DeAngelo_Photo.jpg"/></div>
      {/* <h2 className="link"><Link to={`/conversations/steve-deangelo`}>Steve DeAngelo</Link></h2> */}
      <p className="intro">
        <em>Steve DeAngelo</em> is an author, activist, entrepreneur
        and the owner of the world's largest dispensary.
      </p>
      <span className="small caps">November 10, 2017</span>
    </div>
    <div className="conversation">
      <div className="image"><img src="//images.contentful.com/pzkgcz3qicwx/67Shz4f1BYa46ikmOYok04/39f6eed2c59d730c5c54498e60d2bcdc/image1.jpeg"/></div>
      {/* <h2 className="link"><Link to={`/conversations/rennee-gagnon`}>Rennee Gagnon</Link></h2> */}
      <p className="intro">
        <em>Rennee Gagnon</em> What disappoints me is when I get taken aside by women
          who tell me that I shouldn&#39;t be so hard on men.
          I understand where they&#39;re coming from.
      </p>
      <span className="small caps">November 12, 2017</span>
    </div>
  </Slider>
)




// Home.defaultProps = {
//   highlyConversations: [
//     {
//       body: "<p>Renee stands at the intersection of the gender and cannabis revolutions: She is the first transgender female CEO to take a cannabis venture public. I first heard her speak at Women Grow, an organiz…",
//       category: "highly-conversations",
//       date: "2017-10-13T00:00:00.000+00:00",
//       excerpt: "<p>“What disappoints me is when I get taken aside by women who tell me that I shouldn&#39;t be so hard on men. I understand where they&#39;re coming from. It&#39;s usually women who have achieved a ce…",
//       featuredImage: {
//         id: "6zl2qy2bi8QCqiuGUWOIgc",
//         slug: "rennee-gagnon",
//         title: "Rennee Gagnon"
//       }
//     },
//     {
//       body: "<p><strong>TH: At what age did cannabis enter your life?</strong></p>\n\n<p>SD: I grew up in a civil rights house. I was five years old at Martin Luther King&#39;s march on Washington, making sandwiches…",
//       category: "highly-conversations",
//       date: "2017-10-11T00:00:00.000+00:00",
//       excerpt: "<p>With over a decade of research backed by millions of dollars in federal funding, award-winning neuroscientist  <em><strong>Adie Poe, Ph.D.</strong></em> delves into how cannabis can help with opioi…"
//       featuredImage: {
//         id: "3koxV24tqUM6u6y2oMUYmQ",
//         slug: "steve-deangelo",
//         title: "Steve DeAngelo"
//       }
//     }
//   ],
//   highlyRecommended: []
// }


// const HighlyConversation = ({title, slug}) => (
//   <div className="conversation">
//     <div className="image"></div>
//     {<h2 className="link"><Link to={`/conversations/${slug}`}>{title}</Link></h2>}
//     <p className="intro">
//       Steve DeAngelo is an author, activist, entrepreneur
//       and the owner of the world's largest dispensary.
//     </p>
//     <span className="small caps">Date</span>
//   </div>
// )

export default Home