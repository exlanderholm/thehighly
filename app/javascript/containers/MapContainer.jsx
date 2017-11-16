import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"

const infoBoxStyles = {
  backgroundColor: 'white',
  borderColor: 'black',
  borderRadius: '100px',
  borderStyle: 'solid',
  borderWidth: '4px',
  boxSizing: 'border-box',
  color: 'black',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '1em 3px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
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
      {isMarkerShown && whereToGo.map( ( place, idx ) => {
        const { location, title } = place
        const { lat, lon } = location
        console.log({ lat, lon })
        return (
          <InfoBox
          key={idx}
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