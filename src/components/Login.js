import React, { Component } from 'react';
class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      errorMsg: '',
      redirect: false
    }
  }

  render() {
    const { email, password, errorMsg, redirect } = this.state;

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
          />
          </label>

      </form>
    )
  }

}

export default Login;
