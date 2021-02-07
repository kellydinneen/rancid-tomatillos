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

  checkRes(response) {
    if (!response.ok) {
      this.setState({errorMsg: `${response.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`})
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}/videos`)
      .then(res => {
        this.checkRes(res)
        return res.json()})
      .then(result =>
        this.setState({
          videoKey: result.videos[0].key
        }))
      .catch(error => console.log(error))
  }

  onReady(event) {
    event.target.pauseVideo();
  }

  toggleTrailerBtn() {
    let viewTrailerBtn = document.querySelector('.viewTrailerBtn');
    if (viewTrailerBtn.style.display === 'none') {
      viewTrailerBtn.style.display = 'inline-block'
    } else {
      viewTrailerBtn.style.display = 'none'
    }
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };

    const { errorMsg } = this.state;

    if(errorMsg) {
      return <p className='trailer'>{errorMsg}</p>
    }

    return (
      <div className='trailer'>
        <YouTube className='vid'
        videoId={this.state.videoKey}
        opts={opts}
        onReady={this.onReady}
        onPlay={this.toggleTrailerBtn}
        onPause={this.toggleTrailerBtn}
        />
      </div>
    )
  }
}

export default Trailer;
