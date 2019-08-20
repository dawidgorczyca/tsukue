import * as React from 'react'

import InterfacePlaylist from '../interfaces/InterfacePlaylist'

const PlaylistComponent = ({ items, handleItem }: InterfacePlaylist) => {
  const handleItems = () =>
    items.map((item) => {
      const { filename, title, artist, trackLength, trackId } = item

      let element = (
        <li key={trackId} onClick={() => handleItem(trackId)}>
          <span className='playlist-item__filename'>{filename}</span>
          <span className='playlist-item__track-length'>{trackLength}</span>
        </li>
      )

      if (artist || title) {
        element = (
          <li key={trackId} onClick={() => handleItem(trackId)}>
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

export default PlaylistComponent
