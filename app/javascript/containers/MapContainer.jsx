import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapContainer = (props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 37.76388225, lng: -122.331969750000015 }}
  >
    {props.isMarkerShown && props.whereToGo.map( ( place, idx ) => {
      console.log(place.location.lat)
      console.log(place.location.lon)
      const { location, title } = place
      const { lat, lon } = location
      console.log({ lat, lon })
      return <Marker key={idx} position={{ lat, lng: lon }} title={title} />
    } )}
  </GoogleMap>

export default withScriptjs(withGoogleMap(MapContainer))