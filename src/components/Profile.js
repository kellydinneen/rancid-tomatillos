import React, { Component } from 'react';
import Movies from './Movies';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user
    }
  }

  render() {
    const {
      user
    } = this.state;

    return (
      <main>
        <h1 className='userName'>{user.name}</h1>
        <h2 className='favorites-label'>Favorites</h2>
        <section className='favorites'>
          <Movies movies={user.favorites} leaveHome={this.props.leaveHome} user={user}/>
        </section>
        <h2 className='watched-label'>Watched</h2>
        <section className='watched'>
          <Movies movies={user.favorites} leaveHome={this.props.leaveHome} user={user}/>
        </section>
      </main>
    )
  }
}

export default Profile;
