import React from 'react';
import './Trailer.css';
import YouTube from 'react-youtube';

class Trailer extends React.Component {

  playVideo() {
    let backdrop = document.querySelector('.movieBackdrop');
    backdrop.classList.add('hidden');
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <div className="trailer">
        <YouTube
        videoId='ct5mQYE3Xk4'
        opts={opts}
        onPlay={this.playVideo}
        />
      </div>
    )
  }

}

export default Trailer;
