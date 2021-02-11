import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
    }
  }

  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password, errorMsg } = this.state;

    return (
      <form>
        <h2 className="form-title">Please Login</h2>
        <label>
          Email
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.updateForm}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.updateForm}
          />
        </label>
        {errorMsg && <p>{errorMsg}</p>}
        <button className='login-btn'>Login</button>
      </form>
    )
  }

}

export default Login;
