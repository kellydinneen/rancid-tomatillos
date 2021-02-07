import React, { Component } from 'react';
import './MovieDetails.css';
import Trailer from './Trailer';

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

  checkRes(response) {
    if (!response.ok) {
      this.setState({errorMsg: `${response.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`})
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(res => {
        this.checkRes(res)
        return res.json()})
      .then(result =>
        this.setState({
          movie: result.movie,
          isLoading: false,
        }))
      .catch(error => console.log(error))
  }

  render() {
    const {movie, isLoading, errorMsg} = this.state;

    if(errorMsg) {
      return <p>{errorMsg}</p>
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
      </main>
    )
  }
}

export default MovieDetails;
