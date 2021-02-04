import React, { Component } from 'react';
import './App.css';
import movieData from './movieData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {

    return (
      <>
        <header>header</header>
        <main>
          <div>top rated</div>
          <div>movies</div>
        </main>
        <footer>footer</footer>
      </>
    )
  }

}

export default App;
