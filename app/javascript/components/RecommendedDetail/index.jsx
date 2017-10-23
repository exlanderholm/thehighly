import React from 'react'
import PropTypes from 'prop-types'
import MapContainer from '../../containers/MapContainer'

import styles from './recommended-detail.css'

const RecommendedDetail = ({title}) => {
  return (
    <div className="recommended-detail">
      {title}
      <MapContainer
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0sfdV9YRi7xlGTu2wWal0fKLWInIQ6ME&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `50vw` }} />}
        containerElement={<div style={{ height: `50vw` }} />}
        mapElement={<div style={{ height: `50vw` }} />}
      />
      <p>Delivery Info Coming Soon.</p>
    </div>
  )
}

export default RecommendedDetail