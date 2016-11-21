import * as types from '../constants/Youtube'
import axios from 'axios' // https://github.com/mzabriskie/axios

const actions = {
  getYoutube: () => {
    const url = './json/youtube.json'
    return dispatch =>
      axios.get(url)
        .then((response) => {
          let videos = getUrl(response.data)
          Promise.all(videos).then((videos) => {
            return dispatch ({
              type: types.GET_YOUTUBE,
              videos: videos
            })
          })
        })
        .catch((error) => {
          console.log(error)
        })
  },
  getItems: (videos) => {
    return (dispatch) => {
      dispatch(
        {
          type: types.GET_VIDEOS,
          items: videos
        }
      )
    }
  },
  getIframe: (item) => {
    return (dispatch) => {
      dispatch(
        {
          type: types.GET_IFRAME,
          iframe: item
        }
      )
    }
  }
}

export default actions



function getUrl (json) {
  return json.map((item) => {
    const name = item.name
    const title = item.title
    const channelName = item.id
    const channelId = item.youtubeId
    if (channelName) {
      const url = 'https://www.googleapis.com/youtube/v3/channels?' +
        'part=snippet&' +
        'forUsername=' + channelName + '&' +
        'key=AIzaSyB857qDfoTXwdCBaIFDqxEUD3j2W_hCMVg'
      return getId(url, name, title)
    } else {
      const url = 'https://www.googleapis.com/youtube/v3/channels?' +
        'part=snippet&' +
        'id=' + channelId + '&' +
        'key=AIzaSyB857qDfoTXwdCBaIFDqxEUD3j2W_hCMVg'
      return getId(url, name, title)
    }
  })
}

function getId (url, name, title) {
  return axios.get(url)
    .then((response) => {
      const channelLogo = response.data.items[0].snippet.thumbnails.default.url
      const channelId = response.data.items[0].id

      return getVideos(channelId, channelLogo, name, title)
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
}

function getVideos (channelId, channelLogo, name, title) {
  const maxResults = 22
  const url = 'https://www.googleapis.com/youtube/v3/search?' +
    'maxResults=' + maxResults + '&' +
    'part=snippet&' +
    'channelId=' + channelId + '&' +
    'order=date&' +
    'key=AIzaSyB857qDfoTXwdCBaIFDqxEUD3j2W_hCMVg'
  return axios.get(url)
    .then((json) => {

      let videos = json.data

       let obj = {
         logo: channelLogo,
         name: name,
         title: title
      }

      return Object.assign(videos, obj)

    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
}

