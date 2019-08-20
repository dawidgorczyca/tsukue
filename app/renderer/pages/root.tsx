import * as React from 'react'
import { Link } from 'react-router-dom'

import PlaylistComponent from '../components/PlaylistComponent'

const PlaylistItemsMocked = [
  {
    trackId: 1,
    artist: 'Thom Yorke',
    title: 'Black Swan',
    trackLength: '3:45',
  },
  {
    trackId: 2,
    artist: 'Radiohead',
    title: 'Karma Police',
    trackLength: '3:29',
  },
  {
    trackId: 3,
    filename: 'RATM - Killing In The Name Of',
    trackLength: '4:46',
  },
]

const RootComponent = () => {
  const handlePlaylistItem = (trackId: string | number) => {
    const track = trackId
  }

  return (
    <div>
      <PlaylistComponent items={PlaylistItemsMocked} handleItem={handlePlaylistItem} />
    </div>
  )
}

export default RootComponent
