import { Component } from "react";

class StaleCounterClassComp extends Component {
  state = {
    counter: 0,
    name: "Ankit",
  };

  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });

    this.setState({
      name: "Raja",
    });

    this.setState({
      counter: this.state.counter + 1,
    });

    this.setState({
      counter: this.state.counter + 1,
    });

    console.log("This.state.counter: ", this.state.counter);
  };

  updateCounterFixed = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    this.setState((prevState) => {
      return {
        name: "Raja",
      };
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    console.log("This.state.counter: ", this.state.counter);
  };
  render() {
    console.log("Re-Render: ", this.state.counter);
    // State desctructuring
    const { counter, name } = this.state;
    return (
      <>
        <p>
          Counter: {counter} {name}
        </p>
        <div>
          <button onClick={this.updateCounterFixed}>Increment</button>
        </div>
      </>
    );
  }
}

export default StaleCounterClassComp;
