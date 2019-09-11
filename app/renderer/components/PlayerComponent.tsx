import * as React from 'react'
import { observer } from 'mobx-react'
import { Icon } from '@blueprintjs/core'

import StoresContext from '../stores/storesContext'

const iconSize = 20

const PlayerComponent = ({ currentPosition }) => {
  const { PlaylistStore, PlayerStore } = React.useContext(StoresContext)
  const { selected } = PlaylistStore
  const { filename, trackLength, title, artist } = selected
  const { songData } = PlayerStore

  console.log(songData)

  // tslint:disable: jsx-no-multiline-js
  return (
    <div className='player'>
      {songData ? (
        <audio controls>
          <source src={songData} type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
      ) : ''}
      <div className='player__info-screen'>{artist && title ? `${artist} - ${title}` : filename}</div>
      <div className='player__timeline'>
        {currentPosition} / {trackLength}
      </div>
      <div className='player__menu'>
        <Icon icon='step-backward' color='#fff' iconSize={iconSize} />
        <Icon icon='play' color='#fff' iconSize={iconSize} />
        <Icon icon='step-forward' color='#fff' iconSize={iconSize} />
        <Icon icon='key-tab' color='#fff' iconSize={iconSize} />
        <Icon icon='key-option' color='#fff' iconSize={iconSize} />
        <Icon icon='volume-down' color='#fff' iconSize={iconSize} />
      </div>
    </div>
  )
}

export default observer(PlayerComponent)
