import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import TopRated from './components/TopRated';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(res => res.json())
        .then(result => this.setState({
              movies: result.movies,
              isLoading: false
            }))
        .catch(error => this.setState({
              isLoading: false,
              error
            }))
  }

  render() {
    const {movies, isLoading, error} = this.state;

    if(error) {
      return <p>{error.message}</p>
    }

    if(isLoading) {
      return <p>Loading...</p>
    }

    return (
      <>
        <header>
          <h1>Rotten<br/> Tomatillos</h1>
        </header>
        <main>
          <TopRated movies={movies}/>
          <Movies movies={movies}/>
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
