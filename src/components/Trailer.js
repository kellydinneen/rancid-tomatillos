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
        videoId='NqLl-b-PhLo'
        opts={opts}
        onPlay={this.playVideo}
        />
      </div>
    )
  }

}

export default Trailer;
