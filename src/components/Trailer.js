import React from 'react';
import './Trailer.css';
import YouTube from 'react-youtube';

class Trailer extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      movieId: props.movieInfo.id
    }
  }

  playVideo() {
   document.querySelector('.movieBackdrop').classList.add('hidden');
   document.querySelector('.trailer').style.display = 'block';
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
        videoId='HfiH_526qhY'
        opts={opts}
        onPlay={this.playVideo}
        onPause={this.pauseVideo}
        />
      </div>
    )
  }

}

export default Trailer;
