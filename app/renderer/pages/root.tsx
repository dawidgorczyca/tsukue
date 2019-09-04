import * as React from 'react'

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
  electron.ipcRenderer.send('ipc-event', 'ping')

  electron.ipcRenderer.on('ipc-event-reply', (event: any, res: any) => {
    console.log(res)
  })
  return (
    <div className='app'>
      <WindowBarComponent />
      <PlayerComponent {...PlaylistItemsMocked[1]} currentPosition='0:00' />
      <PlaylistComponent items={PlaylistItemsMocked} />
      <input type='file' onChange={(e) => console.log(e.target.files)} />
    </div>
  )
}

export default RootComponent
