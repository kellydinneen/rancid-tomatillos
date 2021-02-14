import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import MovieDetails from './MovieDetails';
import Home from './Home';
import Login from './Login';
import About from './FooterLinks/About';
import FAQ from './FooterLinks/FAQ';
import ContactUs from './FooterLinks/ContactUs';
import homeButton from '../Images/home.png';
import { fetchMovieData } from '../apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: true,
      errorMsg: null,
      atHome: window.location.pathname === '/' ? true : false,
      user: null
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

  goHome = () => {
    this.setState({ atHome: true })
  }

  leaveHome = () => {
    this.setState({ atHome: false })
  }

  logIn = (user) => {
      this.setState({ user: user })
    }

  logOut = () => {
      this.setState({ user: null })
    }


  render() {
    const {movies, isLoading, errorMsg, atHome, user} = this.state;

    return (
      <>
      <header>
        <nav className="header-content">
            <NavLink to={{
              pathname:'/'
            }}  className="site-title" onClick={this.goHome}><h1>Rancid<br/> Tomatillos
            </h1></NavLink>
            <NavLink to={{
              pathname:'/login'
            }} className='login-link' onClick={this.leaveHome}>
              {!user && <button className='login-button'>Log in</button>}
              {user && <button className='logout-button'>Log out</button>}
            </NavLink>
          {!atHome &&
            <NavLink to={{
              pathname:'/'
              }}>
              <img src={homeButton} alt="home button" className='home-button' onClick={this.goHome}/>
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
            leaveHome={this.leaveHome}
            />} />
          <Route path='/movie-details/:title' exact component={MovieDetails} />
          <Route path='/login' exact component={Login} />
          <Route path='/about' exact component={About} />
          <Route path='/faq' exact component={FAQ} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <footer>
          <section className="gradient"></section>
          <nav className="footer-links">
            <NavLink className="about footer-link" to='/about' onClick={this.leaveHome}>About</NavLink>
            <NavLink className="faq footer-link" to='/faq' onClick={this.leaveHome}>FAQ</NavLink>
            <NavLink className="contact-us-page footer-link" to='/contact-us' onClick={this.leaveHome}>Contact Us</NavLink>
          </nav>
        </footer>
      </>
    )
  }

}

export default App;
