import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      name: this.props.user ? this.props.user.name : '',
      favorites: this.props.user ? this.props.user.favorites.map(favorite => favorite.title) : []
    }
  }

  render() {
    const {name, favorites} = this.state;

    return (
      <main>
        <h1 className='userName'>{name}</h1>
        <h2 className='favorites-label'>Favorites</h2>
        <p className='favorites'>{favorites.join(', ')}</p>
        <button className='logout-button'>Logout</button>

      </main>
    )
  }
}

export default Profile;
