const electron = window.require('electron')

import PlayerStore from '../stores/playerStore'

class IpcService {
  public registerEvents() {
    electron.ipcRenderer.on('file/readSong/reply', (event: any, res: any) => {
      PlayerStore.setSongData(undefined)
      PlayerStore.setSongData(res)
    })
  }

  public sendEvent(topic, payload) {
    electron.ipcRenderer.send(topic, payload)
  }
}

const instance = new IpcService()

export default instance
