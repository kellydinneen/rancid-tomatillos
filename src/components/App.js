import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import MovieDetails from './MovieDetails';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import About from './FooterLinks/About';
import FAQ from './FooterLinks/FAQ';
import ContactUs from './FooterLinks/ContactUs';
import homeButton from '../Images/home.png';
import { fetchMovieData } from '../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: true,
      errorMsg: null,
      atHome: window.location.pathname === '/' ? true : false,
      user: null,
      onProfile: false,
      notOnLoginPage: true
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

  go = (place) => {
    if(place === 'atHome') {
      this.setState({ atHome: true, notOnLoginPage: true })
      this.leave('profile')
    } else if(place === 'profile'){
      this.setState({ onProfile: true })
      this.leave('atHome')
    } else if(place === 'login'){
      this.setState({ notOnLoginPage: false })
      this.leave('atHome')
    }
  }

  leave = (page) => {
    if(page === 'atHome'){
      this.setState({ atHome: false })
    } else {
      this.setState({ onProfile: false })
    }
  }

  logIn = (user) => {
      this.setState({ user: user })
    }

  logOut = () => {
      this.setState({ user: '' })

    }

  render() {
    let {movies, isLoading, errorMsg, atHome, user, onProfile, notOnLoginPage} = this.state;

    return (
      <>
      <header>
        <nav className="header-content">
            <NavLink to={{
              pathname:'/'
            }}  className="site-title" onClick={() => this.go('atHome')}><h1>Rancid<br/> Tomatillos
            </h1></NavLink>
            {notOnLoginPage && !user && <NavLink to={{
              pathname:'/login'
            }} className='login-link' onClick={() => this.go('login')}>
              <button className='login-button'>Log in</button>
            </NavLink>}
            {user && !onProfile && <NavLink to={{
              pathname:'/profile'
            }} className='profile-link' onClick={() => this.go('profile')}>
            <button className='profile-button'>Profile</button>
            </NavLink>}
          {!atHome &&
            <NavLink to={{
              pathname:'/'
              }}>
              <img src={homeButton} alt="home button" className='home-button' onClick={() => this.go('atHome')}/>
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
            user={user}
            leaveHome={() => this.leave('atHome')}
            />} />
          <Route path='/login' exact render={() => <Login logIn={this.logIn} goHome={() => this.go('atHome')}/>} />
          <Route path='/profile' exact render={() => <Profile user={user}
          logOut={this.logOut}
          goHome={() => this.go('atHome')}
          leaveHome={() => this.leave('profile')}/>} />
          <Route
            path='/movie-details/:title'
            render={(props) => (
              <MovieDetails {...props} logIn={this.logIn} />
            )}/>
          <Route path='/about' exact component={About} />
          <Route path='/faq' exact component={FAQ} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <footer>
          <section className="gradient"></section>
          <nav className="footer-links">
            <NavLink className="about footer-link" to='/about' onClick={() => this.leave('atHome')}>About</NavLink>
            <NavLink className="faq footer-link" to='/faq' onClick={() => this.leave('atHome')}>FAQ</NavLink>
            <NavLink className="contact-us-page footer-link" to='/contact-us' onClick={() => this.leave('atHome')}>Contact Us</NavLink>
          </nav>
        </footer>
      </>
    )
  }

}

export default App;
