import React from 'react'
import PropTypes from 'prop-types'
import MapContainer from '../../containers/MapContainer'

import styles from './recommended-detail.css'

const RecommendedDetail = ({title, excerpt, whereToGo}) => {
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
        <h4>Where to Go</h4>
        {whereToGo.map( place => <Place {...place} key={place.id} /> )}
      </div>
    </div>
  )
}

RecommendedDetail.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  whereToGo: PropTypes.array
}

RecommendedDetail.defaultProps = {
  title: '',
  excerpt: '',
  whereToGo: []
}

const Place = ({ id, title, description, location, website }) => (
  <div className="place">
    <h3 className="place__title">{title}</h3>
    <div dangerouslySetInnerHTML={createMarkupObject(description)} />
    <div className="place__bottom">
      <a href={website}>website</a>
      <a target="_blank" href="/">Directions</a>
      Related: <a href="/">Post Link</a>
    </div>
  </div>
)

const createMarkupObject = __html => ({ __html });

export default RecommendedDetail