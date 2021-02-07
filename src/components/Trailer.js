import React from 'react';
import './Trailer.css';
import YouTube from 'react-youtube';

class Trailer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: props.movieInfo.id,
      errorMsg: null,
      videoKey: ''
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}/videos`)
      .then(res => {
        return res.json()})
      .then(result =>
        this.setState({
          videoKey: result.videos[0].key
        }))
      .catch(error => console.log(error))
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
        videoId={this.state.videoKey}
        opts={opts}
        onPlay={this.playVideo}
        onPause={this.pauseVideo}
        />
      </div>
    )
  }

}

export default Trailer;
