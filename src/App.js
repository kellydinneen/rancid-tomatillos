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
      errorMessage: null
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then(res => res.json())
        .then(response => {
          this.setState({movies: response.movies,isLoading: false, errorMessage: response.error})
        })
        // .catch(error => {
        //   this.setState({
        //         isLoading: false,
        //         errorMessage: error.status
        //       })
        // })
  }

  render() {
    const {movies, isLoading, errorMessage} = this.state;
    console.log(errorMessage);

    if(errorMessage) {
      return <p>{errorMessage}</p>
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
