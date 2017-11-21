import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"

const infoBoxStyles = {
  alignItems: 'center',
  backgroundColor: 'white',
  borderColor: 'black',
  borderRadius: '100px',
  borderStyle: 'solid',
  borderWidth: '4px',
  boxSizing: 'border-box',
  color: 'black',
  display: 'flex',
  fontSize: '16px',
  fontWeight: 'bold',
  height: '3em',
  justifyContent: 'center',
  lineHeight: '1',
  padding: '0 1em',
  textAlign: 'center',
  width: '200px'
}

const MapContainer = ({isMarkerShown, whereToGo, coordinates}) => {
  const { lat, lon } = coordinates

  const googleMapOptions = {
    draggable: true,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "all",
        "stylers": [
          { "saturation": "-100" }
        ]
      }
    ]
  }

  const infoBoxOptions = {
    closeBoxURL: ``,
    enableEventPropagation: true,
    pixelOffset: new google.maps.Size(-100, -64)
  }

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: lat, lng: lon }}
      options={googleMapOptions}
    >
      {isMarkerShown && whereToGo.filter( (place) => { return place.contentTypeId === 'place' }).map( ( place ) => {
        const { location, title } = place
        const { lat, lon } = location

        return (
          <InfoBox
          key={place.id}
          defaultPosition={{ lat, lng: lon }}
          defaultPosition={new google.maps.LatLng(lat, lon)}
          options={infoBoxOptions}
          >
            <div>
              <div style={infoBoxStyles}>
                {title}
              </div>
              <div style={{textAlign: 'center'}}>
                <svg viewBox="0 0 22 18" width="22" height="18" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="0,0 22,0 11,18" style={{fill: 'black'}} />
                </svg>
              </div>
            </div>
          </InfoBox>
        )
      } )}
      {isMarkerShown && whereToGo.filter( (place) => { return place.contentTypeId === 'airport' }).map( ( place ) => {
        const { location, title } = place
        const { lat, lon } = location

        return (
          <Marker
            key={place.id}
            position={new google.maps.LatLng(lat, lon)}
            title={title}
            icon={{fillOpacity: 1, strokeOpacity: 0, fill: "red", path: "M7.6 65.6h2.9l4.3 11.9H12l-.7-2.2H6.8L6 77.5H3.3l4.3-11.9zm-.2 7.7h3.2L9 68.5l-1.6 4.8zM16.7 64.8h2.5v2.1h-2.5v-2.1zm0 3.7h2.5v9h-2.5v-9zM21.8 68.4h2.3l.2 1.4c.7-1.2 1.6-1.7 2.6-1.7.4 0 .8.1 1.1.2l-.4 2.3c-.3-.1-.7-.2-1.2-.2-.9 0-1.6.6-2.1 1.6v5.5h-2.5v-9.1zM32.3 80.9h-2.5V68.4H32l.2 1.1c.7-.8 1.6-1.3 2.7-1.3 2.1 0 3.5 1.6 3.5 4.7 0 3.2-1.4 4.9-3.5 4.9-1.1 0-2-.5-2.7-1.2v4.3zm1.8-5.1c1.2 0 1.8-1.2 1.8-3s-.6-2.8-1.8-2.8c-.7 0-1.3.3-1.9 1v3.9c.6.6 1.2.9 1.9.9zM44.8 68.2c2.6 0 4.6 1.9 4.6 4.7 0 3-1.8 4.9-4.6 4.9s-4.6-1.9-4.6-4.9c0-2.9 2-4.7 4.6-4.7zm0 7.6c1.3 0 2-1.2 2-3 0-1.7-.8-2.8-2-2.8-1.3 0-2.1 1.1-2.1 2.8 0 1.9.7 3 2.1 3zM51.5 68.4h2.3l.2 1.4c.7-1.2 1.6-1.7 2.6-1.7.4 0 .8.1 1.1.2l-.4 2.3c-.3-.1-.7-.2-1.2-.2-.9 0-1.6.6-2.1 1.6v5.5h-2.5v-9.1zM60.2 70.1h-1.4v-1.8h1.4V66h2.5v2.3h2.5v1.8h-2.5v4.5c0 .7.3 1 .8 1s.9-.2 1.2-.4l.9 1.5c-.7.5-1.7.9-2.7.9-1.9 0-2.8-.9-2.8-3v-4.5zM47.6 34.4V31c0-.7-.6-1.3-1.3-1.3S45 30.3 45 31v1.8L38.8 29V16.5c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5V29l-6.2 3.8V31c0-.7-.6-1.3-1.3-1.3S23 30.3 23 31v3.4l-11.1 6.8v4l20-4.2v12.7l-5.2 3.8v3l8.7-3.1 8.7 3.1v-3l-5.2-3.8V41l19.9 4.2v-4l-11.2-6.8z"}}
            fill="red"
          />
        )
      } )}
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(MapContainer))



// <Marker key={idx} position={{ lat, lng: lon }} title={title}>
//   <InfoBox>
//     <p>This is a test</p>
//   </InfoBox>
// </Marker>