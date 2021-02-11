import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/FooterLinks/About';
import FAQ from './components/FooterLinks/FAQ';
import ContactUs from './components/FooterLinks/ContactUs';
import { fetchMovieData } from './apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: true,
      errorMsg: null,
      atHome: true,
      loggedIn: false
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
    const {movies, isLoading, errorMsg, atHome, loggedIn} = this.state;

    return (
      <>
        <Header atHome={atHome} loggedIn={loggedIn}/>
        <Switch>
          <Route path='/' exact render={() => <Home errorMsg={errorMsg} isLoading={isLoading} movies={movies} />} />
          <Route path='/movie-details/:title' exact component={MovieDetails} />
          <Route path='/about' exact component={About} />
          <Route path='/faq' exact component={FAQ} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <footer>
          <section className="gradient"></section>
          <div className="footer-links">
            <Link className="about footer-link" to='/about'>About</Link>
            <Link className="faq footer-link" to='/faq'>FAQ</Link>
            <Link className="contact-us footer-link" to='/contact-us'>Contact Us</Link>
          </div>
        </footer>
      </>
    )
  }

}

export default App;
