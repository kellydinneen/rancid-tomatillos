import React, { Component } from 'react';
import './MovieDetails.css';
import Trailer from './Trailer';
import { fetchMovieData, fetchUsers, addFavorite, deleteFavorite } from '../apiCalls'

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    const data = this.props.location.state;
    this.state = {
      id: data.movie.id,
      user: data.user,
      movie: {},
      isFavorite: data.user && data.user.favorites.some(favorite => favorite.id === data.movie.id) ? true : false,
      isLoading: true,
      errorMsg: null,
      imageShowing: true,
      trailerIsPlaying: false
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

  toggleTrailer = () => {
    if(this.state.imageShowing) {
      this.setState({ imageShowing: false })
    } else {
      this.setState({ imageShowing: true })
    }
  }

  toggleTrailerButton = () => {
    if(!this.state.trailerIsPlaying) {
      this.setState({ trailerIsPlaying: true })
    } else {
      this.setState({ trailerIsPlaying: false })
    }
  }

  alterFavorites = async (method) => {
    if(method === 'add') {
      await addFavorite(this.state.user, this.state.movie);
      this.setState({ isFavorite: true });
    } else if(method === 'remove') {
      console.log('DELETE')
      await deleteFavorite(this.state.user, this.state.movie);
      this.setState({ isFavorite: false });
    }
    const users = await fetchUsers();
    const currentUser = users.users.find(theUser => theUser.id === this.state.user.id);
    this.setState({ user: currentUser});
    this.props.logIn(this.state.user);
  }

  render() {
    const {movie, isLoading, errorMsg, imageShowing, trailerIsPlaying} = this.state;

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
          {!imageShowing && <Trailer movieInfo={this.state} toggleTrailerButton={this.toggleTrailerButton}/>}
        </div>
        <div className='featuredMovieData'>
          <h3 className='movieTitle'>{movie.title}</h3>
          <h3 className='rating'>{movie.average_rating.toFixed(1)}★</h3>
        </div>
        {(this.state.user && !this.state.isFavorite) && <button className='favorite-btn' onClick={() => this.alterFavorites('add')}>Add to Favorites</button>}
        {this.state.isFavorite && <button className='favorite-btn' onClick={() => this.alterFavorites('remove')}>Remove from Favorites</button>}
        <div className='movieData'>
          <h4 className='releaseDate'>{movie.release_date} </h4>
          <h4 className='genre'>{movie.genres.join(', ')}</h4>
          <h4 className='runtime'>{movie.runtime} minutes</h4>
        </div>
        <p className='overview'>{movie.overview}</p>
        {!trailerIsPlaying && imageShowing && <button className='viewTrailerBtn' onClick={this.toggleTrailer}>Show Trailer</button>}
        {!trailerIsPlaying && !imageShowing && <button className='viewTrailerBtn' onClick={this.toggleTrailer}>Show Image</button>}
      </main>
    )
  }
}

export default MovieDetails;
