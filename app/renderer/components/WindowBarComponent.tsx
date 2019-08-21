import * as React from 'react'
import { Icon } from '@blueprintjs/core'

const remote = window.require('electron').remote

const iconSize = 14

const WindowBarComponent = () => {
  const [windowState, setWindowsState] = React.useState(true)

  const handleClose = () => {
    remote.BrowserWindow.getFocusedWindow().close()
  }

  const handleMin = () => {
    remote.BrowserWindow.getFocusedWindow().minimize()
  }

  const handleMinMax = () => {
    const currentWindow = remote.BrowserWindow.getFocusedWindow()
    const isMaximized = currentWindow.isMaximized()

    isMaximized ? currentWindow.unmaximize() : currentWindow.maximize()
    setWindowsState(isMaximized)
  }

  return (
    <div className='window-bar'>
      <h1>Leonin - Simple Music</h1>

      <span className='window-bar__menu'>
        <Icon icon='minus' color='#fff' iconSize={iconSize} onClick={() => handleMin()} />
        <Icon
          icon={windowState ? 'maximize' : 'minimize'}
          color='#fff'
          iconSize={iconSize}
          onClick={() => handleMinMax()}
        />
        <Icon icon='power' color='#fff' iconSize={iconSize} onClick={() => handleClose()} />
      </span>
    </div>
  )
}

export default WindowBarComponent
