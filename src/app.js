import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import routes from './routes'

ReactDOM.render(
  <Provider store={store} >
    {routes}
  </Provider>,
  document.getElementById('root')
)
