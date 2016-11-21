import React from 'react'
import '../styles/main.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }
  componentDidMount () {
    
  }
  render () {
    return (
      <div className='clearfix'>
        <div className='container-header' >
          <div className='container' >
            <Header />
          </div>
        </div>
        <div className='container main' >
          {this.props.children}
        </div>
        <div className='container-footer clearfix' >
          <div className='container' >
            <Footer />
          </div>
        </div>
      </div>

    )
  }
}

export default CoreLayout
