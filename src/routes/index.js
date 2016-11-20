import React from 'react'
// https://github.com/ReactTraining/react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import CoreLayout from '../layouts/CoreLayout'
import HomeView from '../views/HomeView'
import Sorting from '../views/Sorting'
import Validation from '../views/Validation'

export default (
  <Router history={browserHistory} >
    <Route path='/' component={CoreLayout} >
      <IndexRoute component={HomeView} />
      <Route path='sorting' component={Sorting} />
      <Route path='validation' component={Validation} />
    </Route>
  </Router>
)
