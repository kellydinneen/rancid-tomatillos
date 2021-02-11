import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
// import Header from './components/Header';
import About from './components/FooterLinks/About';
import FAQ from './components/FooterLinks/FAQ';
import ContactUs from './components/FooterLinks/ContactUs';
import homeButton from './home.png';
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
      user: null
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

  goHome() {
    this.setState({ atHome: true })
  }

  leaveHome() {
    this.setState({ atHome: false })
  }

  logIn(user) {
      this.setState({ user: user })
    }

  logOut() {
      this.setState({ user: null })
    }


  render() {
    const {movies, isLoading, errorMsg, atHome, loggedIn} = this.state;
    const leaveHome = this.leaveHome;
    const logIn = this.logIn;
    const logOut = this.logOut;

    return (
      <>
      <header>
        <nav className="header-content">
          <h1>
            <NavLink to={{
              pathname:'/'
            }}  className="site-title">Rancid<br/> Tomatillos
            </NavLink>
          </h1>
            <NavLink to={{
              pathname:'/'
              }}>
              {!user && <button>Log in</button>}
              {user && <button>Log out</button>}
            </NavLink>
          {!atHome &&
            <NavLink to={{
              pathname:'/'
              }}>
              <img src={homeButton} alt="home button" className='home-button'/>
            </NavLink>
          }
        </nav>
        <section className="gradient"></section>
      </header>
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
