import React from 'react';
import './Trailer.css';
import YouTube from 'react-youtube';
import { fetchMovieData } from '../apiCalls';

class Trailer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: props.movieInfo.id,
      isLoading: true,
      errorMsg: null,
      videoKey: ''
    }
  }

  componentDidMount() {
    fetchMovieData(`movies/${this.state.movieId}/videos`)
      .then(result =>{
        if (!result.videos) {
          this.setState({
            isLoading: false,
            errorMsg: result
          })
        } else {
          this.setState({
            isLoading: false,
            videoKey: result.videos[0].key
          })
        }
      })
  }

  onReady(event) {
    event.target.pauseVideo();
  }

  toggleTrailerBtn = () => {
    this.props.toggleTrailerButton()
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };

    const { errorMsg, isLoading } = this.state;

    return (
      <>
      {errorMsg && <p className='error-message'>{errorMsg}</p>}
      {isLoading && <p className='loading-message'>Loading...</p>}
      {!isLoading && !errorMsg &&
      <div className='trailer'>
        <YouTube className='vid'
        videoId={this.state.videoKey}
        opts={opts}
        onReady={this.onReady}
        onPlay={this.toggleTrailerBtn}
        onPause={this.toggleTrailerBtn}
        />
      </div>}
      </>
    )
  }
}

export default Trailer;
