import React, { Component } from 'react';
import './App.css';
import movieData from './movieData';
import TopRated from './components/TopRated';

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
          <TopRated movies={this.state.movies}/>
          <div>movies</div>
        </main>
        <footer>footer</footer>
      </>
    )
  }

}

export default App;
