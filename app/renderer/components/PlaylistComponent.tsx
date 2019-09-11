import * as React from 'react'
import { observer } from 'mobx-react'

import StoresContext from '../stores/storesContext'

const PlaylistComponent = () => {
  const { PlaylistStore } = React.useContext(StoresContext)
  const { items, setSelected } = PlaylistStore

  let count = 0
  const handleItems = () =>
    items.map((item) => {
      const { filename, title, artist, trackLength, trackId, name, path } = item

      let element = (
        <li key={count++} onClick={() => setSelected(item)}>
          <span className='playlist-item__filename'>{name}</span>
        </li>
      )

      if (artist || title) {
        element = (
          <li key={count++} onClick={() => setSelected(item)}>
            {artist ? <span className='playlist-item__artist'>{artist}</span> : ''}
            {title ? <span className='playlist-item__title'>{title}</span> : ''}
            <span className='playlist-item__track-length'>{trackLength}</span>
          </li>
        )
      }

      return element
    })

  return <ul className='playlist'>{handleItems()}</ul>
}

export default observer(PlaylistComponent)
