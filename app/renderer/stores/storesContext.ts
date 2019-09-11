import * as React from 'react'

import PlaylistStore from './playlistStore'
import PlayerStore from './playerStore'

const StoresContext = React.createContext({
  PlaylistStore,
  PlayerStore
})

export default StoresContext
