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
      <div className='container' >
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default CoreLayout
