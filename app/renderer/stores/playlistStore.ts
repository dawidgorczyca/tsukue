import { observable, action } from 'mobx'
import InterfacePlaylistItem from '../interfaces/InterfacePlaylistItem'

class PlaylistStore {
  @observable public selected: InterfacePlaylistItem = {
    trackId: '',
    filename: '',
    trackLength: '',
    title: '',
    artist: '',
  }

  @action.bound
  public setSelected(item: InterfacePlaylistItem) {
    this.selected = item
  }
}

export default new PlaylistStore()
