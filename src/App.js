import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
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
        <header>
          <h1>Rotten Tomatillos</h1>
        </header>
        <main>
          <div>top rated</div>
          <Movies movies={this.state.movies}/>
        </main>
        <footer>
          <h3>About</h3>
          <h3>Careers</h3>
          <h3>Contact Us</h3>
        </footer>
      </>
    )
  }

}

export default App;
