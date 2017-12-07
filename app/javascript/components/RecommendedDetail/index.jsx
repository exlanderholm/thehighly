import React from 'react'
import PropTypes from 'prop-types'
import MapContainer from '../../containers/MapContainer'

import styles from './recommended-detail.css'

const RecommendedDetail = ({
  title,
  excerpt,
  coordinates,
  mapMessaging,
  whereToGo,
  whatToGet
}) => {
  const whatToGetSorted = sortWtg({whatToGet})
  return (
    <div className="recommended-detail">

      <div className="recommended-detail__top">
        <h1 className="title">{title}</h1>
        <div className="recommended-detail__excerpt" dangerouslySetInnerHTML={createMarkupObject(excerpt)} />
      </div>

      <div className="map-container">
        {coordinates && <MapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0sfdV9YRi7xlGTu2wWal0fKLWInIQ6ME&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `550px` }} />}
          containerElement={<div style={{ height: `auto` }} />}
          mapElement={<div style={{ height: `550px` }} />}
          whereToGo={whereToGo}
          coordinates={coordinates}
        />}
      </div>

      <div className="notice caps" dangerouslySetInnerHTML={createMarkupObject(mapMessaging)} />

      <div className="where-to-go">
        <div className="inner">
          <h4 className="section__title caps">Where to Go</h4>
          {whereToGo.filter( place => place.contentTypeId === 'place' ).map( place => <Place {...place} key={place.id} /> )}
        </div>
      </div>

      <div className="what-to-get">
        <div className="inner">
          <h4 className="section__title caps">What To Get</h4>
          {whatToGetSorted.map( (group, idx) => <ProductGroup {...group} key={idx} />)}
        </div>
      </div>
    </div>
  )
}

RecommendedDetail.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  whereToGo: PropTypes.array,
  whatToGet: PropTypes.array,
  mapMessaging: PropTypes.string
}

RecommendedDetail.defaultProps = {
  title: '',
  excerpt: '',
  whereToGo: [],
  whatToGet: [],
  mapMessaging: ''
}

const sortWtg = ({whatToGet}) => {
  var whatToGetSortedObject = {}
  whatToGet.forEach(element => {
    whatToGetSortedObject[element.type] = whatToGetSortedObject[element.type] || []
    whatToGetSortedObject[element.type].push(element)
  })

  var whatToGetSortedArray = []

  Object.keys(whatToGetSortedObject).forEach( (groupName) => {
    whatToGetSortedArray.push({
      products: whatToGetSortedObject[groupName],
      type: groupName
    })
  })

  return whatToGetSortedArray
}

// const relatedPosts = (relatedPosts) => {

//   return (
//     <span className="caps">Related: </span>
//   )
//   relatedPosts.forEach(relatedPost => {
//     return (
//       <span className=""><a href={relatedPost.link}>{relatedPost.title}</a></span>
//     )
//   })
// }

const Place = ({ id, title, description, location, website, relatedPosts }) => {

  return (
  <div className="place">
    <ul className="place__header">
      <li><h3 className="place__title">{title}</h3></li>
      <li><a className="caps" href={website} target="_blank">website</a></li>
      <li><a className="caps" target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lon}`}>Directions</a></li>
      {/* {relatedPosts} */}
    </ul>
    <div className="place__content" dangerouslySetInnerHTML={createMarkupObject(description)} />
  </div>
)}

const ProductGroup = ({type, products}) =>
  <div className="product__type">
    <label htmlFor={`product_type_${type}`}>{type}</label>
    <input className="product_type_checkbox" type="checkbox" id={`product_type_${type}`} />
    <div className="product_products">
      {products.map( product => <Product {...product} key={product.id} /> )}
    </div>
  </div>

const Product = ({ id, title, image, description, affiliateLink, type }) => (
  <div className="product">
    <h2 className="product__title">
      <a href={affiliateLink} target="_blank">
        {title}
      </a>
    </h2>

    <img className="product__image" src={image.url} />

    <div className="product__content" dangerouslySetInnerHTML={createMarkupObject(description)} />
  </div>
)

const createMarkupObject = __html => ({ __html });

export default RecommendedDetail