import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';
import TopRated from './components/TopRated';
import { fetchMovieData } from './apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: true,
      errorMsg: null
    }
  }

  checkRes(response) {
    if (!response.ok) {
      this.setState({errorMsg: `${response.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`})
    }
  }

  componentDidMount() {
    fetchMovieData('movies')
        .then(result =>{
          if (!result.movies) {
            this.setState({
              isLoading: false,
              errorMsg: result
            })
          } else {
            this.setState({
                movies: result.movies,
                isLoading: false
              })
          }})
  }

  render() {
    const {movies, isLoading, errorMsg} = this.state;

    if(errorMsg) {
      return <p className='error-message'>{errorMsg}</p>
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
