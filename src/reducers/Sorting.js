import * as types from '../constants/sorting'

function Sorting (state = {}, action) {
  switch (action.type) {
    case types.SORTING_GET_STREAMERS:
      return {
        ...state,
        state: action.state,
        sort: action.sort
      }
    case types.SET_SORT_STREAM:
      return {
        ...state,
        sort: action.sort
      }
    default:
      return state
  }
}

export default Sorting
