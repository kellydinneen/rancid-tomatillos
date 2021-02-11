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
      logIn: this.logIn.bind(this),
      logOut: this.logOut.bind(this),
      leaveHome: this.leaveHome.bind(this),
      goHome: this.goHome.bind(this),
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
    console.log('MOUNT', this)
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
    console.log('RETURN HOME', this, this.state);
    this.setState({ atHome: true })
  }

  leaveHome() {
    console.log('LEAVE', this.state);
    this.setState({ atHome: false })
    console.log('AFTER', this.state);
  }

  logIn(user) {
      this.setState({ user: user })
    }

  logOut() {
      this.setState({ user: null })
    }


  render() {
    const {movies, isLoading, errorMsg, atHome, user} = this.state;

    return (
      <>
      <header>
        <nav className="header-content">
          <h1>
            <NavLink to={{
              pathname:'/'
            }}  className="site-title" onClick={this.state.goHome}>Rancid<br/> Tomatillos
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
              <img src={homeButton} alt="home button" className='home-button' onClick={this.state.goHome}/>
            </NavLink>
          }
        </nav>
        <section className="gradient"></section>
      </header>
        <Switch>
          <Route path='/' exact render={() => <Home
            errorMsg={errorMsg}
            isLoading={isLoading}
            movies={movies}
            leaveHome={this.state.leaveHome}
            />} />
          <Route path='/movie-details/:title' exact component={MovieDetails} />
          <Route path='/about' exact component={About} />
          <Route path='/faq' exact component={FAQ} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <footer>
          <section className="gradient"></section>
          <div className="footer-links">
            <Link className="about footer-link" to='/about' onClick={this.state.leaveHome}>About</Link>
            <Link className="faq footer-link" to='/faq' onClick={this.state.leaveHome}>FAQ</Link>
            <Link className="contact-us footer-link" to='/contact-us' onClick={this.state.leaveHome}>Contact Us</Link>
          </div>
        </footer>
      </>
    )
  }

}

export default App;
