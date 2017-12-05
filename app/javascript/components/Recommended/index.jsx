import React from 'react'
import MapContainer from '../../containers/MapContainer'

import styles from './recommended.css'

const Recommended = ({
  intro,
  mapIllustration,
  bottomIntro,
  destinationsComingSoon,
  destinationsPresentPast,
  bottomOutro
}) => {

  const coordinates = {
    lat: 37.7154115,
    lon: -122.3156594
  }

  return (
    <div className="recommended-landing-page">
      <div className="intro">
        {intro}
      </div>

      <img className="map-illusration" src={mapIllustration.url} />

      {/* {<div className="map-container">
        {coordinates && <MapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0sfdV9YRi7xlGTu2wWal0fKLWInIQ6ME&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `550px` }} />}
          containerElement={<div style={{ height: `auto` }} />}
          mapElement={<div style={{ height: `550px` }} />}
          defaultZoom={4}
          coordinates={coordinates}
        />}
      </div>} */}

      <div className="bottom">
        <div className="bottom-intro caps">
          {bottomIntro}
        </div>
        <nav className="destinations-links">
          {destinationsPresentPast && destinationsPresentPast.map( (destination) => <Destination {...destination} key={destination.id} /> )}
          {destinationsComingSoon && destinationsComingSoon.map( (destination) => <Destination {...destination} key={destination.id} /> )}
        </nav>
        <div className="bottom-outro caps">
          {bottomOutro}
        </div>
      </div>
    </div>
  )
}

const Destination = ({title, slug}) => {
  return (
    <a href={`/recommended/${slug}`}>{title}</a>
  )
}

export default Recommended