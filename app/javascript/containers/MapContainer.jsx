import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"

const MapContainer = ({isMarkerShown, whereToGo, coordinates, defaultZoom, accentColor}) => {
  const { lat, lon } = coordinates

  const infoBoxStyles = {
    alignItems: 'center',
    backgroundColor: '#f6f1e8',
    borderColor: accentColor,
    borderRadius: '100px',
    borderStyle: 'solid',
    borderWidth: '4px',
    boxSizing: 'border-box',
    color: accentColor,
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

  const mapStyles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e8b582"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#c3ddce"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ]

  const googleMapOptions = {
    draggable: true,
    disableDefaultUI: true,
    styles: mapStyles
  }

  const infoBoxOptions = {
    closeBoxURL: ``,
    enableEventPropagation: true,
    pixelOffset: new google.maps.Size(-100, -64)
  }

  return (
    <GoogleMap
      defaultZoom={defaultZoom}
      defaultCenter={{ lat: lat, lng: lon }}
      options={googleMapOptions}
      defaultZoom={11}
    >
      {isMarkerShown && whereToGo && whereToGo.filter( (place) => { return place.contentTypeId === 'place' }).map( ( place ) => {
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
                <svg viewBox="0 0 22 18" width="22" height="18">
                  <polygon points="0,0 22,0 11,18" style={{fill: accentColor}} />
                </svg>
              </div>
            </div>
          </InfoBox>
        )
      } )}
      {isMarkerShown && whereToGo && whereToGo.filter( (place) => { return place.contentTypeId === 'airport' }).map( ( place ) => {
        const { location, title } = place
        const { lat, lon } = location

        return (
          <Marker
            key={place.id}
            position={new google.maps.LatLng(lat, lon)}
            title={title}
            icon={{fillOpacity: 1, strokeOpacity: 0, fillColor: accentColor, path: "M7.6 65.6h2.9l4.3 11.9H12l-.7-2.2H6.8L6 77.5H3.3l4.3-11.9zm-.2 7.7h3.2L9 68.5l-1.6 4.8zM16.7 64.8h2.5v2.1h-2.5v-2.1zm0 3.7h2.5v9h-2.5v-9zM21.8 68.4h2.3l.2 1.4c.7-1.2 1.6-1.7 2.6-1.7.4 0 .8.1 1.1.2l-.4 2.3c-.3-.1-.7-.2-1.2-.2-.9 0-1.6.6-2.1 1.6v5.5h-2.5v-9.1zM32.3 80.9h-2.5V68.4H32l.2 1.1c.7-.8 1.6-1.3 2.7-1.3 2.1 0 3.5 1.6 3.5 4.7 0 3.2-1.4 4.9-3.5 4.9-1.1 0-2-.5-2.7-1.2v4.3zm1.8-5.1c1.2 0 1.8-1.2 1.8-3s-.6-2.8-1.8-2.8c-.7 0-1.3.3-1.9 1v3.9c.6.6 1.2.9 1.9.9zM44.8 68.2c2.6 0 4.6 1.9 4.6 4.7 0 3-1.8 4.9-4.6 4.9s-4.6-1.9-4.6-4.9c0-2.9 2-4.7 4.6-4.7zm0 7.6c1.3 0 2-1.2 2-3 0-1.7-.8-2.8-2-2.8-1.3 0-2.1 1.1-2.1 2.8 0 1.9.7 3 2.1 3zM51.5 68.4h2.3l.2 1.4c.7-1.2 1.6-1.7 2.6-1.7.4 0 .8.1 1.1.2l-.4 2.3c-.3-.1-.7-.2-1.2-.2-.9 0-1.6.6-2.1 1.6v5.5h-2.5v-9.1zM60.2 70.1h-1.4v-1.8h1.4V66h2.5v2.3h2.5v1.8h-2.5v4.5c0 .7.3 1 .8 1s.9-.2 1.2-.4l.9 1.5c-.7.5-1.7.9-2.7.9-1.9 0-2.8-.9-2.8-3v-4.5zM47.6 34.4V31c0-.7-.6-1.3-1.3-1.3S45 30.3 45 31v1.8L38.8 29V16.5c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5V29l-6.2 3.8V31c0-.7-.6-1.3-1.3-1.3S23 30.3 23 31v3.4l-11.1 6.8v4l20-4.2v12.7l-5.2 3.8v3l8.7-3.1 8.7 3.1v-3l-5.2-3.8V41l19.9 4.2v-4l-11.2-6.8z"}}
            fill={accentColor}
          />
        )
      } )}

    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(MapContainer))
