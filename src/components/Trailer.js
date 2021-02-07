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
      return <p>{errorMsg}</p>
    }

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
