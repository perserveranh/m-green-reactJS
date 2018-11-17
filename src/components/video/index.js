import React from 'react';
import ReactPlayer from 'react-player'
import '../../css/video.css';

export const Video = () => {
  const setting = {
    playing: true,
    controls: true,
    width: '90%',
    height: '698px',
    volume: 0,
  }
  return (
    <div className='player-wrapper'>

      <ReactPlayer
        url='https://youtu.be/G_SlgEPH9Gc?'
        {...setting} style={{ cursor: 'pointer', position: 'relative' }}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          },
          facebook: {
            appId: '12345'
          }
        }}
        className='react-player'
      />
    </div>
  );
};

export default Video;