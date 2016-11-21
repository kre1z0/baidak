import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/youtubeActions'
import YoutubeList from '../components/YoutubeList'
import YoutubeVideo from '../components/YoutubeVideo'

const mapStateToVideoProps = (state) => {
  return {
    videos: state.Video.videos
  }
}

const mapDispatchToVideoProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class Video extends React.Component {
  componentDidMount () {
    this.props.actions.getYoutube()
  }

  render () {
    console.log(this.props.videos)
    return (
      <div>
        <h1>Video</h1>
        <YoutubeList/>
        <YoutubeVideo/>
      </div>
    )
  }
}

export default connect(mapStateToVideoProps, mapDispatchToVideoProps)(Video)
