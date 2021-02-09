import React, { Component } from 'react';
import './MovieDetails.css';
import Trailer from './Trailer';
import { fetchSpecificMovieDetails } from '../apiCalls'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.location.state.movie.id,
      movie: {},
      isLoading: true,
      errorMsg: null
    }
  }

  componentDidMount() {
    fetchSpecificMovieDetails(this.state.id)
      .then(result => {
          if (!result.movie) {
            this.setState({
              isLoading: false,
              errorMsg: result
            })
          } else {
            this.setState({
              movie: result.movie,
              isLoading: false,
            })
          }
        })
  }

  showHideTrailer() {
    let backdrop = document.querySelector('.movieBackdrop');
    let trailer = document.querySelector('.trailer');
    let trailerButton = document.querySelector('.viewTrailerBtn');
    if (!backdrop.classList.contains('hidden')) {
      backdrop.classList.add('hidden');
      trailer.style.display = 'block';
      trailerButton.innerText='View Poster';
    } else {
      backdrop.classList.remove('hidden');
      trailer.style.display = 'none';
      trailerButton.innerText='View Trailer';
    }
  }

  render() {
    const {movie, isLoading, errorMsg} = this.state;

    if(errorMsg) {
      return <p className='error-message'>{errorMsg}</p>
    }

    if(isLoading) {
      return <p className='loading-message'>Loading...</p>
    }

    return (
      <main>
        <div className='trailerContainer'>
          <img src={movie.backdrop_path} alt={movie.title} className='movieBackdrop'/>
          <Trailer movieInfo={this.state}/>
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
