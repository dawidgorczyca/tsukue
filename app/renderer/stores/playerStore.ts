import { observable, computed } from 'mobx'
import InterfacePlaylistItem from '../interfaces/InterfacePlaylistItem'

class PlayerStore {
  @observable public playbackStatus = false
  @observable public currentPosition = '0:00'

  @computed get currentStatus() {
    let output = 'idle'

    if (this.playbackStatus) {
      output = 'playing'
    }

    if (!this.playbackStatus && this.currentPosition !== '0:00') {
      output = 'paused'
    }

    return output
  }
}

export default new PlayerStore()
