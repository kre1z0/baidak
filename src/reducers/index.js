import { combineReducers } from 'redux'
import Sorting from './Sorting'

const rootReducer = combineReducers({
  tableState: Sorting
})

export default rootReducer
