import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Poster from './Poster';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.user.name,
      favorites: props.user.favorites,
      isLogginOut: false
    }
  }

  logOutUser = () => {
    this.setState({ isLoggingOut: true})
    this.props.goHome()
    this.props.logOut()
  }

  render() {
    const {name, favorites, isLoggingOut} = this.state;

    let favs = favorites.map(fav => {
      return (<Poster
        movie={fav}
        key={fav.id}
        leaveHome={this.props.leaveHome}
        user={this.props.user}
      />)
    })

    return (
      <main>
        <h1 className='userName'>{name}</h1>
        <h2 className='favorites-label'>Favorites</h2>
        <section className='favorites'>{favs}</section>
        <button className='logout-button' onClick={this.logOutUser}>Logout</button>
        {isLoggingOut && <Redirect to='/'/>}
      </main>
    )
  }
}

export default Profile;
