import { Component } from "react";
/*import styled from "styled-components";

const Input = styled("input")`
  width: 100%;
`;

const DivFormElement = styled("div")`
  padding: 12px;
  margin-bottom: 6px;
  background-color: beige;
`;*/
class FormElement extends Component {
  /*  state = {
    firstName: "",
    lastName: "",
    email: "",
  }; */

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  handleInputChange = (e) => {
    console.log(e);
  };

  render() {
    const { firstName, lastName, email } = this.state;
    console.log("Re-render");
    return (
      <>
        <div className="form-element">
          <label htmlFor="firstName">First Name: {firstName}</label>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            onChange={(meraEvent) => {
              const { value, name } = meraEvent.target;
              console.log("MeraEvent: ", value, name);
            }}
          />
        </div>

        <div className="form-element">
          <label htmlFor="lastName">Last Name: {lastName}</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-element">
          <label htmlFor="email">Email: {email}</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={this.handleInputChange}
          />
        </div>
      </>
    );
  }
}

export default FormElement;
