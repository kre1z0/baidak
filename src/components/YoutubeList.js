import React from 'react'
import './youtube-list.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/youtubeActions'

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

class YoutubeList extends React.Component {
  static PropTypes = {
    youtubeChannelsList: React.PropTypes.array
  }
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: []
    }
    this.handleClick = ::this.handleClick
  }
  componentDidMount () {

  }
  handleClick (item) {
    const videos = item.items
    this.setState({ selectedIndex: item.etag })
    this.props.actions.getItems(videos)
  }

  render () {
    let youtube
    if (this.props.videos) {
      youtube = this.props.videos.map((item) => {
        return (
          <div className={item.etag === this.state.selectedIndex ? 'youtube_list_item active' : 'youtube_list_item'}
            onClick={() => this.handleClick(item)}
            title={item.title}
            key={item.etag} >
            <img src={item.logo} alt='' />
            {item.name}
          </div>
        )
      })
    }
    return (
      <div className='youtube_list' >
        {youtube}
      </div>
    )
  }
}

export default connect(mapStateToVideoProps, mapDispatchToVideoProps)(YoutubeList)

