import React from 'react'
import './footer.scss'

class Footer extends React.Component {
  static propTypes = {}

  render () {
    return (
      <footer>
        <nav className='navbar navbar-default' >
          <div id='navbar' className='collapse navbar-collapse' >
            <ul className='nav navbar-nav' >
              <li>lorem</li>
              <li>ipsum</li>
              <li>lorem</li>
            </ul>
            <p className='text-muted' >Place sticky footer content here.</p>
            <div className='vk_groups' id='vk_groups' />
          </div>
        </nav>
      </footer>
    )
  }
}

export default Footer
