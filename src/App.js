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
        <header>header</header>
        <main>
          <div>top rated</div>
          <Movies movies={this.state.movies}/>
        </main>
        <footer>footer</footer>
      </>
    )
  }

}

export default App;
