import React, { Component } from 'react';
import './Login.css';
import { fetchUsers } from '../apiCalls'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      user: ''
    }
  }

  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateInputs() {
    const { email, password } = this.state;
    return !!(email.trim() && password.trim());
  }

  retrieveUsers = async (event) => {
    event.preventDefault();
    if(this.validateInputs()){
      try {
        const { email, password } = this.state;
        const result = await fetchUsers();
        const foundUser = result.users.filter(user => user.username === email && user.password === password )
        this.setState({user: foundUser[0]})
      } catch({ message }) {
        this.setState({ username: '', password: '', errorMsg: message});
      }
    } else {
      this.setState({ errorMsg: 'Please enter vaild email and password!'})
    }
  }

  render() {
    const { email, password, errorMsg, user } = this.state;

    return (
      <form>
        <h2 className="form-title">Please Login</h2>
        <label>
          Email:
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.updateForm}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.updateForm}
          />
        </label>
        {errorMsg && <p>{errorMsg}</p>}
        <button className='login-btn' onClick={this.retrieveUsers}>Login</button>
      </form>
    )
  }

}

export default Login;
