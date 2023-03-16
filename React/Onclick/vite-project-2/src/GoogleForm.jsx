import React, { Component } from 'react';
//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstNameError: false,
      lastNameError: false,
      usernameError: false,
      passwordError: false,
      confirmPasswordError: false,
      formError: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, username, password, confirmPassword } = this.state;

    // Check if all fields are filled out
    if (!firstName || !lastName || !username || !password || !confirmPassword) {
      this.setState({ formError: true });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      this.setState({ passwordError: true, confirmPasswordError: true });
      return;
    }

    // Submit form data
    console.log(this.state);
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      password,
      confirmPassword,
      firstNameError,
      lastNameError,
      usernameError,
      passwordError,
      confirmPasswordError,
      formError
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="FIRST NAME"
          label="First Name"
          variant="outlined"
          name="firstName"
          value={firstName}
          error={firstNameError}
          onChange={this.handleInputChange}
          fullWidth
          margin="normal"
          required
        />&emsp;
        <input type="text"  placeholder="LASTNAME"
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={lastName}
          error={lastNameError}
          onChange={this.handleInputChange}
          fullWidth
          margin="normal"
          required
        /><br/>
        <input type="text" placeholder="USERNAME"
          label="Username"
          variant="outlined"
          name="username"
          value={username}
          error={usernameError}
          onChange={this.handleInputChange}
          fullWidth
          margin="normal"
          required
        />&emsp;

<input type="date" name="DOB" placeholder="DATE OF BIRTH" /><br/>
        <input placeholder="PASSWORD"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={password}
          error={passwordError}
          onChange={this.handleInputChange}
          fullWidth
          margin="normal"
          required
        />&emsp;
        <input  placeholder="CONFIRM PASSWORD"
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          error={confirmPasswordError}
          onChange={this.handleInputChange}
          fullWidth
          margin="normal"
          required
        /><br/>
        {formError && (
          <p style={{ color: 'red' }}>
            Please fill out all fields.
          </p>
        )}
        {passwordError && (
          <p style={{ color: 'red' }}>
            Passwords do not match.
          </p>
        )}
        <button variant="contained" color="primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default SignUpForm;