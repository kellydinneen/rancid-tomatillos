import React, { Component } from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.location.state.movie.id,
      movie: {},
      isLoading: true,
      error: null
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({ movie: data.movie, isLoading: false }))
      .catch(error =>
        this.setState(error))
  }

  render() {
    const {movie, isLoading, error} = this.state;

    if(error) {
      return <p>{error.message}</p>
    }

    if(isLoading) {
      return <p className='loading-message'>Loading...</p>
    }

    return (
      <div>
        <img src={movie.backdrop_path} alt={movie.title} className='movieBackdrop'/>
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
      </div>
    )
  }
}

export default MovieDetails;
