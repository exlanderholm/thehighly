import React from 'react'
import PropTypes from 'prop-types'
import MapContainer from '../../containers/MapContainer'

import styles from './recommended-detail.css'

const RecommendedDetail = ({title, excerpt, whereToGo, whatToGet}) => {
  return (
    <div className="recommended-detail">
      <div className="recommended-detail__top">
        <h1 className="title">{title}</h1>
        <div className="recommended-detail__excerpt" dangerouslySetInnerHTML={createMarkupObject(excerpt)} />
      </div>
      <div className="map-container">
        <MapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0sfdV9YRi7xlGTu2wWal0fKLWInIQ6ME&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `50vw` }} />}
          containerElement={<div style={{ height: `50vw` }} />}
          mapElement={<div style={{ height: `50vw` }} />}
        />
      </div>

      <p className="notice">Delivery Info Coming Soon. ~~Bicycle~~</p>

      <div className="where-to-go">
        <h4 className="caps">Where to Go</h4>
        {whereToGo.map( place => <Place {...place} key={place.id} /> )}
      </div>

      <div className="what-to-get">
      <h4 className="caps">What To Get</h4>
        {whatToGet.map( product => <Product {...product} key={product.id} /> )}
      </div>
    </div>
  )
}

RecommendedDetail.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  whereToGo: PropTypes.array,
  whatToGet: PropTypes.array
}

RecommendedDetail.defaultProps = {
  title: '',
  excerpt: '',
  whereToGo: [],
  whatToGet: []
}

const Place = ({ id, title, description, location, website }) => (
  <div className="place">
    <ul className="place__header">
      <li><h3 className="place__title">{title}</h3></li>
      <li><a className="caps" href={website}>website</a></li>
      <li><a className="caps" target="_blank" href="/">Directions</a></li>
      <li><span className="caps">Related: <a href="/">Post Link</a></span></li>
    </ul>
    <div className="place__content" dangerouslySetInnerHTML={createMarkupObject(description)} />
  </div>
)
const Product = ({ id, title, description, type, image }) => (
  <div className="product">
    <h3 className="product__title">{title}</h3>
    <h6 className="product__type">{type}</h6>
    <div dangerouslySetInnerHTML={createMarkupObject(description)} />
    <img className="product__image" src={image.url} />
  </div>
)

const createMarkupObject = __html => ({ __html });

export default RecommendedDetail