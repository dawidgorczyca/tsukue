// tslint:disable: no-unused-expression
import * as React from 'react'
import { observer } from 'mobx-react'
import { Icon } from '@blueprintjs/core'

import StoresContext from '../stores/storesContext'

const iconSize = 20

const PlayerComponent = () => {
  const { PlaylistStore, PlayerStore } = React.useContext(StoresContext)
  const { selected } = PlaylistStore
  const { name, path, filename, trackLength, title, artist } = selected
  const { songData } = PlayerStore

  const [playState, setPlayState] = React.useState(false)

  let audioElement: any = React.createRef()

  const handlePlay = () => {
    audioElement && audioElement.play()
  }

  const handlePause = () => {
    audioElement && audioElement.pause()
  }

  const handlePlayButton = () => {
    if (playState) {
      handlePause()
    } else {
      handlePlay()
    }
    setPlayState(!playState)
  }

  // tslint:disable: jsx-no-multiline-js
  return (
    <div className='player'>
      {songData ? (
        <audio
          className='audio-element'
          controls
          ref={(input) => {
            audioElement = input
          }}
        >
          <source src={songData} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      ) : (
        ''
      )}
      <div className='player__info-screen'>{artist && title ? `${artist} - ${title}` : name}</div>
      {/* <div className='player__timeline'>
        {currentPosition} / {trackLength}
      </div> */}
      <div className='player__menu'>
        <Icon icon='step-backward' color='#fff' iconSize={iconSize} />
        {playState ? (
          <Icon icon='pause' color='#fff' iconSize={iconSize} onClick={() => handlePlayButton()} />
        ) : (
          <Icon icon='play' color='#fff' iconSize={iconSize} onClick={() => handlePlayButton()} />
        )}
        <Icon icon='step-forward' color='#fff' iconSize={iconSize} />
        <Icon icon='key-tab' color='#fff' iconSize={iconSize} />
        <Icon icon='key-option' color='#fff' iconSize={iconSize} />
        <Icon icon='volume-down' color='#fff' iconSize={iconSize} />
      </div>
    </div>
  )
}

export default observer(PlayerComponent)
