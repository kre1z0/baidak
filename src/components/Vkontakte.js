import React from 'react'

class Vkontakte extends React.Component {
  componentDidMount () {
    const vkontakte = document.head
    const script = document.createElement('script')
    script.src = '//vk.com/js/api/openapi.js?136'
    vkontakte.appendChild(script)
    window.onload = function() {
      VK.Widgets.Group('vk_groups', { mode: 3, width: '220', color3: '337AB7' }, 66217557)
    }
  }
  render () {
    return (
      <div className='vk_groups' id='vk_groups' />
    )
  }
}

export default Vkontakte
