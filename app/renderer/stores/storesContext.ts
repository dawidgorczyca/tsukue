import * as React from 'react'

import PlaylistStore from './playlistStore'

const StoresContext = React.createContext({
  PlaylistStore,
})

export default StoresContext
