import React from 'react'
import GoogleMap from 'google-map-react' // https://github.com/istarkov/google-map-react
import './googlemap.scss'

const K_WIDTH = 88;
const K_HEIGHT = 88;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  border: '3px solid #337ab7',
  borderRadius: K_HEIGHT,
  backgroundColor: 'transparent',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
}

class MyGreatPlace extends React.Component {
  render () {
    return (
      <div style={greatPlaceStyle} >

      </div>
    )
  }
}

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      center: {
        lat: 49.423996,
        lng: 26.981389
      },
      zoom: 18
    }
  }

  render () {
    const API_KEY = 'AIzaSyBNA_HiZUyeLxKM_sxDkl3qMyF_-PE909Y'
    return (
      <div className='google_map' >
        <GoogleMap
          bootstrapURLKeys={{
            key: API_KEY,
            language: 'ru'
          }}
          center={this.state.center}
          zoom={this.state.zoom} >
          <MyGreatPlace lat={49.423996} lng={26.981389} />
        </GoogleMap>
      </div>
    )
  }
}

export default Map
