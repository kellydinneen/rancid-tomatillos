import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      name: this.props.user ? this.props.user.name : '',
      favorites: this.props.user ? this.props.user.favorites : []
    }
  }

  render() {
    const {name, favorites} = this.state;

    const favoriteDisplay = favorites.map(movie => {
      console.log(movie);
      const path = `/movie-details/${movie.title.replace(/\s+/g, '')}`;
      return <Link className='link-to-favorite' to={{
          pathname: path,
          state: {movie: movie, user: this.props.user}
        }}><h3 key={movie.id}>{movie.title}</h3></Link>
    })

    console.log(favoriteDisplay);

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
