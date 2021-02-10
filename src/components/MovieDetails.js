import React, { Component } from 'react';
import './MovieDetails.css';
import Trailer from './Trailer';
import { fetchMovieData } from '../apiCalls'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.location.state.movie.id,
      movie: {},
      isLoading: true,
      errorMsg: null,
      imageShowing: true
    }
  }

  componentDidMount() {
    fetchMovieData(`movies/${this.state.id}`)
      .then(result => {
          if (!result.movie) {
            this.setState({
              isLoading: false,
              errorMsg: result
            })
          } else {
            this.setState({
              movie: result.movie,
              isLoading: false
            })
          }
        })
  }

  showHideTrailer = () => {
    if(this.state.imageShowing) {
      this.setState({ imageShowing: false })
    } else {
      this.setState({ imageShowing: true })
    }
  }

  render() {
    const {movie, isLoading, errorMsg, imageShowing} = this.state;

    if(errorMsg) {
      return <p className='error-message'>{errorMsg}</p>
    }

    if(isLoading) {
      return <p className='loading-message'>Loading...</p>
    }

    return (
      <main>
        <div className='trailerContainer'>
          {imageShowing && <img src={movie.backdrop_path} alt={movie.title} className='movieBackdrop'/>}
          {!imageShowing && <Trailer movieInfo={this.state}/>}
        </div>
        <div className='featuredMovieData'>
          <h3 className='movieTitle'>{movie.title}</h3>
          <h3 className='rating'>{movie.average_rating.toFixed(1)}★</h3>
        </div>
        <div className='movieData'>
          <h4 className='releaseDate'>{movie.release_date} </h4>
          <h4 className='genre'>{movie.genres.join(', ')}</h4>
          <h4 className='runtime'>{movie.runtime} minutes</h4>
        </div>
        <p className='overview'>{movie.overview}</p>
        <button className='viewTrailerBtn' onClick={this.showHideTrailer}>View Trailer</button>
      </main>
    )
  }
}

export default MovieDetails;
