import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user ? this.props.user.name : '',
      favorites: this.props.user ? this.props.user.favorites : []
    }
  }

  render() {
    const {name, favorites} = this.state;

    const favoriteDisplay = favorites.map(movie => {
      return <Link className='link-to-favorite' to={{
          pathname: `/movie-details/${movie.title.replace(/\s+/g, '')}`,
          state: {movie: movie, user: this.props.user}
        }}><h3 key={movie.id}>{movie.title}</h3></Link>
    })

    return (
      <main>
        <h1 className='userName'>{name}</h1>
        <h2 className='favorites-label'>Favorites</h2>
        <div className='favorites'>{favoriteDisplay}</div>
        <button className='logout-button'>Logout</button>

      </main>
    )
  }
}

export default Profile;
