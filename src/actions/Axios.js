import axios from 'axios' // https://github.com/mzabriskie/axios
import * as types from '../constants/sorting'
import store from '../store/configureStore'


function getDota () {

  return (dispatch) => {
    return axios.get('https://api.twitch.tv/kraken/search/streams?q=dota2&limit=10', {
      headers: {
        'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t'
      }
    }).then((res) => res.json())
      .then((response) => {
      console.log(response)
        dispatch(response)
      })
      .catch((err) => {
        // dispatch(err)
      })
  }
}

export function fetchData () {
  return dispatch => fetch('https://api.twitch.tv/kraken/search/streams?q=dota2&limit=10', {
    headers: {
      'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t'
    }
  }).then(response => response.json())
    .then((json) => {
      return dispatch(json)
    })
    .catch(error => dispatch(error))
}

// export function ggwp () {
//
//   function getDota() {
//     return axios.get('https://api.twitch.tv/kraken/search/streams?q=dota2&limit=10', {
//       headers: {
//         'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t'
//       }
//     })
//   }
//
//   function getCS() {
//     return axios.get('https://api.twitch.tv/kraken/search/streams?q=Counter-Strike:%20Global%20Offensive&limit=10', {
//       headers: {
//         'Client-ID': 'pwv7i6ch787xuonmdgskoi2b3vrfa0t'
//       }
//     })
//   }
//   function sortByNumber (a, b) {
//     if (a > b) {
//       return -1;
//     }
//     if (a < b) {
//       return 1;
//     }
//     return 0
//   }
//   axios.all([getDota(), getCS()])
//     .then(axios.spread(function (dota, cs) {
//       let streamers = dota.data.streams.concat(cs.data.streams)
//       streamers.sort(sortByNumber)
//       store.dispatch({
//         type: types.SORTING_GET_STREAMERS,
//         streamers: streamers
//       })
//     }))
// }
