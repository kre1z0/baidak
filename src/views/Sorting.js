import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/actionCreators'

const mapStateToAppProps = (state) => {
  return {
    state: state.tableState.state,
    sort: state.tableState.sort
  }
}

const mapDispatchToAppProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class Sorting extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = ::this.handleChange
  }

  handleChange (event) {
    let searchQuery = event.target.value.toLowerCase()
    let displayedContacts = this.props.state.filter((item) => {
      let searchValue = item.channel.name.toLowerCase()
      return searchValue.indexOf(searchQuery) !== -1
    })
    this.props.actions.getSort(displayedContacts)
  }

  componentDidMount () {
    this.props.actions.getStreamers()
  }

  render () {
    let streamers
    if (this.props.sort) {
      streamers = this.props.sort.map((item, index) => {
        return (
          <tr className='body' key={item.channel.name} >
            <td>{index + 1}</td>
            <td>{item.channel.name}</td>
            <td className='status' >{item.channel.status}</td>
            <td>{item.viewers}</td>
            <td>{item.game}</td>
          </tr>

        )
      })
    }
    return (
      <div>
        <div className='col-md-4' >
          <div className='row' >
            <input className='form-control' onChange={this.handleChange} ref='input' type='text' />
          </div>
        </div>
        <table className='table' >
          <caption>Option caption.</caption>
          <thead>
          <tr>
            <th>#</th>
            <th><span className='caret' />Name</th>
            <th><span className='caret' />Status</th>
            <th><span className='caret' />Viewers</th>
            <th><span className='caret' />Game</th>
          </tr>
          </thead>
          <tbody>
          {streamers || <tr>
            <td>ggwp</td>
          </tr> }
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToAppProps, mapDispatchToAppProps)(Sorting)

