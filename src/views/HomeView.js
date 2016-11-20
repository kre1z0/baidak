import React from 'react'
import Images from '../components/react-image-gallery/ImgGallery'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = ::this.handleChange
  }
  handleChange (e) {
    console.log(e)
  }

  render () {
    return (
      <div>
        <Images />
      </div>
    )
  }
}

export default HomeView
