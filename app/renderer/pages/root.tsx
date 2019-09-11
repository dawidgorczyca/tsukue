import * as React from 'react'

import IpcService from '../services/Ipc.service'

import PlayerComponent from '../components/PlayerComponent'
import PlaylistComponent from '../components/PlaylistComponent'
import WindowBarComponent from '../components/WindowBarComponent'

import '../styles/main.scss'

const electron = window.require('electron')

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
  const [currentSong, setCurrentSong] = React.useState()

  const handleSongPath = (songPath: string) => {
    IpcService.sendEvent('file/readFile', songPath)
  }

  React.useEffect(() => {
    IpcService.registerEvents()
  }, [])

  return (
    <div className='app'>
      <WindowBarComponent />
      <PlayerComponent {...PlaylistItemsMocked[1]} currentPosition='0:00' />
      <PlaylistComponent items={PlaylistItemsMocked} />
      <input type='file' onChange={(e) => handleSongPath(e.target.files[0].path)} />
    </div>
  )
}

export default RootComponent
