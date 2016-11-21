import React from 'react'
import './header.scss'
// https://github.com/ReactTraining/react-router
import { Link, IndexLink } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <header className='header' >
        <nav role='navigation' >
          <ul>
            <li>
              <IndexLink to='/' className='header_logo' activeClassName='active' >
                Baidak tour
              </IndexLink>
            </li>
            <li>
              <Link to='videos' activeClassName='active' >Видео</Link>
            </li>
            <li>
              <Link to='contacts' activeClassName='active' >Контакты</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
