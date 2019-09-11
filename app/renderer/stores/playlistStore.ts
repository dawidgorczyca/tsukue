import { observable, action } from 'mobx'

import InterfacePlaylistItem from '../interfaces/InterfacePlaylistItem'

import IpcService from '../services/Ipc.service'

class PlaylistStore {
  @observable public selected: InterfacePlaylistItem = {
    trackId: '',
    filename: '',
    trackLength: '',
    title: '',
    artist: '',
  }
  @observable public items: any[] = []

  @action.bound
  public setSelected(item: InterfacePlaylistItem) {
    this.selected = item
  }

  @action.bound
  public addSong(song: { name: string; path: string }) {
    this.items.push(song)
  }
}

export default new PlaylistStore()
