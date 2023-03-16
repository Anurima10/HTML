import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    
  };

  render() {
    const { name, email, phone, message } = this.state;

    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(meraEvent) => {
              const { value, name } = meraEvent.target;
              console.log("MeraEvent: ", value, name);}} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={phone} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={message} onChange={this.handleChange} />
        </label>
        <br />
        <button onClick={this.handleSubmit} type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;