import InterfacePlaylistItem from './InterfacePlaylistItem'

interface InterfacePlaylist {
  items: InterfacePlaylistItem[]
  handleItem: (id: string | number) => void
}

export default InterfacePlaylist
