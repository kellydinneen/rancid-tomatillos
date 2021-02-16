import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Poster from './Poster';
import Movies from './Movies';
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
    const {name, favorites, isLoggingOut } = this.state;

    return (
      <main>
        <h1 className='userName'>{name}</h1>
        <h2 className='favorites-label'>Favorites</h2>
        <section className='favorites'>
          <Movies movies={favorites} leaveHome={this.props.leaveHome} user={this.props.user}/>
        </section>
        <button className='logout-button' onClick={this.logOutUser}>Logout</button>
        {isLoggingOut && <Redirect to='/'/>}
      </main>
    )
  }
}

export default Profile;
