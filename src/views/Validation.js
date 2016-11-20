import React from 'react'
import ReactDOM from 'react-dom'


class Validation extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = ::this.handleChange
  }
  componentWillMount () {

  }
  handleChange (e) {
    console.log(e)
  }
  componentDidMount () {

  }
  render () {
    return (
      <div>
        <input onChange={this.handleChange} ref='input' type='text' />
        <table className='table' >
          <caption>Optional table caption.</caption>
          <thead>
          <tr>
            <th>#</th>
            <th>dsfse</th>
            <th>Lsdfsfme</th>
            <th>Usedsffse</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope='row' >1</th>
            <td>Mardfssfk</td>
            <td>Ottdfsfo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope='row' >2</th>
            <td>Jacdfffdob</td>
            <td>Thornton</td>
            <td>@ffffat</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Validation
