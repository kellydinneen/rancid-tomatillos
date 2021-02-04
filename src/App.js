import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
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

        <header>
          <h1>Rotten<br/> Tomatillos</h1>
        </header>
        <main>
          <TopRated movies={this.state.movies}/>
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
