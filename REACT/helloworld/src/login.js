import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login Component</h1>
        <p>Please enter your credentials to log in.</p>
        <form>
            <label>Username:</label>
            <input type="text" name="username" />
            <br/>
            <label>Password:</label>
            <input type="password" name="password" />
            <br/>
            <button type="submit">Login</button>
        </form>
      </div>
    );
  }

}

export default Login;
