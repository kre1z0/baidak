import React from 'react'
import './image-gallery.scss'
import ImageGallery from 'react-image-gallery' // https://github.com/xiaolin/react-image-gallery

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/'

class Images extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showIndex: true,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: false,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideInterval: 2000,
      showVideo: {}
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval) {
      // refresh setInterval
      this._imageGallery.pause()
      this._imageGallery.play()
    }
  }

  _onImageClick (event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex())
  }

  _onImageLoad (event) {
    // console.debug('loaded image', event.target.src)
  }

  _onSlide (index) {
    this._resetVideo()
    console.debug('slid to index', index)
  }

  _onPause (index) {
    console.debug('paused on index', index)
  }

  _onScreenChange (fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement)
  }

  _onPlay (index) {
    console.debug('playing from index', index)
  }

  _handleInputChange (state, event) {
    this.setState({ [state]: event.target.value })
  }

  _handleCheckboxChange (state, event) {
    this.setState({ [state]: event.target.checked })
  }

  _getStaticImages () {
    let images = []
    for (let i = 3; i < 12; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`
      })
    }

    return images
  }

  _resetVideo () {
    this.setState({ showVideo: {} })

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true })
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true })
    }
  }

  _toggleShowVideo (url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url])
    this.setState({
      showVideo: this.state.showVideo
    })

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false })
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false })
      }
    }
  }

  _renderVideo (item) {
    return (
      <div className='image-gallery-image' >
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper' >
              <a
                className='close-video'
                onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
              >
              </a>
              <iframe
                width='560'
                height='315'
                src={item.embedUrl}
                frameBorder='0'
                allowFullScreen
              >
              </iframe>
            </div>
            :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)} >
              <div className='play-button' ></div>
              <img src={item.original} />
            </a>
        }
      </div>
    )
  }

  render () {
    const images = [
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails'
      },
      {
        original: `${PREFIX_URL}2.jpg`,
        thumbnail: `${PREFIX_URL}2t.jpg`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing...'
      },
      {
        thumbnail: `${PREFIX_URL}3v.jpg`,
        original: `${PREFIX_URL}3v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/iNJdPyoqt8U?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this)
      },
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this)
      }
    ].concat(this._getStaticImages())

    return (

      <section className='app' >
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}
        />
      </section>
    )
  }
}

export default Images
