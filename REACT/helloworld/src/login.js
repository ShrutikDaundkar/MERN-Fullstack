import React from 'react';

class Login extends React.Component {
  render() {
     return (
    <div>
      <h1>Login Component</h1>
      <p>Please enter your credentials to log in.</p>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
}
}

export default Login;
