import * as React from 'react'

import PlayerComponent from '../components/PlayerComponent'
import PlaylistComponent from '../components/PlaylistComponent'
import WindowBarComponent from '../components/WindowBarComponent'

import '../styles/main.scss'

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
    <div className='app'>
      <WindowBarComponent/>
      <PlayerComponent
        title='C.R.E.A.M'
        artist='Wu-Tang Clan'
        trackLength='3:34'
        id='4'
        currentPosition='0:00'
        filename='WuTangClan - C.R.E.A.M..mp3'
      />
      <PlaylistComponent items={PlaylistItemsMocked} handleItem={handlePlaylistItem} />
    </div>
  )
}

export default RootComponent
