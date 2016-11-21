import React from 'react'
import './youtube-iframe.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment' // http://momentjs.com/
// import YoutubeVideoNav from '../components/YoutubeNav'
import actions from '../actions/youtubeActions'
// https://facebook.github.io/react/docs/animation.html
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const mapStateToProps = (state) => {
  return {
    items: state.Video.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


class YotubeIframe extends React.Component {
  constructor (props) {
    super(props)
  }
  static PropTypes = {
    img: React.PropTypes.string,
    windowWidth: React.PropTypes.number,
    windowHeight: React.PropTypes.number,
    video: React.PropTypes.string,
    display: React.PropTypes.string,
    date: React.PropTypes.string,
    loader: React.PropTypes.bool
  }
  render () {
    const { img, windowWidth, windowHeight, video, display, date } = this.props
    return (
      <div className='video-block block-style' >
        <iframe width={windowWidth}
          height={windowHeight}
          className='videoFrame'
          id='videoFrame'
          src={video}
          frameBorder='0' allowFullScreen='allowFullScreen' scrolling='no'
        />

      </div>
    )
  }
}

export default Video
