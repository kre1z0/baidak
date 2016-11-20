import * as types from '../constants/sorting'
import 'isomorphic-fetch'
import axios from 'axios' // https://github.com/mzabriskie/axios

const actions = {
  getStreamers: () => {
    return dispatch => axios.all([getDota(), getCS()])
      .then(axios.spread(function (dota, cs) {

        let streamers = dota.data.streams.concat(cs.data.streams)

        streamers.sort(sortByNumber)

        return dispatch({
          type: types.SORTING_GET_STREAMERS,
          state: streamers,
          sort: streamers
        })
      }))
  },
  getSort: (sort) => {
    return {
      type: types.SET_SORT_STREAM,
      sort: sort
    }
  }
}

export default actions

function getDota () {
  return axios.get('https://api.twitch.tv/kraken/search/streams?q=dota2&limit=10', {
    headers: {
      'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t'
    }
  })
}

function getCS () {
  return axios.get('https://api.twitch.tv/kraken/search/streams?q=Counter-Strike:%20Global%20Offensive&limit=10', {
    headers: {
      'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t'
    }
  })
}
function sortByNumber (a, b) {
  if (a.viewers > b.viewers) {
    return -1
  }
  if (a.viewers < b.viewers) {
    return 1
  }
  return 0
}
