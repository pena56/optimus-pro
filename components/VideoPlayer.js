import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

const VideoPlayer = ({src, poster, track}) => {
  return (
    <>
      <Video
        className="video_player"
        autoPlay
        loop
        muted
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        poster={poster}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={src} type='video/webm' />
        <track
          label='English'
          kind='subtitles'
          srcLang='en'
          src={track}
          default
        />
      </Video>
    </>
  )
}

export default VideoPlayer
