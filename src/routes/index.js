import React from 'react'
// https://github.com/ReactTraining/react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import CoreLayout from '../layouts/CoreLayout'
import Home from '../views/Home'
import Video from '../views/Video'
import Contacts from '../views/Contacts'

export default (
  <Router history={browserHistory} >
    <Route path='/' component={CoreLayout} >
      <IndexRoute component={Home} />
      <Route path='contacts' component={Contacts} />
      <Route path='videos' component={Video} />
    </Route>
  </Router>
)
