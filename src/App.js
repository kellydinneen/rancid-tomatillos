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
      return <p className='loading-message'>Loading...</p>
    }

    return (
      <>
        <main>
          <TopRated movies={movies}/>
          <Movies movies={movies}/>
        </main>
      </>
    )
  }

}

export default App;
