import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './App.css';
import Movies from './components/Movies';
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
        <main>
          <TopRated movies={this.state.movies}/>
          <Movies movies={this.state.movies}/>
        </main>
      </>
    )
  }

}

export default App;
