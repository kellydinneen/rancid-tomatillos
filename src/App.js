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
      errorMsg: null
    }
  }

  checkRes(response) {
    if (!response.ok) {
      this.setState({errorMsg: "Something went wrong! Sorry! Try again later or go to Contact Us to contact the developers with questions!"})
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(res => {
          this.checkRes(res)
          return res.json()})
        .then(result => {
          this.setState({
              movies: result.movies,
              isLoading: false,
              errorMsg: result.error
            })})
        .catch(error => console.log(error))
  }

  render() {
    const {movies, isLoading, errorMsg} = this.state;

    if(errorMsg) {
      return <p>{errorMsg}</p>
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
