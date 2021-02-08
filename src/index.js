import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import homeButton from './home.png';
import MovieDetails from './components/MovieDetails';
import About from './components/FooterLinks/About';
import FAQ from './components/FooterLinks/FAQ';
import ContactUs from './components/FooterLinks/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <h1>
          <Link to={{
            pathname:'/'
          }}  className="site-title">Rotten<br/> Tomatillos
          </Link>
        </h1>
        <Link to={{
          pathname:'/'
        }}>
          <img src={homeButton} className='home-button'/>
        </Link>

      </header>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/movie-details/:title' exact component={MovieDetails} />
        <Route path='/about' exact component={About} />
        <Route path='/faq' exact component={FAQ} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
      <footer>
        <Link to='/about'>About</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </footer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
