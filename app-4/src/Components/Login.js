import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e });
  }

  handlePasswordChange(e) {
    this.setState({ password: e });
  }

  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          placeholder='username' onChange={e => this.handleUsernameChange(e.target.value)}
          type="text"
        />
        <input
          placeholder='password' onChange={e => this.handlePasswordChange(e.target.value)}
          type="text"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;