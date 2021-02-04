import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/FooterLinks/About';
import Careers from './components/FooterLinks/Careers';
import ContactUs from './components/FooterLinks/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/about' exact component={About} />
        <Route path='/careers' exact component={Careers} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
