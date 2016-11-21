import React from 'react'
import './youtube-video.scss'
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

class YoutubeVideo extends React.Component {
  static PropTypes = {
    video: React.PropTypes.array,
    active: React.PropTypes.string,
    logo: React.PropTypes.string
  }
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: []
    }
  }
  handleClick (item) {
    window.scrollTo(0, 0)
    console.log('tt', item)
    this.props.actions.getIframe(item)
  }
  render () {
    console.log(this.props.items)
    let video
    if (this.props.items) {
      video = this.props.items.map((item) => {
        const dateTime = item.snippet.publishedAt
        const formattedDT = moment(dateTime).startOf('hour').fromNow()
        return (
          <div className='item'
            onClick={() => this.handleClick(item)}
            key={item.etag} >
            <div className={(this.state.selectedIndex === item.id.videoId) && this.props.active} >
              <div className='block-style' >
                <span className='youtube-title' >{item.snippet.title}</span>
                <img src={item.snippet.thumbnails.medium.url} />
                <span className='youtube-date' >{formattedDT}</span>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <ReactCSSTransitionGroup
        className='youtube-video-list'
        transitionName='example'
        transitionEnterTimeout={1300}
        transitionLeaveTimeout={1}>
        {video}
      </ReactCSSTransitionGroup>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeVideo)