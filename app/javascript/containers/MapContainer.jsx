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

  const options = {
    closeBoxURL: ``,
    enableEventPropagation: true,
    pixelOffset: new google.maps.Size(-100, -64)
  }

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: lat, lng: lon }}
    >
      {isMarkerShown && whereToGo.filter( (place) => { return place.contentTypeId === 'place' }).map( ( place ) => {
        const { location, title } = place
        const { lat, lon } = location

        return (
          <InfoBox
          key={place.id}
          defaultPosition={{ lat, lng: lon }}
          defaultPosition={new google.maps.LatLng(lat, lon)}
          options={options}
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
          <InfoBox
          key={place.id}
          defaultPosition={{ lat, lng: lon }}
          defaultPosition={new google.maps.LatLng(lat, lon)}
          options={options}
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
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(MapContainer))



// <Marker key={idx} position={{ lat, lng: lon }} title={title}>
//   <InfoBox>
//     <p>This is a test</p>
//   </InfoBox>
// </Marker>