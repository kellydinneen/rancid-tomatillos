import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.location.state.user.name,
      favorites: props.location.state.user.favorites
    }
  }

  render() {
    const {name, favorites} = this.state;

    return (
      <main>
        <h1 className='userName'>{name}</h1>
        <h2 className='favorites-label'>Favorites</h2>
        <p className='favorites'>{favorites}</p>
        <button className='logout-button'>Logout</button>

      </main>
    )
  }
}

export default Profile;
