import * as React from 'react'

import IpcService from '../services/Ipc.service'

import PlayerComponent from '../components/PlayerComponent'
import PlaylistComponent from '../components/PlaylistComponent'
import WindowBarComponent from '../components/WindowBarComponent'
import AddSongComponent from '../components/AddSongComponent'

import '../styles/main.scss'

const electron = window.require('electron')

const RootComponent = () => {
  const [currentSong, setCurrentSong] = React.useState()

  React.useEffect(() => {
    IpcService.registerEvents()
  }, [])

  return (
    <div className='app'>
      <WindowBarComponent />
      <PlayerComponent />
      <PlaylistComponent />
      <AddSongComponent />
    </div>
  )
}

export default RootComponent
