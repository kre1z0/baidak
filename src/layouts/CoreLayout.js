import React from 'react'
import '../styles/main.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div>
        <div className='container-header' >
          <div className='container' >
            <Header />
          </div>
        </div>
        <div className='container' >
          {this.props.children}
        </div>
        <div className='container-footer' >
          <div className='container' >
            <Footer />
          </div>
        </div>
      </div>

    )
  }
}

export default CoreLayout
