import React, { Component } from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.location.state.movie.id,
      movie: {}
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({ movie: data.movie }))
  }

  render() {
    return (
      <div>
        <img src={this.state.movie.backdrop_path} alt={this.state.movie.title} className='movieBackdrop'/>
        <h3 className='movieTitle'>{this.state.movie.title}</h3>
        <h3 className='rating'>{this.state.movie.average_rating}</h3>
        <h4 className='releaseDate'>{this.state.movie.release_date}</h4>
        <h4 className='genre'>{this.state.movie.genres}</h4>
        <h4 className='runtime'>{this.state.movie.runtime}</h4>
        <p className='overview'>{this.state.movie.overview}</p>
      </div>
    )
  }
}

export default MovieDetails;
