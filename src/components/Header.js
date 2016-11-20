import React from 'react'
// https://github.com/ReactTraining/react-router
import { Link, IndexLink } from 'react-router'

const MENU = [
  {
    id: 1,
    link: '/',
    name: 'Home'
  },
  {
    id: 2,
    link: 'sorting',
    name: 'sorting',
  },
  {
    id: 3,
    link: 'validation',
    name: 'validation'
  }
]

class Header extends React.Component {
  static propTypes = {}

  render () {
    return (
      <nav className='navbar navbar-default' >
        <div className='navbar-header' >
          <ul className='nav navbar-nav' >
            <li>
              <IndexLink to='/' activeClassName='active' >Home</IndexLink>
            </li>
            <li>
              <Link to='sorting' activeClassName='active' >sorting</Link>
            </li>
            <li>
              <Link to='validation' activeClassName='active' >validation</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header