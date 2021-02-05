import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieDetails from './components/MovieDetails';
import About from './components/FooterLinks/About';
import Careers from './components/FooterLinks/Careers';
import ContactUs from './components/FooterLinks/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <h1>Rotten<br/> Tomatillos</h1>
      </header>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/movie-details/:title' exact component={MovieDetails} />
        <Route path='/about' exact component={About} />
        <Route path='/careers' exact component={Careers} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
      <footer>
        <Link to='/about'>About</Link>
        <Link to='/careers'>Careers</Link>
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
