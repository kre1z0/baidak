import * as types from '../constants/Youtube'

function Sorting (state = {}, action) {
  switch (action.type) {
    case types.GET_YOUTUBE:
      return {
        ...state,
        videos: action.videos
      }
    case types.GET_VIDEOS:
      return {
        ...state,
        items: action.items
      }
    case types.GET_IFRAME:
      return {
        ...state,
        iframe: action.iframe
      }
    default:
      return state
  }
}

export default Sorting
