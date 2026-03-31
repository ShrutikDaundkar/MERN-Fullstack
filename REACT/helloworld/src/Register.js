import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>Register Component</h1>
        <p>Please enter your details to register.</p>
        <form>

            <label>First Name:</label>
            <input type="text" name="firstName" />
            <br/>
            <label>Last Name:</label>
            <input type="text" name="lastName" />
            <br/>
            <label>Username:</label>
            <input type="text" name="username" />
            <br/>
            <label>Password:</label>
            <input type="password" name="password" />
            <br/>
            <button type="submit">Register</button>
        </form>
      </div>
    );
  }

}

export default Register;