import React from "react";
import { Component } from "react";
import "./style.css";

class Buttons extends Component() {
  state = { value: 0 };

  incrementHandler = () => {
    if (this.value < 10) {
      this.setState((prevValue) => prevValue + 1);
    }
  };
  decrementHandler = () => {
    if (this.value > -10) {
      this.setState((prevValue) => prevValue - 1);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler} type="button">
          Increment
        </button>
        <button onClick={this.decrementHandler} type="button">
          Decrement
        </button>
        <div
          style={{
            color:
              this.state.value > 0
                ? "green"
                : this.state.value === 0
                ? "black"
                : "red",
          }}
        >
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default Buttons;
