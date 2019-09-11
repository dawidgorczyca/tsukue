import { observable, action } from 'mobx'

import InterfacePlaylistItem from '../interfaces/InterfacePlaylistItem'

import IpcService from '../services/Ipc.service'

class PlaylistStore {
  @observable.ref public selected: InterfacePlaylistItem = {
    name: '',
    path: '',
    trackId: '',
    filename: '',
    trackLength: '',
    title: '',
    artist: '',
  }
  @observable public items: any[] = []

  @action.bound
  public setSelected(item: InterfacePlaylistItem) {
    IpcService.sendEvent('file/readSong', item.path)
    this.selected = item
  }

  @action.bound
  public addSong(song: { name: string; path: string }) {
    this.items.push({ name: song.name, path: song.path })
  }
}

export default new PlaylistStore()
