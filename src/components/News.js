import React from 'react'

class NewsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: []
    }
  }
  componentWillMount () {

  }
  static propTypes = {
    youtubeChannelsList: React.PropTypes.array
  }

  render () {
    return (
      <div className='news-list' >
        <ul>

        </ul>
      </div>
    )
  }
}

export default NewsList
