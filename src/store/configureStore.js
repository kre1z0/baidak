import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
const logger = createLogger()
import thunk from 'redux-thunk' // https://github.com/gaearon/redux-thunk

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)

const store = createStore(rootReducer, createStoreWithMiddleware)

export default store
