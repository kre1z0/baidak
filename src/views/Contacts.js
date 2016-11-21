import React from 'react'
import Map from '../components/GoogleMap'

class Contacts extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Контакты</h1>
        <ul>
          <li>sadsad</li>
          <li>sdad</li>
          <li>sdad</li>
          <li>sdasd</li>
        </ul>
        <p>(ЦЕНТРАЛЬНИЙ ВХІД ЮНАЦЬКОЇ БІБЛІОТЕКИ)</p>
        <img src='./images/library.jpg' alt='office' />
        <Map />
      </div>
    )
  }
}

export default Contacts
